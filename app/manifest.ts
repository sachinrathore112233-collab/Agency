import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wixgo Agency",
    short_name: "Wixgo",
    description: "Transforming Ideas into Digital Experiences",
    start_url: "/",
    display: "standalone",
    background_color: "#08080C",
    theme_color: "#FFE81D",
  };
}