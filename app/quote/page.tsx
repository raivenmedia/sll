import { PublicShell } from "@/components/layout/public-shell";
import { QuoteForm } from "@/components/marketing/quote-form";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Request a Quote | Yolic", description: "Submit a quote request for Yolic services and enter the CRM pipeline instantly.", path: "/quote" });

export default function QuotePage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Quote" title="Get a tailored proposal for your next business move" description="Share the scope, service area, budget range, and delivery timeline. Yolic will turn it into a qualified quote workflow." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <Card><QuoteForm /></Card>
        <Card className="bg-black text-white"><p className="text-sm uppercase tracking-[0.2em] text-white/55">Quote management</p><ul className="mt-6 space-y-4 text-sm leading-7 text-white/75"><li>Capture service fit and budget range</li><li>Qualify the lead and assign next actions</li><li>Move approved opportunities into delivery planning</li></ul></Card>
      </section>
    </PublicShell>
  );
}
