"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { quoteSchema, type QuoteInput } from "@/lib/validations";

const budgets = ["$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"];

export function QuoteForm() {
  const [status, setStatus] = useState<string | null>(null);
  const form = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", service: services[0]?.name ?? "", budget: budgets[0], description: "" },
  });

  async function onSubmit(values: QuoteInput) {
    setStatus(null);
    const response = await fetch("/api/quote", {
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
          <Input placeholder="Company" {...form.register("company")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.company?.message}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input placeholder="Email address" type="email" {...form.register("email")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.email?.message}</p>
        </div>
        <div>
          <Input placeholder="Phone number" {...form.register("phone")} />
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone?.message}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Select {...form.register("service")}>
            {services.map((service) => (
              <option key={service.id} value={service.name}>{service.name}</option>
            ))}
          </Select>
        </div>
        <div>
          <Select {...form.register("budget")}>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <Textarea placeholder="Describe your goals, scope, deliverables, and deadline" {...form.register("description")} />
        <p className="mt-1 text-xs text-red-600">{form.formState.errors.description?.message}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">Every quote request enters the Yolic CRM pipeline automatically.</p>
        <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Submitting..." : "Submit quote request"}</Button>
      </div>
      {status ? <p className="text-sm font-medium text-black">{status}</p> : null}
    </form>
  );
}
