import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('hello world5');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/about/:path*'],
};

// export function middleware() {
//   console.log('hello world5');
//   return Response.json({
//     msg: 'hello there',
//   });
// }

// export const config = {
//   matcher: '/about',
// };
