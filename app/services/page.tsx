import { PublicShell } from "@/components/layout/public-shell";
import { ServiceGrid } from "@/components/marketing/service-grid";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";
import { getServices } from "@/lib/supabase/service";

export const metadata = buildMetadata({
  title: "Yolic Services",
  description: "Explore Yolic services across branding, printing, marketing, IT, promotional products, and general supply.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <PublicShell>
      <PageHero eyebrow="Services" title="Integrated solutions for brands that need strategy and execution" description="Every Yolic engagement is designed to connect front-end brand experience with back-end delivery and reporting." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ServiceGrid services={services} />
      </section>
    </PublicShell>
  );
}
