"use client";

import SectionReveal from "./SectionReveal";
import { Phone, Cog, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Inbound Agents",
    description:
      "Voice and chat agents that answer your calls, qualify leads, capture job details, and book appointments \u2014 24/7. Works with your existing phone number. Sounds natural, handles complex enquiries, and sends you a summary of every conversation.",
    link: "#contact",
  },
  {
    icon: Cog,
    title: "AI Operations & Automation",
    description:
      "Once your inbound is handled, we automate the rest. CRM integration, automated quoting, follow-up sequences, job scheduling, customer communications \u2014 built around how your business actually runs.",
    link: "#contact",
  },
  {
    icon: BarChart3,
    title: "Ongoing Support & Optimisation",
    description:
      "We don\u2019t build and disappear. Continuous refinement based on real call data. Monthly reporting. New features as your business grows.",
    link: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text-primary">
            An AI agent that works your phone.{" "}
            <span className="italic text-accent">And everything after.</span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={0.1 * (i + 1)}>
              <div className="group flex h-full flex-col rounded-xl border border-border-subtle bg-bg-secondary p-8 transition-all duration-300 hover:border-border-hover hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,168,83,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-bg-primary transition-colors duration-300 group-hover:border-border-hover">
                  <service.icon
                    size={22}
                    className="text-text-muted transition-colors duration-300 group-hover:text-accent"
                  />
                </div>

                <h3 className="mt-6 font-serif text-xl text-text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="mt-6 inline-flex items-center gap-1 text-sm text-accent transition-all duration-200 hover:gap-2"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
