import PortfolioSection from "@/components/sections/PortfolioSection";
import CTABanner from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Work & Portfolio",
  description:
    "Explore Wixgo Agency's selected digital projects, websites, applications, interfaces, and branding work.",
  pathname: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Page hero */}
      <div className="relative py-24 text-center overflow-hidden">
        <div className="orb orb-blue w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-15" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-violet text-sm font-medium mb-6">
            Our Work
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-brand-muted">
            From startups to scale-ups — a showcase of our finest digital work.
          </p>
        </div>
      </div>

      <PortfolioSection />
      <CTABanner />
    </div>
  );
}
