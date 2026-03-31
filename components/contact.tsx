"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/lib/portfolio-data";
import { MagneticButton } from "./motion/magnetic-button";
import { Reveal } from "./motion/reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${form.name || "a visitor"}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    });

    window.location.href = `mailto:${portfolio.email}?${params.toString()}`;
  };

  return (
    <section id="contact" className="px-4 py-16 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Together"
            description="Let’s build experiences that feel both technically robust and genuinely enjoyable to use."
          />
          <div className="mt-8 space-y-3">
            {[
              { icon: Mail, label: portfolio.email },
              { icon: Phone, label: portfolio.phone },
              { icon: MapPin, label: portfolio.location },
            ].map((item) => (
              <div key={item.label} className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-4 text-sm text-[var(--muted)]">
                <item.icon className="h-4 w-4 text-[var(--accent)]" />
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_var(--accent-soft)]"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_var(--accent-soft)]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-[var(--muted)]">Message</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className="w-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_var(--accent-soft)]"
                placeholder="Tell me a little about the product, team, or idea."
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--muted)]">
                This opens your default email client with the message prefilled.
              </p>
              <MagneticButton
                type="submit"
                className="glass-panel inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                Send inquiry
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
