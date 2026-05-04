import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await getToken({ req: request }); // secret .env থেকে নিজে নেয়
  const { pathname } = request.nextUrl;

  // প্রটেক্টেড রাউট: যেকোনো /products/:id* এবং /profile এর নিচের সব রাউট (যেমন /profile/update)
  const isProtectedRoute = pathname.startsWith("/products/") || pathname.startsWith("/profile");

  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:id*", "/profile/:path*"],
};