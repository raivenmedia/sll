import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { env, hasSupabase } from "@/lib/env";
import { loginSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "A valid email and password are required." }, { status: 400 });
  }

  if (!hasSupabase) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("yolic-demo", "1", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 8 });
    return response;
  }

  const response = NextResponse.json({ success: true });
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

  const { error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  return response;
}
