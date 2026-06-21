import { PublicShell } from "@/components/layout/public-shell";
import { PortfolioShowcase } from "@/components/marketing/portfolio-showcase";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";
import { getPortfolioProjects } from "@/lib/supabase/service";

export const metadata = buildMetadata({
  title: "Yolic Portfolio",
  description: "See how Yolic ships branding, campaign, and systems work for growth-focused businesses.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  return (
    <PublicShell>
      <PageHero eyebrow="Portfolio" title="Selected work across brand, growth, and systems delivery" description="Case studies that show how strategy, creative execution, and digital operations can reinforce each other." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <PortfolioShowcase projects={projects} />
      </section>
    </PublicShell>
  );
}
