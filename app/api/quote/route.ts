import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { env, hasSupabase } from "@/lib/env";
import { sendInternalNotification } from "@/lib/email";
import { quoteSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (hasSupabase) {
    const client = createClient(env.supabaseUrl!, env.supabaseAnonKey!, { auth: { persistSession: false } });
    await client.from("quote_requests").insert({ ...parsed.data, status: "new" });
  }

  await sendInternalNotification(
    `New quote request from ${parsed.data.company}`,
    `<p><strong>Service:</strong> ${parsed.data.service}</p><p><strong>Budget:</strong> ${parsed.data.budget}</p><p>${parsed.data.description}</p>`,
  );

  return NextResponse.json({ message: "Your quote request is in the pipeline. Expect a follow-up within one business day." });
}
