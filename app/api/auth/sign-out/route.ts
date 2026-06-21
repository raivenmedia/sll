import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { env, hasSupabase } from "@/lib/env";

async function clearSession(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.set("yolic-demo", "", { path: "/", maxAge: 0 });

  if (hasSupabase) {
    const supabase = createServerClient(env.supabaseUrl!, env.supabaseAnonKey!, {
      cookies: {
        getAll() {
          return request.headers.get("cookie")?.split(";").map((cookie) => {
            const [name, ...value] = cookie.trim().split("=");
            return { name, value: value.join("=") };
          }) ?? [];
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    });
    await supabase.auth.signOut();
  }

  return response;
}

export async function GET(request: Request) {
  return clearSession(request);
}

export async function POST(request: Request) {
  return clearSession(request);
}
