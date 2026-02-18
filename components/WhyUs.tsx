"use client";

import SectionReveal from "./SectionReveal";

const differentiators = [
  {
    title: "Built for trades, not repurposed",
    description:
      "This isn\u2019t generic AI that\u2019s been slapped onto a trade business. Every system we build is designed for how tradespeople actually work \u2014 vans, sites, and all.",
  },
  {
    title: "UK-based. We get it.",
    description:
      "We understand how trade businesses operate in the UK. No offshore teams, no timezone headaches. Direct access to the people building your system.",
  },
  {
    title: "No jargon, no long contracts",
    description:
      "Plain English, clear pricing, honest timelines. You\u2019ll know exactly what you\u2019re getting before we start. No lock-ins, no nonsense.",
  },
  {
    title: "One team, from inbound to operations",
    description:
      "Start with an AI agent answering your calls. When you\u2019re ready, we automate the rest \u2014 quoting, scheduling, follow-ups. One relationship, one team.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Why InvoxAI
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text-primary">
            We speak trades,{" "}
            <span className="italic text-accent">not tech.</span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <SectionReveal key={item.title} delay={0.1 * (i + 1)}>
              <div className="border-t border-border-subtle pt-8">
                <h3 className="font-serif text-xl text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
