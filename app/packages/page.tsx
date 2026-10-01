import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "@/components/sections/PricingSection";
import { serializeJsonLd, siteConfig } from "@/lib/seo";

const pageUrl = new URL("/packages", siteConfig.url).toString();
const pageDescription =
  "Explore Wixgo packages for landing pages, websites, mobile apps, web apps, SaaS products and AI-powered solutions. Find a fit for your next digital product.";
const socialImageUrl = new URL(
  "/images/wixgo-packages-og.svg",
  siteConfig.url,
).toString();

export const metadata: Metadata = {
  title: {
    absolute: "Wixgo Packages | Website, App, Web App & AI Development",
  },
  description: pageDescription,
  alternates: { canonical: "/packages" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "Wixgo Packages — Build Your Next Digital Product",
    description:
      "Landing pages, websites, mobile apps, web applications and AI-powered products built by Wixgo.",
    url: pageUrl,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Wixgo Packages — website, app, web app and AI development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wixgo Packages — Build Your Next Digital Product",
    description:
      "Landing pages, websites, mobile apps, web applications and AI-powered products built by Wixgo.",
    images: [socialImageUrl],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Packages", item: pageUrl },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Wixgo Website and Product Development Packages",
      serviceType: [
        "Website development",
        "Mobile app development",
        "SaaS product engineering",
        "AI development",
      ],
      description: pageDescription,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ],
};

export default function PackagesPage() {
  return (
    <div className="bg-brand-black pt-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 py-6 font-mono text-xs text-brand-muted sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-white">
            Packages
          </li>
        </ol>
      </nav>
      <PricingSection />
    </div>
  );
}