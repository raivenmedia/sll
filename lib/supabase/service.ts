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

function getClient() {
  if (!hasSupabase) {
    return null;
  }

  return createClient(env.supabaseUrl!, env.supabaseAnonKey!, {
    auth: { persistSession: false },
  });
}

export async function getHomepageContent() {
  const client = getClient();
  if (!client) return homepageContent;

  const { data } = await client.from("homepage_content").select("*").single();
  return data ?? homepageContent;
}

export async function getServices() {
  const client = getClient();
  if (!client) return services;

  const { data } = await client.from("services").select("*").order("created_at");
  return data ?? services;
}

export async function getServiceBySlug(slug: string) {
  const client = getClient();
  if (!client) return services.find((service) => service.slug === slug) ?? null;

  const { data } = await client.from("services").select("*").eq("slug", slug).maybeSingle();
  return data ?? services.find((service) => service.slug === slug) ?? null;
}

export async function getPortfolioProjects() {
  const client = getClient();
  if (!client) return portfolioProjects;

  const { data } = await client.from("portfolio_projects").select("*").order("created_at", { ascending: false });
  return data ?? portfolioProjects;
}

export async function getPortfolioProjectBySlug(slug: string) {
  const client = getClient();
  if (!client) return portfolioProjects.find((project) => project.slug === slug) ?? null;

  const { data } = await client.from("portfolio_projects").select("*").eq("slug", slug).maybeSingle();
  return data ?? portfolioProjects.find((project) => project.slug === slug) ?? null;
}

export async function getBlogPosts() {
  const client = getClient();
  if (!client) return blogPosts;

  const { data } = await client.from("blog_posts").select("*").order("published_at", { ascending: false });
  return data ?? blogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  const client = getClient();
  if (!client) return blogPosts.find((post) => post.slug === slug) ?? null;

  const { data } = await client.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
  return data ?? blogPosts.find((post) => post.slug === slug) ?? null;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getFaqs() {
  return faqs;
}

export async function getDashboardSnapshot() {
  return {
    metrics: analyticsMetrics,
    dailyTraffic,
    weeklyTraffic,
    monthlyTraffic,
    deviceBreakdown,
    trafficSources,
    messages,
    quoteRequests,
    leads,
    mediaAssets,
    seoSettings,
  };
}
