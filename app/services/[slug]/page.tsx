import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PublicShell } from "@/components/layout/public-shell";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug, getServices } from "@/lib/supabase/service";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({ title: service.seoTitle, description: service.seoDescription, path: `/services/${service.slug}` });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <PublicShell>
      <PageHero eyebrow="Service" title={service.name} description={service.description} aside={<div className="space-y-4"><p className="text-sm text-neutral-500">Investment guide</p><p className="text-3xl font-black text-black">{service.priceGuide}</p><p className="text-sm text-neutral-600">{service.heroStat}</p></div>} />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Card>
          <h2 className="text-2xl font-bold text-black">What&apos;s included</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-neutral-600">
            {service.features.map((feature) => <li key={feature}>• {feature}</li>)}
          </ul>
        </Card>
        <Card className="bg-black text-white">
          <h2 className="text-2xl font-bold text-[#f4c400]">Typical deliverables</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/75">
            {service.deliverables.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </Card>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-black text-black">Need this service scoped for your business?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">Share your goals, timeline, and budget range. We&apos;ll turn it into a practical delivery plan.</p>
          </div>
          <Link href="/quote" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Request a quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Card>
      </section>
    </PublicShell>
  );
}
