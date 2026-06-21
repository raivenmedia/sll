"use client";

import { useWorkspaceStore } from "@/store/use-workspace-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CmsHomepageEditor() {
  const { homepageDraft, saveHomepage } = useWorkspaceStore();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        <h3 className="text-2xl font-bold text-black">Homepage editor</h3>
        <Input value={homepageDraft.headline} onChange={(event) => saveHomepage({ headline: event.target.value })} />
        <Textarea value={homepageDraft.subheadline} onChange={(event) => saveHomepage({ subheadline: event.target.value })} />
        <Input value={homepageDraft.ctaPrimary} onChange={(event) => saveHomepage({ ctaPrimary: event.target.value })} />
        <Input value={homepageDraft.ctaSecondary} onChange={(event) => saveHomepage({ ctaSecondary: event.target.value })} />
        <Input value={homepageDraft.trustLine} onChange={(event) => saveHomepage({ trustLine: event.target.value })} />
        <Textarea value={homepageDraft.ctaBody} onChange={(event) => saveHomepage({ ctaBody: event.target.value })} />
        <div className="flex justify-end">
          <Button type="button" variant="secondary" size="sm">Save homepage</Button>
        </div>
      </div>
      <div className="rounded-[2rem] border border-black/10 bg-black p-6 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Live preview</p>
        <h4 className="mt-6 text-4xl font-black text-[#f4c400]">{homepageDraft.headline}</h4>
        <p className="mt-4 leading-8 text-white/80">{homepageDraft.subheadline}</p>
        <div className="mt-8 flex gap-3">
          <span className="rounded-full bg-[#f4c400] px-4 py-2 text-sm font-semibold text-black">{homepageDraft.ctaPrimary}</span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">{homepageDraft.ctaSecondary}</span>
        </div>
      </div>
    </div>
  );
}
