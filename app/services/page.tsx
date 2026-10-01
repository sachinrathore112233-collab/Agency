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
      <ServicesSection />
      <CTABanner />
    </div>
  );
}
