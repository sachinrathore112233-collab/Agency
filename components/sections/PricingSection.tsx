"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Monitor,
  Rocket,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const packages = [
  {
    slug: "launch",
    number: "01",
    name: "LAUNCH",
    product: "Landing Page",
    icon: Monitor,
    accentBg: "bg-artsy-yellow",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-yellow",
    hoverText: "hover:text-artsy-yellow",
    price: "₹19,999",
    description:
      "Custom landing page development for businesses, startups and brands looking for a fast, responsive and conversion-focused digital presence.",
    cta: "Start with Launch",
    relatedServices: [
      { label: "Explore Website Development", href: "/services/web-development" },
      { label: "Explore UI/UX Design", href: "/services/ui-ux" },
      { label: "Explore SEO Services", href: "/services/seo" },
    ],
    features: [
      "Premium landing page",
      "Custom UI/UX",
      "Responsive design",
      "Hero section",
      "About / Services",
      "Testimonials",
      "CTA sections",
      "WhatsApp integration",
      "Contact form",
      "Basic SEO",
      "Performance optimization",
      "Mobile + tablet responsive",
      "Deployment",
    ],
  },
  {
    slug: "business",
    number: "02",
    name: "BUSINESS",
    product: "Website + App",
    icon: Smartphone,
    accentBg: "bg-artsy-cyan",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-cyan",
    hoverText: "hover:text-artsy-cyan",
    price: "₹79,999",
    description:
      "Website and mobile app development for growing businesses that need a complete digital platform with backend, database and user features.",
    cta: "Build My Business",
    popular: true,
    relatedServices: [
      { label: "Explore Website Development", href: "/services/web-development" },
      { label: "Explore Mobile App Development", href: "/services/app-development" },
      { label: "Explore UI/UX Design", href: "/services/ui-ux" },
    ],
    features: [
      "Everything in Launch",
      "Multi-page website",
      "Custom UI/UX",
      "Android + iOS app",
      "Authentication",
      "User profiles",
      "Push notifications",
      "Backend/API integration",
      "Database",
      "Admin dashboard",
      "CMS",
      "SEO",
      "Analytics",
      "App deployment support",
    ],
  },
  {
    slug: "scale",
    number: "03",
    name: "SCALE",
    product: "Web App + AI",
    icon: Rocket,
    accentBg: "bg-artsy-lime",
    accentText: "text-artsy-ink",
    hoverBorder: "hover:border-artsy-lime",
    hoverText: "hover:text-artsy-lime",
    price: "₹1,49,999",
    description:
      "Custom web application and AI development for startups and businesses building SaaS products, automation systems and AI-powered platforms.",
    cta: "Build with AI",
    relatedServices: [
      {
        label: "Explore SaaS Product Engineering",
        href: "/services/saas-product-engineering",
      },
      { label: "Explore Website Development", href: "/services/web-development" },
      { label: "Explore UI/UX Design", href: "/services/ui-ux" },
    ],
    features: [
      "Everything in Business",
      "Custom web application",
      "Advanced dashboard",
      "Authentication & roles",
      "Database architecture",
      "API development",
      "Payment integration",
      "Admin panel",
      "Analytics",
      "AI chatbot",
      "AI assistant",
      "AI automation",
      "AI workflows",
      "AI API integration",
      "Custom AI agents",
      "Business process automation",
      "Scalable architecture",
    ],
  },
];

const comparisonRows = [
  { feature: "Landing Page", launch: true, business: true, scale: true },
  { feature: "Responsive Design", launch: true, business: true, scale: true },
  { feature: "Custom UI/UX", launch: true, business: true, scale: true },
  { feature: "Basic SEO", launch: true, business: true, scale: true },
  { feature: "Multi-page Website", launch: false, business: true, scale: true },
  { feature: "CMS", launch: false, business: true, scale: true },
  { feature: "Android App", launch: false, business: true, scale: true },
  { feature: "iOS App", launch: false, business: true, scale: true },
  { feature: "Authentication", launch: false, business: true, scale: true },
  { feature: "User Profiles", launch: false, business: true, scale: true },
  { feature: "Database", launch: false, business: true, scale: true },
  { feature: "Backend/API", launch: false, business: true, scale: true },
  { feature: "Admin Dashboard", launch: false, business: true, scale: true },
  { feature: "Payments", launch: false, business: false, scale: true },
  { feature: "Advanced Dashboard", launch: false, business: false, scale: true },
  { feature: "AI Integration", launch: false, business: false, scale: true },
  { feature: "AI Chatbot", launch: false, business: false, scale: true },
  { feature: "AI Automation", launch: false, business: false, scale: true },
  { feature: "AI Agents", launch: false, business: false, scale: true },
  { feature: "Custom Workflows", launch: false, business: false, scale: true },
  { feature: "Scalable Architecture", launch: false, business: false, scale: true },
];

