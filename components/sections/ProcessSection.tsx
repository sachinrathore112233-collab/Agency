"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Rocket, HeartHandshake } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We deep-dive into your business, goals, and target audience to uncover what makes you unique.",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We craft a tailored roadmap covering tech stack, design direction, content, and timelines.",
    color: "from-brand-purple to-brand-violet",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "Our designers create pixel-perfect interfaces that are beautiful, functional, and on-brand.",
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "04",
    icon: Code2,
    title: "Develop",
    description:
      "We build with clean, scalable code using modern frameworks, animations, and best practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "After thorough QA testing, we deploy your project to production and ensure a smooth go-live.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Support",
    description:
      "We don't disappear after launch. Ongoing support, updates, and growth strategies are on us.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="orb orb-purple w-[500px] h-[500px] top-1/2 -translate-y-1/2 right-[-200px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16 space-y-4"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-violet text-sm font-medium">
              How We Work
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          >
            Our <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-brand-muted text-lg max-w-xl mx-auto">
            A proven 6-step framework that transforms your idea into a market-ready digital product.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative p-6 rounded-2xl bg-brand-black border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Step number background */}
              <span className="absolute top-4 right-5 text-6xl font-bold text-white/[0.04] select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-xs font-mono text-brand-muted">{step.number}</span>
                {step.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (not on last in row) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-brand-muted mb-5">
            Ready to start your journey with us?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet text-white font-semibold text-lg hover:shadow-glow-purple hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Work Together →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
