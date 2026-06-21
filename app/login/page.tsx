import { ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/marketing/login-form";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Staff Login | Yolic", description: "Secure staff access for the Yolic platform dashboard.", path: "/login" });

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,rgba(244,196,0,0.2),#fff)] px-4 py-16">
      <Card className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c400]/25 text-black"><ShieldCheck className="h-7 w-7" /></div>
          <h1 className="text-3xl font-black text-black">Yolic staff portal</h1>
          <p className="mt-3 text-sm leading-7 text-neutral-600">Use Supabase Auth in production or demo mode locally to access the dashboard.</p>
        </div>
        <LoginForm />
      </Card>
    </main>
  );
}
