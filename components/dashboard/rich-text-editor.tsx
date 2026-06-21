"use client";

import { useMemo, useRef, useState } from "react";
import { Bold, Code2, Heading2, Image as ImageIcon, Italic, Link2, List, ListOrdered, Table } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RichTextEditor({ initialContent, onSave }: { initialContent: string; onSave?: (value: string) => void }) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState(initialContent);
  const toolbar = useMemo(
    () => [
      { icon: Bold, action: () => document.execCommand("bold") },
      { icon: Italic, action: () => document.execCommand("italic") },
      { icon: Heading2, action: () => document.execCommand("formatBlock", false, "h2") },
      { icon: List, action: () => document.execCommand("insertUnorderedList") },
      { icon: ListOrdered, action: () => document.execCommand("insertOrderedList") },
      {
        icon: Link2,
        action: () => {
          const url = window.prompt("Enter URL");
          if (url) document.execCommand("createLink", false, url);
        },
      },
      {
        icon: ImageIcon,
        action: () => {
          const url = window.prompt("Enter image URL");
          if (url) document.execCommand("insertImage", false, url);
        },
      },
      {
        icon: Table,
        action: () =>
          document.execCommand(
            "insertHTML",
            false,
            "<table><tr><th>Heading</th><th>Heading</th></tr><tr><td>Cell</td><td>Cell</td></tr></table>",
          ),
      },
      {
        icon: Code2,
        action: () => document.execCommand("insertHTML", false, "<pre><code>// code block</code></pre>"),
      },
    ],
    [],
  );

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
      <div className="mb-4 flex flex-wrap gap-2">
        {toolbar.map((item, index) => (
          <button
            key={index}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white text-black transition hover:bg-black/5"
            onClick={item.action}
          >
            <item.icon className="h-4 w-4" />
          </button>
        ))}
        <Button type="button" variant="secondary" size="sm" className="ml-auto" onClick={() => onSave?.(content)}>
          Save content
        </Button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="prose prose-neutral min-h-80 max-w-none rounded-[1.5rem] border border-black/10 p-5 outline-none"
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(event) => setContent(event.currentTarget.innerHTML)}
      />
    </div>
  );
}
