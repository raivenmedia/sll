"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as { message: string };
    setStatus(payload.message);
    if (response.ok) form.reset();
  }

  return (
    <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input placeholder="Your name" {...form.register("name")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.name?.message}</p>
        </div>
        <div>
          <Input placeholder="Email address" type="email" {...form.register("email")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.email?.message}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input placeholder="Phone number" {...form.register("phone")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone?.message}</p>
        </div>
        <div>
          <Input placeholder="Subject" {...form.register("subject")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.subject?.message}</p>
        </div>
      </div>
      <div>
        <Textarea placeholder="Tell us about your needs" {...form.register("message")} />
        <p className="mt-1 text-xs text-red-600">{form.formState.errors.message?.message}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">We respond to qualified inquiries within one business day.</p>
        <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Sending..." : "Send message"}</Button>
      </div>
      {status ? <p className="text-sm font-medium text-black">{status}</p> : null}
    </form>
  );
}
