"use client";

import SectionReveal from "./SectionReveal";

const steps = [
  {
    number: "01",
    title: "We Learn Your Business",
    description:
      "Your services, your area, your process. We figure out exactly how enquiries come in and where they\u2019re falling through.",
  },
  {
    number: "02",
    title: "We Build Your AI Agent",
    description:
      "A custom voice and chat agent trained on your specific business. It knows your services, your pricing, your availability.",
  },
  {
    number: "03",
    title: "We Test Until It\u2019s Right",
    description:
      "Real scenarios, edge cases, awkward callers. We don\u2019t go live until it handles enquiries like your best employee.",
  },
  {
    number: "04",
    title: "Go Live & Grow",
    description:
      "Your agent starts answering calls. You start capturing every lead. Then we look at what else we can automate.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text-primary">
            From first call to{" "}
            <span className="italic text-accent">fully automated</span> in days.
          </h2>
        </SectionReveal>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <SectionReveal key={step.number} delay={0.1 * (i + 1)}>
                  <div className="relative">
                    {/* Step number node */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-bg-primary">
                      <span className="font-mono text-sm text-accent">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-lg text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 md:hidden">
          <div className="relative border-l border-accent/20 pl-8">
            {steps.map((step, i) => (
              <SectionReveal key={step.number} delay={0.1 * (i + 1)}>
                <div className="relative pb-12 last:pb-0">
                  {/* Step number node */}
                  <div className="absolute -left-[calc(2rem+0.5px)] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-bg-primary">
                    <span className="font-mono text-xs text-accent">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
