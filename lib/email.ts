import { Resend } from "resend";
import { env, hasResend } from "@/lib/env";

function getResend() {
  if (!hasResend) return null;
  return new Resend(env.resendApiKey);
}

export async function sendInternalNotification(subject: string, html: string) {
  const resend = getResend();
  if (!resend) {
    return { delivered: false, reason: "Resend is not configured." };
  }

  await resend.emails.send({
    from: "Yolic Platform <noreply@yolic.com>",
    to: [env.notificationEmail],
    subject,
    html,
  });

  return { delivered: true };
}
