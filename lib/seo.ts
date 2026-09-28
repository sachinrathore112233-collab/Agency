import type { Metadata } from "next";

export const siteConfig = {
  name: "Wixgo Agency",
  url: "https://wixgo.agency",
  description:
    "Wixgo Agency builds high-performance websites, mobile apps, SEO strategies, UI/UX designs, and distinctive brand identities for modern businesses.",
  ogImage: "/og-image.png",
};

export function createPageMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const pageUrl = new URL(pathname, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      url: pageUrl,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Wixgo Agency — Transforming Ideas into Digital Experiences",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}