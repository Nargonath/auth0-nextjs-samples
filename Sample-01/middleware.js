import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/middleware';
import { NextResponse } from 'next/server';

export default withMiddlewareAuthRequired(function middleware(req) {
  console.log(req.nextUrl);
  return NextResponse.next();
});

// export default function middleware(req) {
//   console.log(req.nextUrl);
//   // returns only [ 'get', 'getWithOptions', 'set', 'delete', 'clear', 'response' ]
//   // getAll is not available
//   console.log(Object.getOwnPropertyNames(req.cookies));
//   return NextResponse.next();
// }

export const config = {
  matcher: '/api/protected'
};
