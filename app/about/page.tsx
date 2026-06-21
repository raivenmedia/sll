import { PublicShell } from "@/components/layout/public-shell";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { company } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Yolic",
  description: "Learn how Yolic combines branding, print, marketing, and IT execution for growing businesses.",
  path: "/about",
});

const principles = [
  "Integrated delivery over fragmented vendors",
  "Commercial clarity before visual polish",
  "Operational visibility for every engagement",
  "Execution systems that scale with the client",
];

export default function AboutPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="About" title="A business platform company disguised as a service partner" description={company.description} aside={<div className="space-y-3 text-sm text-neutral-600"><p>{company.address}</p><p>{company.phone}</p><p>{company.email}</p></div>} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="space-y-6 text-base leading-8 text-neutral-600">
          <p>Yolic exists for businesses that need more than isolated campaigns or disconnected vendors. We architect systems that unify brand, demand, delivery, and reporting.</p>
          <p>Our team bridges strategic positioning, packaging and production, content and demand generation, CRM workflow design, and web-enabled operations.</p>
          <p>That means faster launches, stronger customer experiences, and clearer performance visibility across the funnel.</p>
        </div>
        <Card className="bg-black text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-white/55">What we optimize</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/75">
            <li>Lead capture and qualification</li>
            <li>Brand consistency across channels</li>
            <li>Campaign performance feedback loops</li>
            <li>Internal visibility for delivery teams</li>
          </ul>
        </Card>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Principles" title="How Yolic approaches every client problem" description="We work best with ambitious teams that value speed, clarity, and accountable execution." />
        <div className="grid gap-6 lg:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle}><p className="text-xl font-bold text-black">{principle}</p></Card>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
