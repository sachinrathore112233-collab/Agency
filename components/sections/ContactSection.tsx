"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Clock, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

const serviceOptions = [
  "Website Development",
  "SaaS Product Engineering",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Growth Engine",
  "Branding & Identity",
];

const budgetOptions = [
  "< ₹50,000",
  "₹50,000 – ₹1.5 Lakh",
  "₹1.5 Lakh – ₹5 Lakh",
  "₹5 Lakh+",
  "Discuss with Founders",
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    budget: "₹50,000 – ₹1.5 Lakh",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  return (
    <section id="contact" className="py-24 lg:py-36 relative overflow-hidden bg-brand-black">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-notebook opacity-60 pointer-events-none" />

      {/* Decorative Orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] bottom-0 left-[-100px] opacity-20" />
      <div className="orb orb-yellow w-[400px] h-[400px] top-10 right-[-100px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-hand text-3xl text-artsy-yellow font-bold tracking-wide">
              have an idea? let&apos;s talk! ✦
            </span>
            <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-3 w-16 text-artsy-yellow">
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-space">
            Start Your <span className="text-gradient-artsy">Project</span>
          </h2>

          <p className="text-brand-muted text-base sm:text-lg max-w-xl mx-auto">
            You will hear directly from founders <strong className="text-white">Sachin Rathore</strong> or <strong className="text-white">Atharv Vyas</strong> within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-brand-dark border-2 border-white/10 shadow-brutal space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-artsy-yellow">
                  DIRECT ACCESS
                </span>
                <h3 className="text-2xl font-bold text-white font-space">
                  Let&apos;s build something exceptional
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  We don&apos;t have sales reps. You speak straight with the engineers and designers who will build your platform.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-artsy-yellow shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted">Email Us</p>
                    <p className="font-mono font-semibold">hello@wixgo.in</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919179668341?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-artsy-yellow"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-artsy-cyan shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted">WhatsApp Us</p>
                    <p className="font-mono font-semibold">+91 91796 68341</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-white/90">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-artsy-lime shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted">Response Guarantee</p>
                    <p className="font-mono font-semibold">&lt; 24 Hours Guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Founder guarantee stamp */}
              <div className="p-4 rounded-2xl bg-brand-black border border-white/10 -rotate-1">
                <p className="font-hand text-xl text-artsy-yellow font-bold">
                  &ldquo;Every project gets our direct personal attention from day 1.&rdquo;
                </p>
                <p className="font-mono text-[11px] text-white/60 mt-1">
                  — Sachin & Atharv
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark border-2 border-white/10 shadow-brutal-lg">
              {status === "success" ? (
                <div role="status" aria-live="polite" className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-artsy-lime/20 border-2 border-artsy-lime flex items-center justify-center text-artsy-lime">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-space">
                    Message Received! 🚀
                  </h3>
                  <p className="text-brand-muted max-w-md">
                    Thank you! Sachin and Atharv will review your requirements and reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full bg-artsy-yellow text-artsy-ink font-mono text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-muted">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-artsy-yellow"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-muted">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@startup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-artsy-yellow"
                      />
                    </div>
                  </div>

                  {/* Service Pills */}
                  <div className="space-y-2">
                    <p id="service-options-label" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-muted">
                      What are you looking to build?
                    </p>
                    <div role="group" aria-labelledby="service-options-label" className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          aria-pressed={formData.service === opt}
                          onClick={() => setFormData({ ...formData, service: opt })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                            formData.service === opt
                              ? "bg-artsy-yellow text-artsy-ink font-bold shadow-sm"
                              : "bg-white/[0.04] border border-white/10 text-white/80 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div className="space-y-2">
                    <p id="budget-options-label" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Estimated Budget Range
                    </p>
                    <div role="group" aria-labelledby="budget-options-label" className="flex flex-wrap gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          aria-pressed={formData.budget === b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                            formData.budget === b
                              ? "bg-artsy-lime text-artsy-ink font-bold shadow-sm"
                              : "bg-white/[0.04] border border-white/10 text-white/80 hover:border-white/30"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Tell us about your project & goals *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Share your timeline, vision, design inspiration, or what problem you're solving..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-artsy-yellow resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="min-h-12 w-full font-mono flex items-center justify-center gap-2 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 rounded-xl bg-white text-artsy-ink font-bold text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-widest leading-tight hover:bg-artsy-yellow hover:scale-[1.01] transition-all shadow-brutal disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="sm:hidden">Sending...</span>
                        <span className="hidden sm:inline">Sending note to founders...</span>
                      </>
                    ) : (
                      <>
                        <span className="whitespace-nowrap">Send Message</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
