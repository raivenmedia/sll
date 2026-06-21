import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PublicShell } from "@/components/layout/public-shell";
import { FAQList } from "@/components/marketing/faq-list";
import { Hero } from "@/components/marketing/hero";
import { PortfolioShowcase } from "@/components/marketing/portfolio-showcase";
import { ServiceGrid } from "@/components/marketing/service-grid";
import { Testimonials } from "@/components/marketing/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { company, industries, trustLogos } from "@/lib/data";
import { getBlogPosts, getFaqs, getHomepageContent, getPortfolioProjects, getServices, getTestimonials } from "@/lib/supabase/service";

export default async function HomePage() {
  const [content, services, projects, testimonials, faqs, posts] = await Promise.all([
    getHomepageContent(),
    getServices(),
    getPortfolioProjects(),
    getTestimonials(),
    getFaqs(),
    getBlogPosts(),
  ]);

  return (
    <PublicShell>
      <Hero content={content} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-[2rem] border border-black/10 bg-black px-6 py-8 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Trusted by growth teams</p>
            <h2 className="mt-3 text-3xl font-black text-[#f4c400]">A connected platform for modern business execution.</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
            {trustLogos.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title="Six connected service lines, one accountable delivery partner" description="Yolic integrates creative, growth, print, and systems work so clients can move from idea to execution without context loss." />
        <ServiceGrid services={services} />
      </section>
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4c400]">Why Yolic</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Built for brands that need speed, cohesion, and measurable outcomes</h2>
            <p className="text-base leading-7 text-white/70">We eliminate the friction of juggling separate creative, production, and digital partners by connecting strategy to execution inside one platform.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {content.whyChooseUs.map((item) => (
              <Card key={item} className="bg-white/5 text-white border-white/10">
                <CheckCircle2 className="h-6 w-6 text-[#f4c400]" />
                <p className="mt-4 text-sm leading-7 text-white/75">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Case studies across retail, healthcare, logistics, and more" description="Explore the brand systems, CRM workflows, and launch campaigns Yolic has delivered for growth-stage teams." />
        <PortfolioShowcase projects={projects} />
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industries" title="Where Yolic delivers the strongest operational leverage" description="Our cross-functional model works best for businesses with multiple customer touchpoints and a need for faster execution." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry}><p className="text-lg font-semibold text-black">{industry}</p></Card>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What clients say after Yolic becomes part of their growth engine" description="From launch campaigns to internal operations, our work is designed to create clarity and momentum." />
        <Testimonials items={testimonials} />
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Insights" title="Ideas for stronger digital systems, content, and commercial operations" description="Read practical thinking from the Yolic team on growth, brand, SEO, CRM, and business systems." />
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Card key={post.id}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{post.category}</p>
              <h3 className="mt-4 text-2xl font-bold text-black">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Answers for teams evaluating Yolic as a long-term partner" description="Need more clarity before starting? Here are the questions we answer most often." />
        <FAQList items={faqs} />
      </section>
      <section className="bg-black py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Ready to start?</p>
            <h2 className="mt-3 text-4xl font-black text-[#f4c400]">{content.ctaHeadline}</h2>
            <p className="mt-4 text-base leading-8 text-white/75">{content.ctaBody}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className={buttonVariants({ variant: "primary", size: "lg" })}>Request a quote</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>Talk to Yolic</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-black">Let&apos;s design the growth platform your team actually needs.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">Email {company.email}, call {company.phone}, or send a brief through our contact and quote workflows.</p>
          </div>
          <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>Contact Yolic</Link>
        </Card>
      </section>
    </PublicShell>
  );
}
