"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BriefcaseBusiness, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { HomepageContent } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Hero({ content }: { content: HomepageContent }) {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#fff,rgba(244,196,0,0.14),#fff)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700">
            <Sparkles className="mr-2 h-4 w-4 text-[#f4c400]" />
            {content.trustLine}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-black sm:text-6xl">{content.headline}</h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">{content.subheadline}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className={buttonVariants({ variant: "primary", size: "lg" })}>
              {content.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
              {content.ctaSecondary}
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
          <Card className="bg-black text-white">
            <BriefcaseBusiness className="mb-6 h-8 w-8 text-[#f4c400]" />
            <p className="text-sm uppercase tracking-[0.25em] text-white/55">Business Delivery</p>
            <p className="mt-3 text-2xl font-bold">Strategy + execution</p>
            <p className="mt-3 text-sm leading-7 text-white/75">Creative, operations, and systems shipped through one accountable delivery team.</p>
          </Card>
          <Card className="sm:translate-y-8">
            <BarChart3 className="mb-6 h-8 w-8 text-black" />
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Performance</p>
            <p className="mt-3 text-2xl font-bold text-black">Analytics-led growth</p>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Dashboards, SEO, and CRM visibility that turn activity into clear action.</p>
          </Card>
          {content.whyChooseUs.slice(0, 2).map((item) => (
            <div key={item} className={cn("rounded-[2rem] border border-black/10 bg-white p-6 text-sm leading-7 text-neutral-600", item === content.whyChooseUs[1] ? "sm:col-span-2" : "")}>{item}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
