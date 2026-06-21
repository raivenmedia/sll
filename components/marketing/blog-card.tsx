import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GradientVisual } from "@/components/shared/gradient-visual";
import type { BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden p-0">
      <GradientVisual className="h-52 rounded-none rounded-t-[2rem]" title={post.title} />
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          <span>{post.category}</span>
          <span>{post.readTime}</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{post.excerpt}</p>
        </div>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-black">
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
