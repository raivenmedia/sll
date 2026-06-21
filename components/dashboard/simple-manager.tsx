"use client";

import { useState } from "react";
import { RichTextEditor } from "@/components/dashboard/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useWorkspaceStore } from "@/store/use-workspace-store";

export function ServiceManager() {
  const { servicesDraft, updateService } = useWorkspaceStore();
  const [selectedId, setSelectedId] = useState(servicesDraft[0]?.id ?? "");
  const selected = servicesDraft.find((item) => item.id === selectedId) ?? servicesDraft[0];
  if (!selected) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="space-y-3 rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        {servicesDraft.map((item) => (
          <button key={item.id} className={`w-full rounded-2xl px-4 py-3 text-left ${item.id === selected.id ? "bg-black text-white" : "bg-black/5 text-black"}`} onClick={() => setSelectedId(item.id)}>
            <p className="font-semibold">{item.name}</p>
            <p className={`text-sm ${item.id === selected.id ? "text-white/70" : "text-neutral-500"}`}>{item.priceGuide}</p>
          </button>
        ))}
      </div>
      <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        <Input value={selected.name} onChange={(event) => updateService(selected.id, { name: event.target.value })} />
        <Textarea value={selected.summary} onChange={(event) => updateService(selected.id, { summary: event.target.value })} />
        <Textarea value={selected.description} onChange={(event) => updateService(selected.id, { description: event.target.value })} />
        <RichTextEditor initialContent={`<h2>${selected.name}</h2><p>${selected.description}</p>`} />
        <div className="flex justify-end">
          <Button type="button" variant="secondary" size="sm">Save service</Button>
        </div>
      </div>
    </div>
  );
}

export function PortfolioManager() {
  const { portfolioDraft, updatePortfolio } = useWorkspaceStore();
  const [selectedId, setSelectedId] = useState(portfolioDraft[0]?.id ?? "");
  const selected = portfolioDraft.find((item) => item.id === selectedId) ?? portfolioDraft[0];
  if (!selected) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="space-y-3 rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        {portfolioDraft.map((item) => (
          <button key={item.id} className={`w-full rounded-2xl px-4 py-3 text-left ${item.id === selected.id ? "bg-black text-white" : "bg-black/5 text-black"}`} onClick={() => setSelectedId(item.id)}>
            <p className="font-semibold">{item.title}</p>
            <p className={`text-sm ${item.id === selected.id ? "text-white/70" : "text-neutral-500"}`}>{item.category}</p>
          </button>
        ))}
      </div>
      <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        <Input value={selected.title} onChange={(event) => updatePortfolio(selected.id, { title: event.target.value })} />
        <Textarea value={selected.challenge} onChange={(event) => updatePortfolio(selected.id, { challenge: event.target.value })} />
        <Textarea value={selected.solution} onChange={(event) => updatePortfolio(selected.id, { solution: event.target.value })} />
        <RichTextEditor initialContent={`<h2>${selected.title}</h2><p>${selected.solution}</p>`} />
        <div className="flex justify-end">
          <Button type="button" variant="secondary" size="sm">Save project</Button>
        </div>
      </div>
    </div>
  );
}

export function BlogManager() {
  const { blogDraft, updateBlog } = useWorkspaceStore();
  const [selectedId, setSelectedId] = useState(blogDraft[0]?.id ?? "");
  const selected = blogDraft.find((item) => item.id === selectedId) ?? blogDraft[0];
  if (!selected) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="space-y-3 rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        {blogDraft.map((item) => (
          <button key={item.id} className={`w-full rounded-2xl px-4 py-3 text-left ${item.id === selected.id ? "bg-black text-white" : "bg-black/5 text-black"}`} onClick={() => setSelectedId(item.id)}>
            <p className="font-semibold">{item.title}</p>
            <p className={`text-sm ${item.id === selected.id ? "text-white/70" : "text-neutral-500"}`}>{item.status}</p>
          </button>
        ))}
      </div>
      <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        <Input value={selected.title} onChange={(event) => updateBlog(selected.id, { title: event.target.value })} />
        <Input value={selected.slug} onChange={(event) => updateBlog(selected.id, { slug: event.target.value })} />
        <Textarea value={selected.excerpt} onChange={(event) => updateBlog(selected.id, { excerpt: event.target.value })} />
        <RichTextEditor initialContent={selected.content} onSave={(content) => updateBlog(selected.id, { content })} />
        <div className="flex justify-between gap-3">
          <Button type="button" variant="outline" size="sm">Save draft</Button>
          <div className="flex gap-3">
            <Button type="button" variant="outline" size="sm">Schedule</Button>
            <Button type="button" variant="secondary" size="sm">Publish</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
