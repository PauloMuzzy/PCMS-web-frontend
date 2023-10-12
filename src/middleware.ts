import { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value
  // if (!authToken) return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/dashboard/:path*']
}
