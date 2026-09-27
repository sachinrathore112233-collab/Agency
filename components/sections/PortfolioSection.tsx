"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    title: "FinPulse Analytics SaaS",
    subtitle: "Real-time Fintech Data Intelligence",
    description: "Built a high-frequency financial metrics dashboard with sub-second websocket streaming, custom interactive charting, and seamless subscription billing.",
    category: "SaaS Product",
    tags: ["Next.js 14", "Tailwind CSS", "GSAP Charts", "Stripe API"],
    bgColor: "bg-blue-600",
    ribbonBg: "#2563EB",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=700&fit=crop&q=80",
    metrics: "+180% Engagement",
    tapeColor: "bg-white/70",
    date: "MAR 2026",
  },
  {
    number: "02",
    title: "ShopZen Commerce Mobile",
    subtitle: "AI-Powered Mobile E-Commerce App",
    description: "Architected a lightning-fast React Native cross-platform app for iOS and Android with personalized AI product feeds, instant checkout, and 60fps micro-animations.",
    category: "Mobile App",
    tags: ["React Native", "iOS & Android", "UI/UX System", "Node.js"],
    bgColor: "bg-emerald-600",
    ribbonBg: "#059669",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=700&fit=crop&q=80",
    metrics: "4.9★ App Store Rating",
    tapeColor: "bg-artsy-yellow/90",
    date: "FEB 2026",
  },
  {
    number: "03",
    title: "Nova Global Rebrand",
    subtitle: "Identity System for Enterprise Tech",
    description: "Complete visual identity re-architecture from logo mark and typography scales to comprehensive digital guidelines, design system, and marketing collateral.",
    category: "Branding & UI/UX",
    tags: ["Brand Identity", "Design System", "Figma", "Guidelines"],
    bgColor: "bg-purple-700",
    ribbonBg: "#6D28D9",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&h=700&fit=crop&q=80",
    metrics: "+220% Brand Recall",
    tapeColor: "bg-artsy-pink/90",
    date: "JAN 2026",
  },
  {
    number: "04",
    title: "CloudBase Growth Website",
    subtitle: "High-Converting Cloud Architecture Hub",
    description: "Transformed an outdated enterprise site into a high-performance marketing machine with custom 3D interactive assets, automated SEO pipelines, and 99+ Core Web Vitals.",
    category: "Website & SEO",
    tags: ["Next.js App Router", "Technical SEO", "Framer Motion", "Tailwind"],
    bgColor: "bg-rose-600",
    ribbonBg: "#E11D48",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=700&fit=crop&q=80",
    metrics: "+312% Organic Traffic",
    tapeColor: "bg-artsy-cyan/90",
    date: "DEC 2025",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 lg:py-36 bg-brand-light dark:bg-brand-black relative transition-colors duration-200">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-notebook-grid dark:bg-grid-notebook opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center pb-12 sm:pb-16 lg:pb-24">
          <div className="flex flex-col items-center">
            <p className="font-hand text-3xl sm:text-4xl text-brand-purple dark:text-artsy-yellow font-bold tracking-wide">
              explore our work!
            </p>
            <svg
              viewBox="0 0 64 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="mt-0.5 h-3.5 w-24 text-brand-purple dark:text-artsy-yellow"
            >
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-artsy-ink dark:text-white font-space leading-none uppercase">
            Featured <span className="text-gradient-artsy">Works</span>
          </h2>

          <div className="mt-5 -rotate-2">
            <span className="font-hand inline-block px-5 py-1.5 sm:px-6 sm:py-2 text-base sm:text-xl font-bold text-artsy-ink bg-artsy-yellow border border-artsy-ink shadow-brutal-sm washi-tape">
              A curated selection of SaaS products & websites we helped bring to life.
            </span>
          </div>
        </div>

        {/* Sticky Stacked Case Studies - Enabled on Mobile & Desktop */}
        <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20">
          {caseStudies.map((study, idx) => (
            <article
              key={study.number}
              style={{
                top: `calc(4.5rem + ${idx * 8}px)`,
                zIndex: idx + 10,
              }}
              className="sticky transition-all duration-300"
            >
              {/* Ribbon Tab Header */}
              <div className="flex">
                <span
                  className="font-mono inline-flex items-center gap-1.5 sm:gap-2 py-2 sm:py-3 pr-8 sm:pr-10 text-xs sm:text-sm font-black uppercase tracking-widest text-white pl-4 sm:pl-6 rounded-t-xl shadow-md border-t border-l border-white/20"
                  style={{
                    backgroundColor: study.ribbonBg,
                    clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 100%, 0 100%)",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Project {study.number}
                </span>
              </div>

              {/* Main Card Container */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-6 sm:gap-8 p-5 sm:p-8 lg:p-12 rounded-3xl rounded-tl-none ${study.bgColor} border-2 border-white/20 shadow-brutal-lg`}
              >
                {/* Left Column: Details */}
                <div className="flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white/95">
                        {study.date} ✦ {study.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-space leading-tight">
                      {study.title}
                    </h3>

                    <p className="text-sm sm:text-base text-white font-semibold">
                      {study.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
                      {study.description}
                    </p>

                    <div className="pt-1">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/25 text-xs font-mono font-bold text-white shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        {study.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Tags & Action */}
                  <div className="space-y-5 pt-4 sm:pt-6 border-t border-white/20">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold uppercase tracking-wide bg-white text-artsy-ink shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Link
                        href="#contact"
                        className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-artsy-ink text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-artsy-yellow transition-all shadow-brutal-sm"
                      >
                        Start Similar Project
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Column: Polaroid / Mockup Frame with Tape Pins */}
                <div className="relative flex items-center justify-center pt-2 lg:pt-0">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white bg-black/40 shadow-2xl group">
                    {/* Washi Tape Strip Left */}
                    <span
                      className={`absolute -left-5 -top-2.5 z-20 h-5 w-20 sm:h-6 sm:w-24 -rotate-[14deg] ${study.tapeColor} shadow-md washi-tape-slant-left`}
                    />
                    {/* Washi Tape Strip Right */}
                    <span
                      className={`absolute -right-5 -top-2.5 z-20 h-5 w-20 sm:h-6 sm:w-24 rotate-[14deg] ${study.tapeColor} shadow-md washi-tape-slant-right`}
                    />

                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/20">
                        Engineered by Wixgo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA with 100% visible text */}
        <div className="text-center mt-16 sm:mt-24">
          <Link
            href="#contact"
            className="font-mono inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-artsy-yellow text-artsy-ink text-xs sm:text-sm font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-brutal border-2 border-artsy-ink"
          >
            <span>Have a project in mind? Let&apos;s build it</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
