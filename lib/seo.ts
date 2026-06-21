import type { Metadata } from "next";
import { env } from "@/lib/env";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({ title, description, path = "/", keywords = [], image = "/og-image.png" }: MetaInput): Metadata {
  const url = new URL(path, env.appUrl).toString();

  return {
    title,
    description,
    metadataBase: new URL(env.appUrl),
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Yolic",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
