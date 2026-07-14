import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Kiểm tra cookie session (giả lập)
  const isAdmin = request.cookies.get("admin_session")?.value === "true";

  // Nếu vào admin mà chưa đăng nhập → redirect về login
  if (path.startsWith("/admin") && !isAdmin && path !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Nếu đã đăng nhập mà cố vào login → redirect về dashboard
  if (path === "/admin/login" && isAdmin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
