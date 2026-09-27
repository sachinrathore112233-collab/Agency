"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Linkedin } from "lucide-react";
import Image from "next/image";

const founders = [
  {
    name: "Sachin Rathore",
    role: "Co-Founder & Creative Idea Developer",
    subRole: "Product Visionary & Entrepreneur",
    handwrittenTag: "the idea architect 💡",
    tapeColor: "bg-artsy-yellow/85",
    tapeRotation: "-rotate-[28deg]",
    cardRotation: "lg:-rotate-2 hover:rotate-0",
    avatar: "/images/founders/sachin-rathore.png",
    bio: "Obsessed with transforming raw business ideas into high-converting digital products, iconic brand identities, and memorable user experiences.",
    skills: ["Creative Direction", "UI/UX Strategy", "Brand Architecture", "Product Concept", "SaaS Strategy"],
    accentColor: "from-artsy-yellow/20 via-brand-purple/20 to-artsy-pink/20",
    badgeBg: "bg-artsy-yellow text-artsy-ink",
    linkedin: "https://www.linkedin.com/in/sachinrathore123/",
  },
  {
    name: "Atharv Vyas",
    role: "Co-Founder & Full-Stack Developer",
    subRole: "Frontend & Backend Engineer, Entrepreneur",
    handwrittenTag: "the code wizard ⚡",
    tapeColor: "bg-artsy-cyan/85",
    tapeRotation: "rotate-[32deg]",
    cardRotation: "lg:rotate-2 hover:rotate-0",
    avatar: "/images/founders/atharv_vyas.png",
    bio: "Master of modern web & mobile engineering. Builds blazing-fast Next.js architectures, bulletproof backend APIs, and buttery-smooth GSAP animations.",
    skills: ["Next.js & React", "Node.js & Backend", "Cross-Platform Apps", "GSAP & Motion", "Cloud Scale"],
    accentColor: "from-artsy-cyan/20 via-brand-purple/20 to-artsy-lime/20",
    badgeBg: "bg-artsy-cyan text-artsy-ink",
    linkedin: "https://www.linkedin.com/in/atharv-vyas-a95347231/",
  },
];

export default function FoundersSection() {
  return (
    <section id="founders" className="py-24 lg:py-32 relative overflow-hidden bg-brand-darker border-t border-b border-white/[0.06]">
      {/* Background Doodles & Orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-10 left-[-150px] opacity-20" />
      <div className="orb orb-yellow w-[400px] h-[400px] bottom-10 right-[-100px] opacity-15" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-notebook opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-hand text-3xl text-artsy-yellow tracking-wide">
              meet the minds behind Wixgo!
            </span>
            <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-3 w-16 text-artsy-yellow">
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-space">
            Led by <span className="text-gradient-artsy">Founders</span> Who Build
          </h2>

          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            No middle managers. No generic templates. When you work with Wixgo, you partner directly with experienced entrepreneurs who care about your product as much as you do.
          </p>
        </div>

        {/* Founders Cards - Artsy Scrapbook Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative bg-brand-dark rounded-3xl p-7 sm:p-9 border-2 border-white/10 transition-all duration-300 shadow-brutal hover:shadow-[8px_8px_0px_#7C3AED] ${founder.cardRotation}`}
            >
              {/* Washi Tape Pin (Top Left/Right) */}
              <div
                className={`absolute -top-3.5 ${i === 0 ? "left-8" : "right-8"} z-20 w-24 h-7 ${founder.tapeColor} ${founder.tapeRotation} washi-tape flex items-center justify-center`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-artsy-ink/80">
                  CO-FOUNDER
                </span>
              </div>

              {/* Top Row: Photo Polaroid + Role */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/[0.08]">
                {/* Polaroid Frame */}
                <div className="relative group shrink-0">
                  <div className="bg-white p-2.5 pb-4 rounded-xl shadow-lg border border-black/20 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300 w-36 sm:w-40">
                    {/* Washi Tape on Polaroid */}
                    <div className="absolute -top-2 left-6 w-12 h-4 bg-artsy-yellow/80 rotate-[-12deg] shadow-sm z-10" />
                    
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-brand-darker">
                      <Image
                        src={founder.avatar}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                    <p className="font-hand text-center text-artsy-ink text-sm font-bold mt-2">
                      {founder.handwrittenTag}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="text-center sm:text-left space-y-2 flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${founder.badgeBg} shadow-sm`}>
                    {founder.subRole}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-space">
                    {founder.name}
                  </h3>

                  <p className="text-sm font-semibold text-brand-violet">
                    {founder.role}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed pt-1">
                    {founder.bio}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-6 space-y-3">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-artsy-yellow" />
                  Key Superpowers
                </p>
                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-white/90 hover:border-artsy-yellow/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Status & LinkedIn Profile Button */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ready to collaborate
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A66C2] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#004182] hover:scale-105 transition-all shadow-sm"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Artsy handwritten guarantee banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-artsy-yellow text-artsy-ink border-2 border-artsy-ink shadow-brutal rotate-[-1deg] hover:rotate-0 transition-transform">
            <p className="font-hand text-2xl sm:text-3xl font-bold leading-snug">
              &ldquo;We don&apos;t just deliver code — we deliver an unfair competitive advantage for your brand.&rdquo;
            </p>
            <p className="font-mono text-xs font-bold uppercase tracking-wider mt-2 opacity-80">
              — Sachin Rathore & Atharv Vyas, Wixgo Agency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
