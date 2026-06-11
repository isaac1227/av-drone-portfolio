import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { getWorks } from "@/sanity/lib/works";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await getWorks();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/portfolio",
    "/servicios",
    "/sobre-mi",
    "/contacto",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamicRoutes: MetadataRoute.Sitemap = works
    .filter((work) => Boolean(work.slug))
    .map((work) => ({
      url: `${siteConfig.siteUrl}/portfolio/${work.slug}`,
      lastModified: work.publishedAt ? new Date(work.publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...dynamicRoutes];
}
