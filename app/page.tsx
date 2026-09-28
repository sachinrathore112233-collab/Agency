import HeroSection from "@/components/sections/HeroSection";
import HavenlyDialSection from "@/components/sections/HavenlyDialSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FoundersSection from "@/components/sections/FoundersSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { serializeJsonLd, siteConfig } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  founder: [
    {
      "@type": "Person",
      name: "Sachin Rathore",
      sameAs: "https://www.linkedin.com/in/sachinrathore123/",
    },
    {
      "@type": "Person",
      name: "Atharv Vyas",
      sameAs: "https://www.linkedin.com/in/atharv-vyas-a95347231/",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      telephone: siteConfig.telephone,
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema) }}
      />
      {/* 1. Creative-Artsy Hero Section */}
      <HeroSection />

      {/* 2. Havenly-Inspired Semicircular Dial Showcase & Brand Vision */}
      <HavenlyDialSection />

      {/* 3. Agensio + Creative-Artsy Core Capabilities */}
      <ServicesSection />

      {/* 4. Dedicated Founders Section: Sachin Rathore & Atharv Vyas */}
      <FoundersSection />

      {/* 5. Creative-Artsy Sticky Stacked Case Studies */}
      <PortfolioSection />

      {/* 6. Screenshot 2: Notebook Grid & Tilted Review Cards */}
      <TestimonialsSection />

      {/* 7. Direct Founder Contact & Project Intake */}
      <ContactSection />
    </>
  );
}
