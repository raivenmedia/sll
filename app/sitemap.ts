import type { MetadataRoute } from "next";
import { blogPosts, portfolioProjects, services } from "@/lib/data";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/blog", "/contact", "/quote", "/login"];
  return [
    ...staticRoutes.map((route) => ({ url: `${env.appUrl}${route}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${env.appUrl}/services/${service.slug}`, lastModified: new Date() })),
    ...portfolioProjects.map((project) => ({ url: `${env.appUrl}/portfolio/${project.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${env.appUrl}/blog/${post.slug}`, lastModified: new Date(post.publishedAt) })),
  ];
}
