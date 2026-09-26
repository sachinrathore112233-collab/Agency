"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", description: "Websites, apps & campaigns" },
  { value: 50, suffix: "+", label: "Happy Clients", description: "From startups to enterprises" },
  { value: 5, suffix: "+", label: "Years Experience", description: "Building digital excellence" },
  { value: 99, suffix: "%", label: "Client Satisfaction", description: "5-star reviews average" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-bold text-white tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(236,72,153,0.06) 50%, rgba(96,165,250,0.08) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="orb orb-purple w-96 h-96 -top-24 left-1/4 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.08]"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-6 py-4"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-base font-semibold text-white mt-2">{stat.label}</p>
              <p className="text-xs text-brand-muted mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
