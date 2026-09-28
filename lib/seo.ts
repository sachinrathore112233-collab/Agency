import type { Metadata } from "next";

export const siteConfig = {
  name: "Wixgo Agency",
  title: "Wixgo Agency | Website Development, Apps & SEO",
  url: "https://wixgo.agency",
  language: "en-IN",
  description:
    "Wixgo Agency builds custom websites, web and mobile apps, and SaaS products, with SEO, UI/UX design, and branding for businesses.",
  email: "hello@wixgo.agency",
  telephone: "+91 91796 68341",
  ogImage: "/images/founders/sachin-rathore.png",
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
          alt: "Sachin Rathore, Wixgo Agency co-founder",
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