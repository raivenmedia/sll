import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GradientVisual } from "@/components/shared/gradient-visual";
import type { PortfolioProject } from "@/lib/types";

export function PortfolioShowcase({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden p-0">
          <GradientVisual className="h-56 rounded-none rounded-t-[2rem]" title={project.title} />
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black">{project.title}</h3>
              <p className="text-sm leading-7 text-neutral-600">{project.excerpt}</p>
            </div>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-600">
              {project.services.map((service) => (
                <li key={service} className="rounded-full bg-black/5 px-3 py-1">{service}</li>
              ))}
            </ul>
            <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-black">
              View case study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
