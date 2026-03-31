"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./motion/reveal";
import { TiltCard } from "./motion/tilt-card";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  const allProjects = [
    ...portfolio.projects.map((project) => ({
      ...project,
      secondaryHref: project.secondaryHref ?? undefined,
      kind: "featured" as const,
    })),
    ...portfolio.githubProjects.map((project) => ({
      ...project,
      secondaryHref: undefined,
      kind: "github" as const,
    })),
  ];

  return (
    <section id="projects" className="px-3 py-14 sm:px-4 sm:py-16 md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I Built"
            description="A combined view of shipped product work, platform engineering, and selected public GitHub projects."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          {allProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full min-w-0">
              <TiltCard className="group glass-panel relative flex h-full min-h-[280px] min-w-0 overflow-hidden rounded-[1.25rem] p-4 min-[420px]:min-h-[300px] min-[420px]:rounded-[1.5rem] min-[420px]:p-5 md:rounded-[2rem] md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,209,197,0.18),transparent_25%),linear-gradient(135deg,rgba(107,138,253,0.08),transparent_40%,rgba(240,184,216,0.14))]" />
                <motion.div
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--accent-soft)] blur-2xl"
                  whileHover={{ scale: 1.18 }}
                />
                <div className="relative flex h-full w-full flex-col">
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] sm:text-xs sm:tracking-[0.18em]">
                        {project.kind === "github" ? <Github className="h-3.5 w-3.5 shrink-0" /> : null}
                        <span className="truncate">{project.kind === "github" ? "GitHub project" : "Featured project"}</span>
                      </div>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-11 sm:w-11"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                    <h3 className="display-title mt-3 max-w-full break-words text-[1.65rem] font-semibold leading-tight [overflow-wrap:anywhere] min-[420px]:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)] min-[420px]:mt-5 min-[420px]:text-base min-[420px]:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] sm:px-3 sm:text-xs sm:tracking-[0.14em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 min-[420px]:pt-8">
                    <div className="rounded-[1.1rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3.5 min-[420px]:rounded-[1.25rem] min-[420px]:p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Outcome</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">{project.outcome}</p>
                    </div>
                    {project.secondaryHref ? (
                      <a
                        href={project.secondaryHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
                      >
                        View live listing
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
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
