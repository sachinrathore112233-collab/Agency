import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesSection from "@/components/sections/ServicesSection";
import CTABanner from "@/components/sections/CTABanner";
import { createPageMetadata, serializeJsonLd, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Services",
  description:
    "Explore Wixgo Agency's website development, app development, SEO, UI/UX design, and branding services built to create better digital experiences.",
  pathname: "/services",
});

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/services#digital-services`,
  name: "Digital Services",
  serviceType: [
    "Website Development",
    "SaaS Product Engineering",
    "Mobile App Development",
    "UI/UX Design",
    "SEO",
    "Brand Identity",
  ],
  description:
    "Website development, SaaS product engineering, mobile app development, UI/UX design, SEO, and brand identity services.",
  provider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesSchema) }}
      />
      {/* Page hero */}
      <div className="relative py-24 text-center overflow-hidden">
        <div className="orb orb-purple w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-violet text-sm font-medium mb-6">
            What We Offer
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            End-to-end digital solutions that cover every aspect of your business.
            We don&apos;t just build — we help you grow.
          </p>
        </div>
      </div>

      <ServicesSection />
      <CTABanner />
    </div>
  );
}
