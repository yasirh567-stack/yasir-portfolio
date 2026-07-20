import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataInput {
  title: string;
  description: string;
  /** URL path, e.g. "/projects" — used to build the canonical + OG url. */
  path: string;
  /** Set true to keep a page (like /stats) out of search engines. */
  noIndex?: boolean;
}

export function pageMetadata({
  title,
  description,
  path,
  noIndex,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
