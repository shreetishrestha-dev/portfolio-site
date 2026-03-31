"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { portfolio } from "@/lib/portfolio-data";
import { withBasePath } from "@/lib/site";
import { MagneticButton } from "./motion/magnetic-button";
import { Reveal } from "./motion/reveal";

const HeroScene = dynamic(() => import("@/components/hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
});

export function HeroSection() {
  const hoverRef = useRef({ active: false, x: 0, y: 0 });

  return (
    <section
      id="top"
      className="relative px-3 pb-14 pt-8 sm:px-4 sm:pb-16 sm:pt-10 md:pb-24 md:pt-10"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        hoverRef.current = { active: true, x, y };
      }}
      onPointerLeave={() => {
        hoverRef.current = { ...hoverRef.current, active: false };
      }}
    >
      <div className="section-shell relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--background-soft)] px-4 py-8 shadow-[var(--shadow)] sm:rounded-[2rem] sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="noise" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(117,234,132,0.18),transparent_22%),radial-gradient(circle_at_76%_18%,rgba(139,100,255,0.18),transparent_26%)]"
            animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.82] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-8 top-20 h-48 w-48 rounded-full bg-[rgba(117,234,132,0.16)] blur-3xl"
            animate={{ x: [0, 26, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 top-10 h-64 w-64 rounded-full bg-[rgba(139,100,255,0.18)] blur-3xl"
            animate={{ x: [0, -22, 0], y: [0, 18, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-8 left-1/3 h-40 w-40 rounded-full bg-[rgba(255,158,177,0.14)] blur-3xl"
            animate={{ x: [0, 14, 0], y: [0, -14, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <HeroScene hoverRef={hoverRef} />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex max-w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                AWS certified developer associate • computer engineer
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-5 flex items-end gap-2 min-[420px]:gap-3 md:mt-6 md:gap-4">
                <h1 className="display-title text-[2.75rem] font-semibold leading-[0.92] min-[420px]:text-5xl md:text-7xl lg:text-[5.5rem]">
                  {portfolio.name}
                </h1>
                <motion.div
                  className="mb-1 shrink-0"
                  whileHover={{ y: -6, rotate: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 240, damping: 16 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(117,234,132,0.3),rgba(139,100,255,0.14),transparent_62%)] blur-xl"
                      animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.75] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <Image
                      src={withBasePath("/images/hero-wave.gif")}
                      alt="Animated waving avatar"
                      width={180}
                      height={180}
                      className="hero-avatar h-24 w-24 object-contain min-[420px]:h-28 min-[420px]:w-28 md:h-[180px] md:w-[180px]"
                      unoptimized
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)] min-[420px]:text-lg md:mt-4 md:text-xl md:leading-8">
                {portfolio.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-col gap-3 min-[420px]:mt-8 sm:flex-row sm:gap-4">
                <MagneticButton
                  href="#projects"
                  className="group glass-panel inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[var(--foreground)] sm:w-auto sm:px-6"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton
                  href={withBasePath("/cv/shreeti-shrestha-cv-2025.pdf")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3.5 text-sm font-semibold text-[var(--foreground)] sm:w-auto sm:px-6"
                  target="_blank"
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-sm text-[var(--muted)] sm:mt-8 sm:gap-3">
                <a
                  href={portfolio.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-2 sm:px-4"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={portfolio.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-2 sm:px-4"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <span className="rounded-full border border-[var(--border)] px-3.5 py-2 sm:px-4">{portfolio.location}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:justify-self-end">
            <motion.div
              className="glass-panel relative w-full max-w-md overflow-hidden rounded-[1.75rem] p-4 min-[420px]:p-5 md:rounded-[2rem] md:p-7"
              whileHover={{ y: -6, rotate: -1 }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(107,138,253,0.14),rgba(11,20,35,0.02)_45%,rgba(127,209,197,0.12))]" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl" />
              <div className="relative">
                <div className="flex flex-col items-start justify-between gap-3 min-[420px]:flex-row min-[420px]:items-start min-[420px]:gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--muted)] min-[420px]:text-xs min-[420px]:tracking-[0.3em]">Impact snapshot</p>
                  </div>
                  <div className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Available
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:mt-6 min-[420px]:grid-cols-2 md:mt-7">
                  {portfolio.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface-strong)]/90 p-4"
                    >
                      <div className="display-title text-3xl font-semibold leading-none min-[420px]:text-4xl">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)] p-4 md:mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Focus areas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Healthcare", "Cloud security", "Analytics", "GenAI", "Mobile apps"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--background-soft)] px-3 py-1.5 text-xs text-[var(--foreground)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
