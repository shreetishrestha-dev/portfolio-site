import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./motion/reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Who I Am"
            description={portfolio.summary}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="display-title text-xl font-semibold">Selected achievements</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  {portfolio.achievements.map((achievement) => (
                    <li key={achievement} className="rounded-2xl border border-[var(--border)] px-4 py-3">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="display-title text-xl font-semibold">Education & community</h3>
                <div className="mt-4 space-y-3">
                  {portfolio.education.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-[var(--border)] px-4 py-4">
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{item.institution}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.period}</p>
                    </div>
                  ))}
                  {portfolio.volunteering.map((item) => (
                    <div key={item} className="rounded-2xl border border-[var(--border)] px-4 py-4 text-sm text-[var(--muted)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
