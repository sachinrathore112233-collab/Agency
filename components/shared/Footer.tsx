"use client";

import Link from "next/link";
import { Zap, ArrowUpRight, Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-brand-darker border-t border-white/[0.08] overflow-hidden pt-20 pb-12">
      {/* Background Orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] -bottom-48 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="orb orb-yellow w-[400px] h-[400px] top-10 right-[-100px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Havenly-Style Newsletter / Quick Connect Box (from Screenshot 1) */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-brand-dark via-brand-black to-brand-dark border-2 border-white/10 shadow-brutal-lg mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="font-hand text-2xl text-artsy-yellow font-bold">
              ready to transform your brand? 🚀
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-space">
              Take the first step toward building better.
            </h3>
            <p className="text-sm text-brand-muted max-w-lg">
              Partner directly with founders Sachin Rathore & Atharv Vyas. We reply in under 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full sm:w-72 px-5 py-3.5 rounded-full bg-brand-black border border-white/20 text-white text-sm placeholder:text-brand-muted focus:outline-none focus:border-artsy-yellow"
            />
            <a
              href="#contact"
              className="w-full sm:w-auto font-mono inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-artsy-yellow text-artsy-ink font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-brutal-sm shrink-0"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-artsy-yellow text-artsy-ink flex items-center justify-center border border-artsy-ink shadow-sm">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xl font-black font-space text-white">
                CODE<span className="text-artsy-yellow">YUG</span>
              </span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">
              India&apos;s creative digital & SaaS product agency. We engineer custom websites, scalable apps, SEO engines, and iconic brand systems.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-emerald-400">
                ● Built by Sachin & Atharv
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-muted">
              <li><a href="#services" className="hover:text-artsy-yellow transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-artsy-yellow transition-colors">SaaS Product Engineering</a></li>
              <li><a href="#services" className="hover:text-artsy-yellow transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-artsy-yellow transition-colors">UI/UX & Design Systems</a></li>
              <li><a href="#services" className="hover:text-artsy-yellow transition-colors">SEO & Growth Engine</a></li>
              <li><a href="#services" className="hover:text-artsy-yellow transition-colors">Brand Identity</a></li>
            </ul>
          </div>

          {/* Col 3: Agency & Founders */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-4">
              Founders
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-muted">
              <li>
                <a
                  href="https://www.linkedin.com/in/sachinrathore123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-white font-semibold group-hover:text-artsy-yellow transition-colors flex items-center gap-1">
                    Sachin Rathore <ArrowUpRight className="w-3 h-3 text-[#0A66C2]" />
                  </span>
                  <span className="block text-[10px] text-artsy-yellow">Creative Idea Developer</span>
                </a>
              </li>
              <li className="pt-1.5">
                <a
                  href="https://www.linkedin.com/in/atharv-vyas-a95347231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-white font-semibold group-hover:text-artsy-cyan transition-colors flex items-center gap-1">
                    Atharv Vyas <ArrowUpRight className="w-3 h-3 text-[#0A66C2]" />
                  </span>
                  <span className="block text-[10px] text-artsy-cyan">Full-Stack Developer</span>
                </a>
              </li>
              <li className="pt-2">
                <a href="#founders" className="text-xs text-brand-violet hover:underline flex items-center gap-1">
                  Meet both founders →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-muted">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-artsy-yellow" />
                hello@codeyug.agency
              </li>
              <li>
                <a
                  href="https://wa.me/919179668341?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-artsy-yellow"
                >
                <Phone className="w-3.5 h-3.5 text-artsy-yellow" />
                  +91 91796 68341
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-artsy-yellow" />
                India (Remote First)
              </li>
            </ul>
          </div>
        </div>

        {/* Havenly-Style Giant Watermark Logo at the Bottom (from Screenshot 1) */}
        <div className="pt-14 pb-4 flex justify-center select-none overflow-hidden">
          <p
            className="text-[18vw] font-black tracking-tighter leading-none text-white/[0.04] hover:text-white/[0.08] transition-colors duration-500 uppercase font-space text-center"
            style={{
              textShadow: "0 0 60px rgba(124, 58, 237, 0.15)",
            }}
          >
            codeyug
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>
            © {new Date().getFullYear()} CodeYug Agency. Co-founded by Sachin Rathore & Atharv Vyas.
          </p>
          <div className="flex items-center gap-6">
            <a href="#founders" className="hover:text-white transition-colors">About Us</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
