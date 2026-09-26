import HeroSection from "@/components/sections/HeroSection";
import HavenlyDialSection from "@/components/sections/HavenlyDialSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FoundersSection from "@/components/sections/FoundersSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
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
