Safe Command Wrapper
--------------------

This repository includes a simple, local denylist to block risky shell commands.

- Config: `safe_commands.json`
- Runner: `python3 scripts/safe_run.py`

Usage
-----

- Basic: `python3 scripts/safe_run.py -- <command> [args...]`
- Omit `--`: `python3 scripts/safe_run.py <command> [args...]`
- Dry run: `python3 scripts/safe_run.py --dry-run -- <command> ...`
- Explain blocks: `python3 scripts/safe_run.py --explain -- <command> ...`
- Bypass (not recommended): `python3 scripts/safe_run.py --force -- <command> ...` or `SAFE_RUN_ALLOW=1 ...`

Examples
--------

- Allowed: `python3 scripts/safe_run.py -- echo "hello"`
- Blocked: `python3 scripts/safe_run.py -- rm -rf /`

Configuration
-------------

Edit `safe_commands.json` to add/remove patterns.

- `deny_regex`: array of regex patterns matched against the full command string.
- `deny_substrings`: array of literal substrings that must not appear.

Notes
-----

- The command runs without a shell (no globbing/expansion), reducing accidental effects.
- Use `--explain` to see which pattern triggered a block.
- You can alias this for convenience, e.g. `alias run='python3 scripts/safe_run.py --'`.

