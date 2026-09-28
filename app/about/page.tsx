import Link from "next/link";
import { ArrowUpRight, Target, Heart, Lightbulb, Users, Sparkles } from "lucide-react";
import FoundersSection from "@/components/sections/FoundersSection";
import HavenlyDialSection from "@/components/sections/HavenlyDialSection";
import CTABanner from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Wixgo Agency, our approach to digital products, creative technology, design, development, and building meaningful digital experiences.",
  pathname: "/about",
});

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by your actual business growth — leads, conversion rates, and revenue. Zero vanity metrics.",
    color: "from-artsy-yellow to-artsy-orange",
  },
  {
    icon: Heart,
    title: "Founder-Level Care",
    description:
      "You work directly with founders Sachin Rathore & Atharv Vyas. Transparent, responsive, and personally invested.",
    color: "from-artsy-pink to-brand-purple",
  },
  {
    icon: Lightbulb,
    title: "Creative Edge",
    description:
      "We blend daring artsy aesthetics with enterprise-grade Next.js speed so your product impossible to ignore.",
    color: "from-artsy-cyan to-artsy-blue",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We work with you, not just for you. Open communication channels, live Figma files, and shared ambition.",
    color: "from-artsy-lime to-emerald-500",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-brand-black">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/[0.08]">
        <div className="orb orb-purple w-[600px] h-[600px] -top-32 -left-32 opacity-20" />
        <div className="orb orb-yellow w-96 h-96 bottom-0 -right-20 opacity-15" />
        <div className="absolute inset-0 bg-grid-notebook opacity-60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="font-hand text-3xl text-artsy-yellow font-bold">
                  our story & mission ✦
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold font-space text-white leading-tight">
                Building Digital Experiences with{" "}
                <span className="text-gradient-artsy">Soul & Code.</span>
              </h1>

              <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
                Wixgo Agency was founded by <strong className="text-white">Sachin Rathore</strong> (Creative Idea Developer & Entrepreneur) and <strong className="text-white">Atharv Vyas</strong> (Full-Stack Developer & Entrepreneur) to disrupt standard agency mediocrity.
              </p>

              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Too many agencies deliver cookie-cutter templates that look identical and load slowly. We set out to build an agency that treats every client&apos;s product like a flagship startup: handcrafted design, custom animations, clean code, and zero compromises.
              </p>

              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="font-mono inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-artsy-yellow text-artsy-ink font-bold text-xs uppercase tracking-widest shadow-brutal hover:scale-105 transition-all"
                >
                  Start A Conversation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Projects Delivered", tape: "bg-artsy-yellow/85" },
                { value: "50+", label: "Global Clients", tape: "bg-artsy-cyan/85" },
                { value: "99%", label: "Satisfaction Rate", tape: "bg-artsy-lime/85" },
                { value: "24h", label: "Response Time", tape: "bg-artsy-pink/85" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="relative p-6 sm:p-8 rounded-3xl bg-brand-dark border-2 border-white/10 shadow-brutal text-center -rotate-1 hover:rotate-0 transition-transform"
                >
                  <span className={`absolute -top-3 left-6 w-14 h-5 ${s.tape} washi-tape shadow-sm`} />
                  <div className="text-4xl sm:text-5xl font-extrabold text-white font-space mb-2">
                    {s.value}
                  </div>
                  <div className="text-xs font-mono font-medium text-brand-muted uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Semicircular Havenly Dial Showcase */}
      <HavenlyDialSection />

      {/* Founders Section */}
      <FoundersSection />

      {/* Values */}
      <section className="py-24 bg-brand-darker relative overflow-hidden border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="font-hand text-3xl text-artsy-yellow font-bold">
              what drives us!
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-space text-white">
              Our Core <span className="text-gradient-artsy">Principles</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-3xl bg-brand-dark border-2 border-white/10 hover:border-artsy-yellow transition-all hover:-translate-y-1 shadow-brutal group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} text-artsy-ink flex items-center justify-center mb-5 font-bold shadow-sm`}>
                  <v.icon className="w-6 h-6 text-artsy-ink" />
                </div>
                <h3 className="text-xl font-bold text-white font-space mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
