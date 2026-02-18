"use client";

import { useState, FormEvent } from "react";
import SectionReveal from "./SectionReveal";
import { Send, Loader2 } from "lucide-react";

const tradeTypes = [
  "Plumber",
  "Electrician",
  "Roofer",
  "Builder",
  "Landscaper",
  "Other",
];

const interests = [
  "AI agent for inbound calls",
  "Wider AI automation for my business",
  "Both / not sure yet",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      businessName: (form.elements.namedItem("businessName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      tradeType: (form.elements.namedItem("tradeType") as HTMLSelectElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0" />

      {/* Faint radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.02] blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: CTA text */}
          <SectionReveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Get In Touch
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text-primary">
              Your customers are calling.{" "}
              <span className="italic text-accent">Let&apos;s make sure someone answers.</span>
            </h2>
            <p className="mt-6 max-w-md text-text-muted leading-relaxed">
              Whether you need an AI agent handling your inbound or a complete
              operations overhaul, it starts with a free consultation to figure
              out exactly what you need. No commitment, no hard sell.
            </p>

            <div className="mt-10 space-y-4 border-t border-border-subtle pt-8">
              <div>
                <p className="text-xs text-text-muted">Email</p>
                <a
                  href="mailto:georgegoonan@invoxai.uk"
                  className="text-text-body transition-colors hover:text-accent"
                >
                  georgegoonan@invoxai.uk
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Right: Form */}
          <SectionReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs text-text-muted"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40 placeholder:text-text-muted/40"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-1.5 block text-xs text-text-muted"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    className="w-full rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40 placeholder:text-text-muted/40"
                    placeholder="Smith Plumbing Ltd"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs text-text-muted"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40 placeholder:text-text-muted/40"
                    placeholder="07700 900000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs text-text-muted"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40 placeholder:text-text-muted/40"
                    placeholder="john@smithplumbing.co.uk"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="tradeType"
                    className="mb-1.5 block text-xs text-text-muted"
                  >
                    What type of trade? *
                  </label>
                  <select
                    id="tradeType"
                    name="tradeType"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40"
                  >
                    <option value="" disabled>
                      Select your trade
                    </option>
                    {tradeTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-xs text-text-muted"
                  >
                    What are you interested in? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {interests.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs text-text-muted"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border-subtle bg-bg-primary px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-accent/40 placeholder:text-text-muted/40"
                  placeholder="Tell us about your business and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-bg-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="mt-3 text-center text-sm text-red-400">
                  {errorMsg}
                </p>
              )}

              {status === "success" && (
                <p className="mt-3 text-center text-sm text-accent">
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
              )}
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
