import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesSection from "@/components/sections/ServicesSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Wixgo Agency's full range of digital services — Website Development, App Development, SEO, UI/UX Design, and Branding.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
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
