import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wixgo Agency",
    short_name: "Wixgo",
    description: "Website development, app development, SaaS, SEO, UI/UX design, and branding.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080C",
    theme_color: "#FFE81D",
  };
}