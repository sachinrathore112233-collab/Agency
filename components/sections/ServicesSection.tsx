"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Smartphone, TrendingUp, Palette, Zap, ArrowUpRight, Check, Code, Rocket } from "lucide-react";

const agencyServices = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "High-Performance Next.js Architectures",
    description: "Custom-tailored, lightning-fast web applications designed for conversion. We code with Next.js, TypeScript, Tailwind, and GSAP for flawless responsiveness and 99+ Core Web Vitals.",
    features: ["Next.js App Router & React", "Sub-second Page Speeds", "Responsive & Mobile-First", "Seamless CMS Integration"],
    accentBg: "bg-artsy-yellow",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-yellow",
    icon: Monitor,
  },
  {
    number: "02",
    title: "SaaS Product Engineering",
    subtitle: "Full-Stack Web Apps Built to Scale",
    description: "End-to-end SaaS engineering from schema design to frontend state. We build dashboards, auth systems, subscription billing, and real-time APIs that can scale to millions.",
    features: ["Full-Stack Architecture", "Authentication & Security", "Stripe & Razorpay Billing", "Scalable Database Design"],
    accentBg: "bg-artsy-cyan",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-cyan",
    icon: Rocket,
  },
  {
    number: "03",
    title: "Mobile App Development",
    subtitle: "iOS & Android Cross-Platform Apps",
    description: "Production-ready mobile applications built with React Native. Delivering true 60fps animations, intuitive native gestures, offline capabilities, and App Store submission.",
    features: ["React Native & Expo", "iOS & Android Parity", "Smooth 60fps Animations", "Store Deployment & Updates"],
    accentBg: "bg-artsy-lime",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-lime",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "UI/UX & Interaction Design",
    subtitle: "User-Centered Interfaces that Delight",
    description: "Pixel-perfect visual experiences crafted from deep user research. We build comprehensive Figma design systems, wireframes, and interactive prototypes that eliminate user friction.",
    features: ["Figma Design Systems", "Interactive Prototyping", "User Journey Mapping", "Micro-Interactions"],
    accentBg: "bg-artsy-pink",
    accentText: "text-white",
    hoverBorder: "hover:border-artsy-pink",
    icon: Palette,
  },
  {
    number: "05",
    title: "SEO & Growth Engine",
    subtitle: "Dominate Search & Drive Organic Leads",
    description: "Data-driven SEO strategies built directly into your website's architecture. We fix technical bottlenecks, structure programmatic data, and optimize for top Google rankings.",
    features: ["Technical SEO Architecture", "Core Web Vitals Audit", "Programmatic SEO Pages", "Keyword Ranking Growth"],
    accentBg: "bg-emerald-400",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-emerald-400",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Brand Identity Systems",
    subtitle: "Unforgettable Brand Presence",
    description: "Complete identity systems that distinguish your company from the competition — memorable logo marks, color psychology, custom typography, and complete brand rulebooks.",
    features: ["Logo & Brand Marks", "Color & Typography Systems", "Digital Brand Guidelines", "Marketing Collateral"],
    accentBg: "bg-artsy-orange",
    accentText: "text-white",
    hoverBorder: "hover:border-artsy-orange",
    icon: Zap,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-36 relative overflow-hidden bg-brand-black">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-notebook opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-hand text-3xl text-artsy-yellow font-bold tracking-wide">
              what we do best!
            </span>
            <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-3 w-16 text-artsy-yellow">
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-space">
            Our Core <span className="text-gradient-artsy">Capabilities</span>
          </h2>

          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            From zero to launch — we handle the full product development lifecycle so you can focus on building your business.
          </p>
        </div>

        {/* Services Grid (Agensio Numbered + Creative-Artsy Pop Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {agencyServices.map((srv, idx) => (
            <motion.div
              key={srv.number}
              initial={{ opacity: 1, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`group relative rounded-3xl p-7 sm:p-8 bg-brand-dark border-2 border-white/10 ${srv.hoverBorder} transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-brutal-lg flex flex-col justify-between`}
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`w-12 h-12 rounded-2xl ${srv.accentBg} ${srv.accentText} flex items-center justify-center font-space font-black text-lg shadow-sm border border-black/10`}>
                    {srv.number}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-brand-muted group-hover:text-white group-hover:border-white transition-colors">
                    <srv.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white font-space mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs font-semibold text-brand-violet uppercase tracking-wider mb-3">
                  {srv.subtitle}
                </p>

                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                      <Check className="w-4 h-4 text-artsy-yellow shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href="/#contact"
                  className="font-mono inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-artsy-yellow transition-colors"
                >
                  Start with this service
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
