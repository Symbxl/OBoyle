import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

const SITE = "https://www.oboylelandscaping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/services", "/portfolio", "/garden-center", "/about", "/contact", "/blog", "/careers"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1.0 : 0.7
  }));

  const postRoutes = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...postRoutes];
}
