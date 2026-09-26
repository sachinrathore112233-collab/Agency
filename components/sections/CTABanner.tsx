"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          style={{
            background: "linear-gradient(135deg, #0F1016 0%, #181924 45%, #111118 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="orb w-80 h-80 bg-white/10 top-[-100px] right-[-50px] rounded-full blur-3xl" />
            <div className="orb w-60 h-60 bg-white/10 bottom-[-80px] left-0 rounded-full blur-3xl" />
          </div>

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative z-10 text-center px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 text-artsy-yellow" />
                Limited Client Spots Open
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl font-space"
            >
              Ready to Transform
              <br />
              Your Digital Presence?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg"
            >
              Partner directly with founders Sachin Rathore & Atharv Vyas. Let&apos;s build an unfair competitive advantage for your startup or business.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full border-[3px] border-artsy-ink bg-artsy-yellow px-8 py-4 text-sm font-mono font-black uppercase tracking-[0.18em] text-artsy-ink shadow-[6px_6px_0px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.9)]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-white/80 bg-white/10 px-8 py-4 text-sm font-mono font-black uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-white hover:text-artsy-ink"
              >
                See Our Work ✦
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
