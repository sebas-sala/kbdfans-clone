import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.nextUrl.pathname.startsWith("/api")) {
    res.headers.append("Access-Control-Allow-Origin", "*");
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }

  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  return res;
}
