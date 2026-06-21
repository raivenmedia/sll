import { PublicShell } from "@/components/layout/public-shell";
import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { company } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Contact Yolic", description: "Speak with Yolic about brand, growth, print, and platform delivery.", path: "/contact" });

export default function ContactPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Contact" title="Start the conversation with Yolic" description="Tell us what you&apos;re building, fixing, or scaling. We&apos;ll route your inquiry through the CRM and respond fast." aside={<div className="space-y-3 text-sm text-neutral-600"><p>{company.email}</p><p>{company.phone}</p><p>{company.address}</p></div>} />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <Card><ContactForm /></Card>
        <Card className="bg-black text-white"><p className="text-sm uppercase tracking-[0.2em] text-white/55">Response workflow</p><ul className="mt-6 space-y-4 text-sm leading-7 text-white/75"><li>1. Inquiry enters the CRM instantly</li><li>2. Team triages scope, budget, and urgency</li><li>3. A qualified response is sent within one business day</li></ul></Card>
      </section>
    </PublicShell>
  );
}
