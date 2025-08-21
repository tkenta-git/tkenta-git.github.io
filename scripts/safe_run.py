#!/usr/bin/env python3
import json
import os
import re
import shlex
import subprocess
import sys
from typing import List, Tuple


CONFIG_PATHS = [
    os.path.join(os.getcwd(), "safe_commands.json"),
    os.path.join(os.path.dirname(__file__), "..", "safe_commands.json"),
]


def load_config() -> dict:
    for path in CONFIG_PATHS:
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except FileNotFoundError:
            continue
        except json.JSONDecodeError as e:
            print(f"safe_run: invalid JSON in {path}: {e}", file=sys.stderr)
            sys.exit(2)
    # Default empty config if none found
    return {"deny_regex": [], "deny_substrings": []}


def match_denylist(cmd_str: str, deny_regex: List[str], deny_substrings: List[str]) -> Tuple[bool, str]:
    # Substring checks (simple and fast)
    for s in deny_substrings:
        if s and s in cmd_str:
            return True, f"substring: {s}"

    # Regex checks (more expressive)
    for pattern in deny_regex:
        if not pattern:
            continue
        try:
            if re.search(pattern, cmd_str):
                return True, f"regex: {pattern}"
        except re.error as e:
            # Invalid regex; treat as non-match but warn once
            print(f"safe_run: warning: invalid regex in denylist: {pattern} ({e})", file=sys.stderr)
            continue

    return False, ""


def print_usage():
    print(
        """
Usage: python3 scripts/safe_run.py [--dry-run] [--force] [--explain] -- <command> [args...]

Runs a command only if it does not match denylist patterns from safe_commands.json.

Options:
  --dry-run   Print decision without executing.
  --force     Bypass the denylist (not recommended). Same as env SAFE_RUN_ALLOW=1.
  --explain   When blocked, print the pattern that matched.

Examples:
  python3 scripts/safe_run.py -- echo "hello"
  python3 scripts/safe_run.py -- rm -rf build   # likely blocked
  SAFE_RUN_ALLOW=1 python3 scripts/safe_run.py -- rm -rf build  # bypass
        """.strip()
    )


def main(argv: List[str]) -> int:
    if not argv:
        print_usage()
        return 1

    # Parse flags until `--`
    dry_run = False
    force = os.environ.get("SAFE_RUN_ALLOW", "0") not in ("", "0", "false", "False")
    explain = False

    cmd_args: List[str] = []
    i = 0
    while i < len(argv):
        a = argv[i]
        if a == "--":
            cmd_args = argv[i + 1 :]
            break
        elif a == "--dry-run":
            dry_run = True
        elif a == "--force":
            force = True
        elif a == "--explain":
            explain = True
        elif a.startswith("-"):
            print(f"safe_run: unknown option: {a}", file=sys.stderr)
            print_usage()
            return 2
        else:
            # If user omitted `--`, treat the rest as command
            cmd_args = argv[i:]
            break
        i += 1

    if not cmd_args:
        print("safe_run: no command provided", file=sys.stderr)
        print_usage()
        return 2

    cfg = load_config()
    deny_regex = cfg.get("deny_regex", []) or []
    deny_substrings = cfg.get("deny_substrings", []) or []

    cmd_str = " ".join(cmd_args)

    if force:
        print(f"safe_run: bypassing denylist via --force/SAFE_RUN_ALLOW; running: {cmd_str}")
        if dry_run:
            return 0
        return subprocess.call(cmd_args)

    blocked, reason = match_denylist(cmd_str, deny_regex, deny_substrings)
    if blocked:
        msg = f"safe_run: blocked by denylist ({reason}).\n  command: {cmd_str}"
        if explain:
            print(msg, file=sys.stderr)
        else:
            print("safe_run: command blocked by denylist.", file=sys.stderr)
        return 3

    print(f"safe_run: allowed: {cmd_str}")
    if dry_run:
        return 0

    try:
        # Execute the command without invoking a shell to avoid expansions
        return subprocess.call(cmd_args)
    except FileNotFoundError:
        print(f"safe_run: command not found: {shlex.quote(cmd_args[0])}", file=sys.stderr)
        return 127


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

