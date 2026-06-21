"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginInput } from "@/lib/validations";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "admin@yolic.com", password: "password123" },
  });

  async function onSubmit(values: LoginInput) {
    setError(null);
    const response = await fetch("/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(payload.error ?? "Unable to sign in.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <Input type="email" placeholder="Staff email" {...form.register("email")} />
        <p className="mt-1 text-xs text-red-600">{form.formState.errors.email?.message}</p>
      </div>
      <div>
        <Input type="password" placeholder="Password" {...form.register("password")} />
        <p className="mt-1 text-xs text-red-600">{form.formState.errors.password?.message}</p>
      </div>
      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Signing in..." : "Sign in"}</Button>
      <p className="text-xs text-neutral-500">In demo mode, any valid email and password with 8+ characters will unlock the dashboard.</p>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
