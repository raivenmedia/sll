export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  resendApiKey: process.env.RESEND_API_KEY,
  notificationEmail: process.env.NOTIFICATION_EMAIL ?? "hello@yolic.com",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
};

export const hasSupabase = Boolean(env.supabaseUrl && env.supabaseAnonKey);
export const hasResend = Boolean(env.resendApiKey);
