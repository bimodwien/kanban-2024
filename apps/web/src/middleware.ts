import { NextRequest, NextResponse } from 'next/server';

declare function atob(data: string): string;

const protectedRoutes = ['/'];

function decodeJWT<T>(token: string): T | null {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) {
      return null;
    }
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return JSON.parse(jsonPayload) as T;
  } catch (e) {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl;
  if (!protectedRoutes.includes(pathname.pathname)) {
    return NextResponse.next();
  }
  const access_token = req.cookies.get('access_token')?.value;
  if (!access_token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  try {
    const user = decodeJWT<{ [key: string]: any }>(access_token);
    if (!user) {
      throw new Error('Invalid token');
    }
    return NextResponse.next();
  } catch (error) {
    const response = NextResponse.redirect(new URL('/login', req.url));
    response.cookies.set('access_token', '', { maxAge: -1 });
    response.cookies.set('refresh_token', '', { maxAge: -1 });
    return response;
  }
}

export const config = {
  matcher: ['/'],
};
