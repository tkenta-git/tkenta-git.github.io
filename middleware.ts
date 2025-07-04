import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Allow /ja and /en and their subpaths
  if (pathname.startsWith('/ja') || pathname.startsWith('/en')) {
    return NextResponse.next();
  }
  // Redirect root (/) to /ja
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ja', request.url));
  }
  // For all other paths, pass through
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
}; 