export default function PricingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="relative overflow-hidden bg-brand-black py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-notebook opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2">
            <span className="font-hand text-3xl font-bold tracking-wide text-artsy-yellow">
              build with wixgo
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
          <h1
            id="packages-heading"
            className="font-space text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Choose Your Next <span className="text-gradient-artsy">Digital Move</span>
          </h1>
          <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
            From website and mobile app development to custom web applications
            and AI-powered products, Wixgo builds digital experiences that grow
            with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 lg:gap-6">
          {packages.map((plan, index) => (
            <motion.article
              id={plan.slug}
              key={plan.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              className={`group relative flex flex-col rounded-3xl border-2 border-white/10 bg-brand-dark p-7 shadow-card transition-all duration-300 hover:shadow-brutal-lg sm:p-8 ${plan.hoverBorder}`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 text-lg font-black shadow-sm ${plan.accentBg} ${plan.accentText} font-space`}
                  >
                    {plan.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-muted transition-colors group-hover:border-white group-hover:text-white">
                    <plan.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-violet">
                    {plan.name}
                  </p>
                  {plan.popular && (
                    <span
                      className={`rounded-full border border-black/10 px-2.5 py-1 font-mono text-[10px] font-bold ${plan.accentBg} ${plan.accentText}`}
                    >
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <h2 className="mb-2 font-space text-2xl font-bold text-white">
                  {plan.product}
                </h2>
                <p className="mt-4 text-sm text-brand-muted">Starting at</p>
                <p className="mt-1 font-space text-3xl font-bold text-brand-white sm:text-4xl">
                  {plan.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                  {plan.description}
                </p>
                <div className="mt-6 border-b border-white/10" />
              </div>

              <ul className="flex-1 space-y-3 py-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-artsy-yellow"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <nav
                aria-label={`${plan.product} related services`}
                className="mb-6 border-t border-white/10 pt-4"
              >
                <p className="mb-3 text-xs font-medium text-brand-muted">
                  Related services
                </p>
                <ul className="space-y-2">
                  {plan.relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className={`text-xs font-medium text-brand-muted underline decoration-white/25 underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${plan.hoverText}`}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Link
                href="/#contact"
                className={`group/cta mt-auto inline-flex items-center gap-2 border-t border-white/[0.08] pt-4 font-mono text-xs font-bold uppercase text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${plan.hoverText}`}
              >
                {plan.cta}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
                />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 sm:mt-28 lg:mt-32">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 font-mono text-xs font-semibold text-blue-400 sm:text-sm">
              PACKAGE COMPARISON
            </p>
            <h2 className="font-space text-2xl font-bold text-brand-white sm:text-3xl">
              Compare the Packages
            </h2>
          </div>

          <div
            className="overflow-x-auto rounded-xl border border-white/10 bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            tabIndex={0}
            role="region"
            aria-label="Package feature comparison. Scroll horizontally to see all packages."
          >
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Features included in the Launch, Business, and Scale packages
              </caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-5 py-4 font-semibold text-white sm:px-6">
                    Feature
                  </th>
                  {packages.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="px-5 py-4 font-mono text-xs font-semibold text-white sm:px-6"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <th
                      scope="row"
                      className="px-5 py-3.5 font-medium text-white/80 sm:px-6"
                    >
                      {row.feature}
                    </th>
                    {([row.launch, row.business, row.scale] as const).map(
                      (included, index) => (
                        <td
                          key={index}
                          className="px-5 py-3.5 sm:px-6"
                          aria-label={included ? "Included" : "Not included"}
                        >
                          {included ? (
                            <Check
                              aria-hidden="true"
                              className="h-4 w-4 text-blue-400"
                            />
                          ) : (
                            <span aria-hidden="true" className="text-white/25">
                              —
                            </span>
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}