"use client";

import { Copy, Pencil, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useWorkspaceStore } from "@/store/use-workspace-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function MediaLibraryGrid() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const { mediaDraft, renameMedia, deleteMedia } = useWorkspaceStore();

  const filtered = useMemo(
    () =>
      mediaDraft.filter((asset) => {
        const matchesQuery = asset.name.toLowerCase().includes(query.toLowerCase());
        const matchesType = type === "all" || asset.type === type;
        return matchesQuery && matchesType;
      }),
    [mediaDraft, query, type],
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_200px]">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <Input className="pl-10" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search media assets" />
        </div>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="all">All types</option>
          <option value="image">Images</option>
          <option value="pdf">PDFs</option>
          <option value="video">Videos</option>
          <option value="logo">Logos</option>
        </Select>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((asset) => (
          <div key={asset.id} className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
            <div className="mb-5 flex h-40 items-end rounded-[1.5rem] bg-[linear-gradient(135deg,#111,#414141)] p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">{asset.type}</p>
                <p className="mt-2 text-lg font-semibold">{asset.name}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>Size: {asset.size}</p>
              <p>Updated: {asset.updatedAt}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => {
                const nextName = window.prompt("Rename asset", asset.name);
                if (nextName) renameMedia(asset.id, nextName);
              }}>
                <Pencil className="mr-2 h-4 w-4" />Rename
              </Button>
              <Button type="button" variant="outline" size="sm" onClick={async () => {
                await navigator.clipboard.writeText(asset.url);
              }}>
                <Copy className="mr-2 h-4 w-4" />Copy URL
              </Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => deleteMedia(asset.id)}>
                <Trash2 className="mr-2 h-4 w-4" />Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
