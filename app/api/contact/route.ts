import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { env, hasSupabase } from "@/lib/env";
import { sendInternalNotification } from "@/lib/email";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (hasSupabase) {
    const client = createClient(env.supabaseUrl!, env.supabaseAnonKey!, { auth: { persistSession: false } });
    await client.from("messages").insert({ ...parsed.data, status: "new" });
  }

  await sendInternalNotification(
    `New contact form submission from ${parsed.data.name}`,
    `<p><strong>Subject:</strong> ${parsed.data.subject}</p><p>${parsed.data.message}</p>`,
  );

  return NextResponse.json({ message: "Your message has been received. We will get back to you shortly." });
}
