import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  return (
    <section className="border-b border-black/5 bg-[linear-gradient(180deg,rgba(244,196,0,0.18),#fff)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-20">
        <div className="space-y-5">
          <Badge>{eyebrow}</Badge>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-black">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-neutral-600">{description}</p>
        </div>
        {aside ? <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">{aside}</div> : null}
      </div>
    </section>
  );
}
