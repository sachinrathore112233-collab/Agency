"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const marqueeItems = [
  "WEBSITE DEVELOPMENT",
  "SAAS PRODUCTS",
  "APP DEVELOPMENT",
  "UI/UX DESIGN",
  "SEO GROWTH",
  "BRANDING & IDENTITY",
  "BY SACHIN RATHORE & ATHARV VYAS",
  "FULL-STACK NEXT.JS",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-16 px-4 bg-brand-black">
      {/* Background orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] -top-32 -left-32 opacity-25 animate-float" />
      <div className="orb orb-yellow w-[450px] h-[450px] top-1/2 -right-36 opacity-15 animate-float-delay" />
      <div className="orb orb-pink w-[400px] h-[400px] bottom-10 left-1/3 opacity-15" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-notebook opacity-75 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Top Handwritten "hello! we are" */}
        <motion.div
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="font-hand text-3xl sm:text-4xl text-artsy-yellow font-bold tracking-wide">
            hello! we are
          </p>
          <svg
            viewBox="0 0 64 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="mt-0.5 h-3.5 w-24 text-artsy-yellow"
            aria-hidden="true"
          >
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </motion.div>

        {/* Big Chunky Doodle Box with Name & Sticker Notes */}
        <div className="relative mt-4 w-full flex flex-col items-center">
          {/* Sticker Notes (Top corners) */}
          <div className="hidden sm:flex justify-between w-full max-w-2xl px-4 -mb-3 z-20 pointer-events-none">
            <motion.div
              initial={{ scale: 1, rotate: -15 }}
              animate={{ scale: 1, rotate: -8 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="pointer-events-auto"
            >
              <span className="font-mono inline-block rounded-full border-2 border-white px-4 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-brutal bg-brand-purple">
                ✦ Made Things
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 1, rotate: 15 }}
              animate={{ scale: 1, rotate: 6 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="pointer-events-auto"
            >
              <span className="font-mono inline-block rounded-full border-2 border-artsy-ink px-4 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-artsy-ink shadow-brutal bg-artsy-yellow-soft">
                ⚡ Sweat Details
              </span>
            </motion.div>
          </div>

          {/* Chunky Doodle Box Border */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative inline-block border-[3.5px] border-artsy-yellow px-6 py-2 sm:px-12 sm:py-3 bg-brand-darker/60 backdrop-blur-sm shadow-[6px_6px_0px_#FFE81D]"
          >
            <h1 className="text-6xl sm:text-8xl lg:text-[7.5rem] font-extrabold tracking-tight text-white font-space leading-none select-none">
              CODE<span className="text-gradient-artsy">YUG</span>
            </h1>
          </motion.div>

          {/* Role & Location Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 z-20">
            <motion.div
              initial={{ opacity: 1, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="-rotate-3"
            >
              <span className="font-hand inline-block px-4 py-1 text-xl sm:text-2xl text-artsy-ink font-bold bg-artsy-yellow shadow-brutal-sm">
                Creative Tech Studio 🎨
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rotate-2"
            >
              <span className="font-hand inline-block px-4 py-1 text-xl sm:text-2xl text-artsy-ink font-bold bg-artsy-mint shadow-brutal-sm">
                by Sachin & Atharv 🤝
              </span>
            </motion.div>
          </div>
        </div>

        {/* Live Status Pill */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to new client projects & ambitious startups
        </motion.div>

        {/* Main Value Proposition Title */}
        <motion.h2
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white font-space"
        >
          We build digital products that{" "}
          <span className="relative inline-block text-artsy-yellow">
            refuse to be ignored.
            <svg
              viewBox="0 0 240 16"
              fill="none"
              stroke="#FFE81D"
              strokeWidth="3"
              strokeLinecap="round"
              className="absolute -bottom-2 left-0 w-full overflow-visible"
            >
              <path d="M 4 12 Q 120 4 236 10" />
            </svg>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-brand-muted leading-relaxed"
        >
          From high-converting websites and scalable SaaS products to mobile apps, dominating SEO, and standout branding. Built by entrepreneurs, for entrepreneurs.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#contact"
            className="group font-mono inline-flex items-center gap-3 border-2 border-white bg-white text-artsy-ink px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 hover:bg-artsy-yellow hover:border-artsy-yellow hover:text-artsy-ink shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-artsy-ink text-white group-hover:bg-artsy-ink group-hover:text-artsy-yellow transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
            Start a Project
          </Link>

          <Link
            href="#portfolio"
            className="font-mono inline-flex items-center gap-2 border-2 border-white/20 bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-white hover:bg-white/5"
          >
            Explore Work ✦
          </Link>
        </motion.div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="mt-16 w-full overflow-hidden border-y-2 border-white/10 bg-brand-darker py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-white/90">
                {item}
              </span>
              <span className="text-artsy-yellow font-bold text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
