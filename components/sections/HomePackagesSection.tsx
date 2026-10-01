"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Monitor, Rocket, Smartphone } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    number: "01",
    category: "LAUNCH",
    title: "Landing Page",
    subtitle: "HIGH-CONVERTING DIGITAL PRESENCE",
    description:
      "Perfect for businesses that need a powerful first impression and a focused online presence.",
    features: [
      "Premium custom UI/UX",
      "Responsive & mobile-first design",
      "Conversion-focused sections",
      "Basic SEO setup",
      "WhatsApp / contact integration",
      "Deployment & performance setup",
    ],
    price: "₹19,999+",
    icon: Monitor,
    accentBg: "bg-artsy-yellow",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-yellow",
  },
  {
    number: "02",
    category: "BUSINESS",
    title: "Website + App",
    subtitle: "COMPLETE DIGITAL BUSINESS SYSTEM",
    description:
      "For growing businesses that need a complete web and mobile digital presence.",
    features: [
      "Multi-page website",
      "Android & iOS app",
      "Authentication & user profiles",
      "Backend & database",
      "Admin dashboard",
      "API / third-party integrations",
    ],
    price: "₹79,999+",
    icon: Smartphone,
    accentBg: "bg-artsy-cyan",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-cyan",
    popular: true,
  },
  {
    number: "03",
    category: "SCALE",
    title: "Web App + AI",
    subtitle: "PRODUCTS BUILT TO SCALE",
    description:
      "For startups and businesses building products, platforms and intelligent automation systems.",
    features: [
      "Custom web application",
      "Advanced dashboard",
      "Scalable backend architecture",
      "AI integration",
      "AI automation workflows",
      "Custom AI agents",
    ],
    price: "₹1,49,999+",
    icon: Rocket,
    accentBg: "bg-artsy-lime",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-lime",
  },
];

export default function HomePackagesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="home-packages-heading"
      className="relative overflow-hidden bg-brand-black py-24 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-notebook opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 1, y: 25 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-16 max-w-3xl space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2">
            <span className="font-hand text-3xl font-bold tracking-wide text-artsy-yellow">
              let&apos;s build something!
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
            id="home-packages-heading"
            className="font-space text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Choose what you want to <span className="text-gradient-artsy">build.</span>
          </h2>

          <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
            From your first landing page to a complete AI-powered product,
            choose the package that fits your next move.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {packages.map((plan, index) => (
            <motion.article
              key={plan.number}
              initial={shouldReduceMotion ? false : { opacity: 1, y: 25 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              className={`group relative flex flex-col justify-between rounded-3xl border-2 border-white/10 bg-brand-dark p-7 shadow-card transition-all duration-300 hover:shadow-brutal-lg sm:p-8 ${plan.hoverBorder}`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 text-lg font-black shadow-sm font-space ${plan.accentBg} ${plan.accentText}`}
                  >
                    {plan.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-muted transition-colors group-hover:border-white group-hover:text-white">
                    <plan.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-violet">
                    {plan.category}
                  </p>
                  {plan.popular && (
                    <span className="mb-3 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[10px] font-bold text-white">
                      MOST POPULAR
                    </span>
                  )}
                </div>

                <h3 className="mb-2 font-space text-2xl font-bold text-white">
                  {plan.title}
                </h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-violet">
                  {plan.subtitle}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-brand-muted">
                  {plan.description}
                </p>

                <ul className="mb-8 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-white/80 sm:text-sm"
                    >
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-artsy-yellow"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-6 font-mono text-sm font-bold text-white">
                  STARTING {plan.price}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.08] pt-4">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:text-artsy-yellow"
                >
                  Explore Package
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-muted transition-colors hover:text-artsy-yellow"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-space text-xl font-bold text-white">
              Not sure what you need?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-base">
              Tell us what you&apos;re building and we&apos;ll help you find the
              right starting point.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-artsy-yellow"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-muted transition-colors hover:text-artsy-yellow"
            >
              View All Packages
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}