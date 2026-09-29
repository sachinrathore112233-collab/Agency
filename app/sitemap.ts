import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { pathname: "/", priority: 1 },
    { pathname: "/services", priority: 0.9 },
    ...services.map((service) => ({ pathname: service.href, priority: 0.8 })),
    { pathname: "/portfolio", priority: 0.8 },
    { pathname: "/about", priority: 0.7 },
  ];

  return routes.map(({ pathname, priority }) => ({
    url: new URL(pathname, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}