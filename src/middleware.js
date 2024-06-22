import { NextResponse } from "next/server";

// Middleware function to check authentication
export const middleware = async (request) => {
  const token = request.cookies.get('__Secure-next-auth.session-token');
  const pathname = request.nextUrl.pathname;

  // Allow API requests to proceed without authentication
  if (pathname.includes('api')) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the login page
  if (!token) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
};

// Configuring the matcher for specific routes
export const config = {
  matcher: [
    "/my-bookings/:path*", // Match any nested paths under /my-bookings
    "/services/path/:path*", // Match any nested paths under /services/path
  ]
};
