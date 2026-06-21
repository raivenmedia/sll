import { createClient } from "@supabase/supabase-js";
import { hasSupabase, env } from "@/lib/env";
import {
  analyticsMetrics,
  blogPosts,
  dailyTraffic,
  deviceBreakdown,
  faqs,
  homepageContent,
  leads,
  mediaAssets,
  messages,
  monthlyTraffic,
  portfolioProjects,
  quoteRequests,
  seoSettings,
  services,
  testimonials,
  trafficSources,
  weeklyTraffic,
} from "@/lib/data";
import type {
  BlogPost,
  DashboardMetric,
  DeviceShare,
  FAQItem,
  HomepageContent,
  LeadRecord,
  MediaAsset,
  MessageRecord,
  PortfolioProject,
  QuoteRequestRecord,
  SeoSetting,
  Service,
  SourceShare,
  TrafficPoint,
} from "@/lib/types";

function getClient() {
  if (!hasSupabase) {
    return null;
  }

  return createClient(env.supabaseUrl!, env.supabaseAnonKey!, {
    auth: { persistSession: false },
  });
}

export async function getHomepageContent(): Promise<HomepageContent> {
  const client = getClient();
  if (!client) return homepageContent;

  const { data } = await client.from("homepage_content").select("*").single();
  return (data as HomepageContent | null) ?? homepageContent;
}

export async function getServices(): Promise<Service[]> {
  const client = getClient();
  if (!client) return services;

  const { data } = await client.from("services").select("*").order("created_at");
  return (data as Service[] | null) ?? services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const client = getClient();
  if (!client) return services.find((service) => service.slug === slug) ?? null;

  const { data } = await client.from("services").select("*").eq("slug", slug).maybeSingle();
  return (data as Service | null) ?? services.find((service) => service.slug === slug) ?? null;
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const client = getClient();
  if (!client) return portfolioProjects;

  const { data } = await client.from("portfolio_projects").select("*").order("created_at", { ascending: false });
  return (data as PortfolioProject[] | null) ?? portfolioProjects;
}

export async function getPortfolioProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  const client = getClient();
  if (!client) return portfolioProjects.find((project) => project.slug === slug) ?? null;

  const { data } = await client.from("portfolio_projects").select("*").eq("slug", slug).maybeSingle();
  return (data as PortfolioProject | null) ?? portfolioProjects.find((project) => project.slug === slug) ?? null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const client = getClient();
  if (!client) return blogPosts;

  const { data } = await client.from("blog_posts").select("*").order("published_at", { ascending: false });
  return (data as BlogPost[] | null) ?? blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const client = getClient();
  if (!client) return blogPosts.find((post) => post.slug === slug) ?? null;

  const { data } = await client.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
  return (data as BlogPost | null) ?? blogPosts.find((post) => post.slug === slug) ?? null;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getFaqs(): Promise<FAQItem[]> {
  return faqs;
}

export async function getDashboardSnapshot() {
  return {
    metrics: analyticsMetrics as DashboardMetric[],
    dailyTraffic: dailyTraffic as TrafficPoint[],
    weeklyTraffic: weeklyTraffic as TrafficPoint[],
    monthlyTraffic: monthlyTraffic as TrafficPoint[],
    deviceBreakdown: deviceBreakdown as DeviceShare[],
    trafficSources: trafficSources as SourceShare[],
    messages: messages as MessageRecord[],
    quoteRequests: quoteRequests as QuoteRequestRecord[],
    leads: leads as LeadRecord[],
    mediaAssets: mediaAssets as MediaAsset[],
    seoSettings: seoSettings as SeoSetting[],
  };
}
