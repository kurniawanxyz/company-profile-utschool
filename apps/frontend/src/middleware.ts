import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  // Jika token tidak ada, redirect ke halaman login
  if (!token) {
    return NextResponse.rewrite(new URL('/admin/login', request.url));
  }

  if(request.nextUrl.pathname == "/admin/login"){
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

// Configurasi route yang ingin dikenakan middleware
export const config = {
  matcher: ['/admin/:path*'], // Atur path yang perlu dicek
};
