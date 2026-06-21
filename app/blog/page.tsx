import { PublicShell } from "@/components/layout/public-shell";
import { BlogCard } from "@/components/marketing/blog-card";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/supabase/service";

export const metadata = buildMetadata({
  title: "Yolic Blog",
  description: "Insights on branding, SEO, CRM, web platforms, and business growth systems.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <PublicShell>
      <PageHero eyebrow="Blog" title="Ideas for better brand systems, revenue operations, and digital delivery" description="Practical thinking from the Yolic team on the systems behind modern business growth." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      </section>
    </PublicShell>
  );
}
