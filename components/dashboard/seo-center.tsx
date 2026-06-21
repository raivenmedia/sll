"use client";

import { useWorkspaceStore } from "@/store/use-workspace-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function SeoCenter() {
  const { seoDraft, updateSeo } = useWorkspaceStore();

  return (
    <div className="space-y-6">
      {seoDraft.map((entry) => (
        <div key={entry.id} className="grid gap-6 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">{entry.page}</p>
              <h3 className="mt-2 text-2xl font-bold text-black">Meta setup</h3>
            </div>
            <Input value={entry.title} onChange={(event) => updateSeo(entry.id, { title: event.target.value })} />
            <Textarea value={entry.description} onChange={(event) => updateSeo(entry.id, { description: event.target.value })} />
            <Input value={entry.canonicalUrl} onChange={(event) => updateSeo(entry.id, { canonicalUrl: event.target.value })} />
            <Input value={entry.keywords.join(", ")} onChange={(event) => updateSeo(entry.id, { keywords: event.target.value.split(",").map((item) => item.trim()).filter(Boolean) })} />
            <div className="flex justify-end">
              <Button type="button" variant="secondary" size="sm">Save SEO changes</Button>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-black p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">SEO score</p>
            <p className="mt-3 text-6xl font-black text-[#f4c400]">{entry.score}</p>
            <div className="mt-8 space-y-4 text-sm text-white/75">
              <p>Open Graph title: {entry.ogTitle}</p>
              <p>Open Graph description: {entry.ogDescription}</p>
              <p>Keyword clusters: {entry.keywords.length}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
