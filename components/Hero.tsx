"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroAnimationPlayer = dynamic(
  () => import("./HeroAnimation/HeroAnimationPlayer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-[600/480] w-full max-w-[500px] items-center justify-center">
        <div className="h-6 w-6 animate-pulse rounded-full bg-accent/20" />
      </div>
    ),
  }
);

const stats = [
  { value: "24/7", label: "calls answered" },
  { value: "100%", label: "capture rate" },
  { value: "<30s", label: "response time" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible pt-20 md:pt-0">
      {/* Faint radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pb-20 pt-24 md:flex-row md:items-center md:gap-8 md:px-8 md:pt-40 md:pb-32 lg:gap-16">
        {/* Text content */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-text-primary"
          >
            Every missed call is a lost job.{" "}
            <span className="italic text-accent">We fix that.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted md:text-xl"
          >
            AI voice and chat agents that answer your calls, qualify your leads,
            and book your jobs — automatically. Plus wider automation to
            streamline the rest of your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-bg-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] hover:scale-[1.02]"
            >
              Book a Free Consultation
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle px-7 py-3.5 text-sm text-text-body transition-all duration-300 hover:border-border-hover hover:text-text-primary"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Animation — no card wrapper, floats naturally */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-[500px] flex-shrink-0 md:w-[45%]"
        >
          <HeroAnimationPlayer />
        </motion.div>
      </div>

      {/* Social proof strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-border-subtle"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:px-8 md:py-6">
          <p className="text-sm text-text-muted">
            Trusted by electricians, plumbers, and trade businesses across the UK
          </p>
          <div className="flex gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-mono text-lg font-medium text-text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
