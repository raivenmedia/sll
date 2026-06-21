import { notFound } from "next/navigation";
import { PublicShell } from "@/components/layout/public-shell";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { getPortfolioProjectBySlug, getPortfolioProjects } from "@/lib/supabase/service";

export async function generateStaticParams() {
  const projects = await getPortfolioProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getPortfolioProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({ title: `${project.title} | Yolic Portfolio`, description: project.excerpt, path: `/portfolio/${project.slug}` });
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getPortfolioProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PublicShell>
      <PageHero eyebrow={project.category} title={project.title} description={project.excerpt} aside={<div className="space-y-2 text-sm text-neutral-600"><p>Client: {project.client}</p><p>Year: {project.year}</p><p>Services: {project.services.join(", ")}</p></div>} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="lg:col-span-1"><h2 className="text-xl font-bold text-black">Challenge</h2><p className="mt-4 text-sm leading-7 text-neutral-600">{project.challenge}</p></Card>
        <Card className="lg:col-span-1"><h2 className="text-xl font-bold text-black">Solution</h2><p className="mt-4 text-sm leading-7 text-neutral-600">{project.solution}</p></Card>
        <Card className="bg-black text-white lg:col-span-1"><h2 className="text-xl font-bold text-[#f4c400]">Results</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">{project.results.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
      </section>
    </PublicShell>
  );
}
