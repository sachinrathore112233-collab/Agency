"use client";

import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

const reviews = [
  {
    name: "JRj Gray",
    company: "Founder, FinPulse Analytics",
    title: "Best Dev Studio Experience Ever!!",
    text: "Love this company so much! Sachin and Atharv took our messy concept and turned it into an award-winning SaaS product in 4 weeks. Their attention to UX detail, micro-interactions, and backend stability is genuinely unmatched.",
    rating: "5/5",
    bgColor: "bg-artsy-lime text-artsy-ink",
    rotation: "-rotate-2 sm:-rotate-3 hover:rotate-0",
    sparklePosition: "top-[-10px] left-[-8px]",
    sparkleColor: "text-amber-500",
  },
  {
    name: "Marcus Vance",
    company: "CTO, ShopZen Commerce",
    title: "Insane speed & production quality",
    text: "Atharv's full-stack architecture handled our 50K concurrent user spike on launch day without dropping a single frame or request. Sachin's UI design gave us a 4.9★ rating on the App Store.",
    rating: "5/5",
    bgColor: "bg-white text-artsy-ink",
    rotation: "rotate-2 sm:rotate-3 hover:rotate-0",
    sparklePosition: "bottom-[-12px] right-[-10px]",
    sparkleColor: "text-artsy-orange",
  },
  {
    name: "Karen McSwain",
    company: "Marketing Director, Nova Tech",
    title: "10/10 ROI on our Rebrand & SEO",
    text: "Our organic leads tripled within 90 days of CodeYug delivering our new website. They are transparent, extremely creative, and treat your business like their own.",
    rating: "5/5",
    bgColor: "bg-artsy-lime text-artsy-ink",
    rotation: "-rotate-1 sm:-rotate-2 hover:rotate-0",
    sparklePosition: "top-[-10px] right-12",
    sparkleColor: "text-amber-500",
  },
  {
    name: "Devika Sen",
    company: "Founder, EduBridge App",
    title: "Unfair Advantage for Startups",
    text: "Working directly with the founders instead of account managers changed everything. CodeYug is the dream partner for any founder who wants to ship fast and look like a billion-dollar brand.",
    rating: "5/5",
    bgColor: "bg-artsy-yellow-soft text-artsy-ink",
    rotation: "rotate-1 sm:rotate-2 hover:rotate-0",
    sparklePosition: "bottom-[-10px] left-8",
    sparkleColor: "text-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-36 relative overflow-hidden bg-brand-darker border-t border-b border-white/[0.08]">
      {/* Notebook Grid Paper Background (Screenshot 2 Reference) */}
      <div className="absolute inset-0 bg-grid-notebook opacity-90 pointer-events-none" />

      {/* Decorative Orbs */}
      <div className="orb orb-yellow w-96 h-96 top-10 left-10 opacity-15" />
      <div className="orb orb-purple w-96 h-96 bottom-10 right-10 opacity-15" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title (Screenshot 2 Reference) */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="px-5 py-2 rounded-full border-2 border-artsy-ink bg-artsy-lime text-artsy-ink font-mono text-xs font-bold uppercase tracking-widest shadow-brutal-sm">
              Guest Testimonial
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-space">
            What They <span className="text-artsy-yellow font-hand text-6xl sm:text-7xl lg:text-8xl">Say?</span>
          </h2>

          <p className="text-brand-muted text-base sm:text-lg max-w-xl mx-auto">
            Honest words from founders, CTOs, and marketing leads who built with CodeYug.
          </p>
        </div>

        {/* Tilted Stacked Review Cards (Direct Screenshot 2 Replication) */}
        <div className="flex flex-col items-center gap-7 sm:gap-9 max-w-3xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative w-full rounded-3xl p-6 sm:p-8 border-2 border-artsy-ink shadow-brutal-lg transition-transform duration-300 ${rev.bgColor} ${rev.rotation}`}
            >
              {/* 4-Point Star Sparkle Pin (Screenshot 2) */}
              <div className={`absolute ${rev.sparklePosition} z-20 pointer-events-none`}>
                <svg
                  viewBox="0 0 24 24"
                  className={`w-7 h-7 sm:w-9 sm:h-9 ${rev.sparkleColor} fill-current drop-shadow-sm`}
                >
                  <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                </svg>
              </div>

              {/* Card Header: Author & Star Pill Badge */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-space tracking-tight text-artsy-ink">
                    {rev.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-artsy-ink/70">
                    {rev.company}
                  </p>
                </div>

                {/* Rating Badge (Screenshot 2: Black pill with star) */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-artsy-ink text-white text-xs sm:text-sm font-bold shrink-0 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-artsy-yellow text-artsy-yellow" />
                  <span>{rev.rating}</span>
                </div>
              </div>

              {/* Testimonial Subtitle */}
              <p className="text-base sm:text-lg font-bold text-artsy-ink mb-2">
                {rev.title}
              </p>

              {/* Testimonial Body */}
              <p className="text-sm sm:text-base leading-relaxed text-artsy-ink/90 font-medium">
                {rev.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Artsy Sticker Stamp at bottom */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-mono text-white/90">
            <span className="text-artsy-yellow font-bold text-base">★ ★ ★ ★ ★</span>
            <span>Rated 4.9/5 by 50+ Global Clients & Startups</span>
          </div>
        </div>
      </div>
    </section>
  );
}
