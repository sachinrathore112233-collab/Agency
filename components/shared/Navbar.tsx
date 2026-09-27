"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Founders", href: "#founders" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-light/90 dark:bg-brand-black/90 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] py-3.5 shadow-md"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-artsy-yellow text-artsy-ink flex items-center justify-center border-2 border-artsy-ink shadow-brutal-sm group-hover:rotate-6 transition-transform">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight font-space text-artsy-ink dark:text-white leading-none">
                  WIX<span className="text-artsy-yellow">GO</span>
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-darkMuted dark:text-brand-muted">
                  Digital Studio
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-brand-dark/80 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-brand-darkMuted dark:text-brand-muted hover:text-artsy-ink dark:hover:text-artsy-yellow hover:bg-black/[0.06] dark:hover:bg-white/[0.05] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-2 sm:gap-3.5">
              {/* Status pill (Desktop only) */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available Q1/Q2
              </div>

              {/* Action Button - Always crisp and high contrast */}
              <a
                href="https://wa.me/919179668341?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-artsy-ink text-white dark:bg-white dark:text-artsy-ink text-xs font-mono font-bold uppercase tracking-widest hover:bg-artsy-yellow hover:text-artsy-ink dark:hover:bg-artsy-yellow dark:hover:text-artsy-ink hover:scale-105 transition-all shadow-brutal-sm"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile hamburger button */}
              <button
                className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-black/[0.05] dark:bg-brand-dark border-2 border-artsy-ink/30 dark:border-white/20 text-artsy-ink dark:text-white hover:border-artsy-yellow shrink-0"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col justify-between px-4 pt-20 pb-6 md:hidden overflow-y-auto bg-brand-black text-white"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="font-hand text-3xl text-artsy-yellow font-bold leading-none">
                  navigation menu ✦
                </p>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-sm"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-3xl font-black leading-none text-white font-space"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-5 w-5 opacity-60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-artsy-yellow px-5 py-4 text-center font-mono text-sm font-black uppercase tracking-widest text-artsy-ink shadow-brutal border-2 border-artsy-ink"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>

              <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Co-Founded by Sachin Rathore & Atharv Vyas
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
