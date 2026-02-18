"use client";

import SectionReveal from "./SectionReveal";
import { PhoneMissed, Clock, FileText, PoundSterling } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    text: "You\u2019re on a job and your phone rings. You can\u2019t answer. The customer calls someone else.",
  },
  {
    icon: Clock,
    text: "You check your voicemail at 6pm. Three messages. Two have already booked elsewhere.",
  },
  {
    icon: FileText,
    text: "Your evenings disappear into quoting, chasing, and doing admin instead of switching off.",
  },
  {
    icon: PoundSterling,
    text: "You\u2019ve thought about hiring someone to answer calls, but it\u2019s \u00a325k+ a year.",
  },
];

const solutions = [
  "Every call answered instantly, 24/7 \u2014 even when you\u2019re on the roof",
  "Leads qualified and details captured before you even see the notification",
  "Jobs booked into your calendar automatically",
  "Beyond inbound: quoting, follow-ups, and admin automated too",
];

export default function Problem() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            The Problem
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text-primary">
            You&apos;re losing jobs<br className="hidden md:block" /> while you&apos;re busy doing them.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Problems column */}
          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              {problems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary">
                    <item.icon size={18} className="text-text-muted" />
                  </div>
                  <p className="pt-2 text-text-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Solution column */}
          <SectionReveal delay={0.2}>
            <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                The Fix
              </p>
              <h3 className="mt-4 font-serif text-2xl text-text-primary md:text-3xl">
                First, we make sure you never miss a lead.{" "}
                <span className="text-accent">Then we automate the rest.</span>
              </h3>
              <ul className="mt-8 space-y-4">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
