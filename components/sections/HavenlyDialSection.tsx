"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap, Code, Smartphone, TrendingUp, Palette } from "lucide-react";

const showcaseItems = [
  {
    title: "SaaS Products",
    subtitle: "Built to Scale",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&q=80",
    tag: "High MRR",
    rotation: "-rotate-6",
    offset: "translate-y-4",
  },
  {
    title: "Web Platforms",
    subtitle: "Next.js & Speed",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&q=80",
    tag: "99+ Lighthouse",
    rotation: "-rotate-2",
    offset: "-translate-y-2",
  },
  {
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop&q=80",
    tag: "Cross-Platform",
    rotation: "rotate-0",
    offset: "-translate-y-6 sm:-translate-y-10",
  },
  {
    title: "UI/UX & Design",
    subtitle: "Figma to Reality",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=800&fit=crop&q=80",
    tag: "Micro-Animations",
    rotation: "rotate-2",
    offset: "-translate-y-2",
  },
  {
    title: "Brand Systems",
    subtitle: "Visual Identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop&q=80",
    tag: "Identity & Logo",
    rotation: "rotate-6",
    offset: "translate-y-4",
  },
];

const metrics = [
  { value: "200+", label: "Projects Shipped" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "< 24h", label: "Average Response Time" },
  { value: "1 : 1", label: "Direct Founder Access" },
];

export default function HavenlyDialSection() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden bg-brand-dark">
      {/* Background orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] top-1/3 left-1/2 -translate-x-1/2 opacity-15" />
      <div className="orb orb-pink w-[450px] h-[450px] -bottom-32 right-10 opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Curved Arc Radial Showcase (Direct Havenly Reference from Screenshot 1) */}
        <div className="relative mb-20">
          {/* Semicircular Tick Marks SVG Background */}
          <div className="absolute inset-x-0 bottom-[-20px] sm:bottom-[-40px] flex justify-center pointer-events-none opacity-40">
            <svg
              viewBox="0 0 1000 350"
              className="w-full max-w-4xl h-auto overflow-visible"
              fill="none"
            >
              {/* Curved Arc Line */}
              <path
                d="M 50 320 A 460 280 0 0 1 950 320"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              {/* Radial Ticks */}
              {Array.from({ length: 45 }).map((_, idx) => {
                const angle = -180 + (idx / 44) * 180;
                const rad = (angle * Math.PI) / 180;
                const cx = 500;
                const cy = 340;
                const r1 = 430;
                const r2 = idx % 5 === 0 ? 405 : 418;
                const x1 = cx + r1 * Math.cos(rad);
                const y1 = cy + (r1 * 0.6) * Math.sin(rad);
                const x2 = cx + r2 * Math.cos(rad);
                const y2 = cy + (r2 * 0.6) * Math.sin(rad);
                return (
                  <line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={idx % 5 === 0 ? "#FFE81D" : "rgba(255,255,255,0.3)"}
                    strokeWidth={idx % 5 === 0 ? "2.5" : "1.5"}
                  />
                );
              })}
            </svg>
          </div>

          {/* Cards Arranged along the Arc */}
          <div className="relative z-10 flex flex-wrap justify-center items-end gap-3 sm:gap-6 pt-10 pb-16">
            {showcaseItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative group ${item.rotation} ${item.offset} transition-transform duration-300 hover:scale-105 hover:rotate-0 z-10`}
              >
                <div className="w-[140px] sm:w-[180px] lg:w-[200px] rounded-3xl overflow-hidden bg-brand-black border-2 border-white/15 p-2 shadow-2xl group-hover:border-artsy-yellow transition-colors">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-darker">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-artsy-yellow text-artsy-ink shadow-sm">
                      {item.tag}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <p className="text-xs font-semibold text-white truncate">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-brand-muted truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Havenly Central Content (from Screenshot 1) */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono font-semibold uppercase tracking-widest text-brand-muted">
            <span className="w-2 h-2 rounded-full bg-artsy-yellow animate-pulse" />
            ABOUT WIXGO
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-space leading-tight">
            Helping brands find <span className="text-gradient-artsy">clarity</span>, speed, and confidence.
          </h2>

          <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We believe meaningful digital growth starts with listening and executing with ruthless precision. We combine high-converting design, battle-tested code, and founder-level dedication to turn your vision into an industry standout.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-artsy-yellow text-artsy-ink font-mono font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-brutal border-2 border-artsy-ink"
            >
              Learn More About Us
              <span className="w-6 h-6 rounded-full bg-artsy-ink text-white flex items-center justify-center text-xs">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Metrics Bar (from Screenshot 1) */}
        <div className="mt-20 pt-12 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <p className="text-4xl sm:text-5xl font-bold text-white font-space tracking-tight">
                {m.value}
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-medium">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
