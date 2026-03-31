"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./motion/reveal";
import { TiltCard } from "./motion/tilt-card";
import { SectionHeading } from "./section-heading";

const skillStrengths = [94, 91, 88, 84];

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I Use"
            description="The stack spans modern frontend architecture, cloud-native backend systems, mobile app delivery, and analytics tooling."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {portfolio.skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <TiltCard className="glass-panel relative overflow-hidden rounded-[2rem] p-6">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(107,138,253,0.12),transparent_40%,rgba(127,209,197,0.14))]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="display-title text-2xl font-semibold">{group.title}</h3>
                    <span className="text-sm text-[var(--muted)]">{skillStrengths[index]}%</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--accent-soft)]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillStrengths[index]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -3, rotate: -1 }}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--foreground)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
