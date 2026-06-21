import { notFound } from "next/navigation";
import { PublicShell } from "@/components/layout/public-shell";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/supabase/service";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({ title: post.seoTitle, description: post.seoDescription, path: `/blog/${post.slug}` });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <PublicShell>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} aside={<div className="space-y-2 text-sm text-neutral-600"><p>Author: {post.author}</p><p>Published: {post.publishedAt}</p><p>{post.readTime}</p></div>} />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="prose prose-neutral max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Card>
      </section>
    </PublicShell>
  );
}
