import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

const staticPaths = ["", "/experience", "/projects", "/skills", "/education", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...projectRoutes];
}
