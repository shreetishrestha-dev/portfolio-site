import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./motion/reveal";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I Built"
            description="From healthcare analytics to cloud security and community-driven apps, the through-line is building tools people can trust."
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {portfolio.experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <article className="glass-panel grid gap-6 rounded-[2rem] p-6 md:grid-cols-[180px_1fr] md:p-8">
                <div className="relative">
                  <div className="sticky top-24">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{item.period}</p>
                    <div className="mt-4 hidden h-24 w-px bg-gradient-to-b from-[var(--accent)] to-transparent md:block" />
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{item.company}</p>
                  <h3 className="display-title mt-2 text-2xl font-semibold">{item.role}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.highlight}</p>
                  <ul className="mt-5 grid gap-3 md:grid-cols-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-sm leading-6 text-[var(--muted)]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
