"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const offers: Array<{
  number: string;
  category: string;
  title: string;
  description: string;
  price: string;
  href: string;
  accent: string;
  hoverBorder: string;
  hoverText: string;
  glow: string;
  popular?: boolean;
}> = [
  {
    number: "01",
    category: "LAUNCH",
    title: "Landing Page",
    description: "Launch a premium digital presence.",
    price: "Starting ₹19,999+",
    href: "/packages#launch",
    accent: "text-artsy-yellow",
    hoverBorder: "hover:border-artsy-yellow/60",
    hoverText: "group-hover:text-artsy-yellow",
    glow: "hover:shadow-[0_0_18px_rgba(255,232,29,0.08)]",
  },
  {
    number: "02",
    category: "BUSINESS",
    title: "Website + App",
    description: "Build a complete digital business system.",
    price: "Starting ₹79,999+",
    href: "/packages#business",
    accent: "text-artsy-cyan",
    hoverBorder: "hover:border-artsy-cyan/60",
    hoverText: "group-hover:text-artsy-cyan",
    glow: "hover:shadow-[0_0_18px_rgba(52,211,255,0.08)]",
    popular: true,
  },
  {
    number: "03",
    category: "SCALE",
    title: "Web App + AI",
    description: "Build products, platforms and intelligent systems.",
    price: "Starting ₹1,49,999+",
    href: "/packages#scale",
    accent: "text-artsy-lime",
    hoverBorder: "hover:border-artsy-lime/60",
    hoverText: "group-hover:text-artsy-lime",
    glow: "hover:shadow-[0_0_18px_rgba(185,242,54,0.08)]",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section
      aria-labelledby="what-we-offer-heading"
      className="relative overflow-hidden bg-brand-black py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-notebook opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="font-hand text-3xl font-bold tracking-wide text-artsy-yellow">
              what we offer
            </span>
            <svg
              viewBox="0 0 64 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-3 w-16 text-artsy-yellow"
            >
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          <h2
            id="what-we-offer-heading"
            className="font-space text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            You Bring The Idea. <span className="text-gradient-artsy">We Build The Rest.</span>
          </h2>

          <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
            From your first landing page to a complete AI-powered product, choose the right way to bring your idea to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.number}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-brand-dark p-5 transition-all duration-300 sm:p-6 ${offer.hoverBorder} ${offer.glow}`}
            >
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className={`font-space text-2xl font-black ${offer.accent}`}>
                  {offer.number}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-violet">
                  {offer.category}
                </span>
                {offer.popular && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="mb-4 flex-1">
                <h3 className="font-space text-2xl font-bold text-white">{offer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{offer.description}</p>
              </div>

              <div className="border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">
                  {offer.price}
                </p>

                <Link
                  href={offer.href}
                  aria-label={`Explore ${offer.title}`}
                  className={`mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors ${offer.hoverText}`}
                >
                  Explore
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-space text-xl font-bold text-white">Not sure what you need?</h3>
            <p className="mt-1 text-sm leading-relaxed text-brand-muted">
              Tell us what you&apos;re building and we&apos;ll help you find the right starting point.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:text-artsy-yellow"
            >
              Let&apos;s Talk
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-muted transition-colors hover:text-artsy-yellow"
            >
              View All Packages
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
