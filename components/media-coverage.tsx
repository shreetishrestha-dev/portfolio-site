import { ArrowUpRight, Mic2, Newspaper, PanelsTopLeft } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./motion/reveal";
import { SectionHeading } from "./section-heading";

const iconByType: Record<string, typeof Newspaper> = {
  Appearances: Mic2,
  Feature: Newspaper,
  Opinion: PanelsTopLeft,
  Panelist: Mic2,
  Profile: Newspaper,
};

export function MediaCoverageSection() {
  return (
    <section id="media" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Media"
            title="Media Coverage"
            description="Features, talks, conversations."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.mediaCoverage.map((item, index) => {
            const Icon = iconByType[item.type] ?? Newspaper;

            const content = (
              <div className="glass-panel group relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-[1.35rem] p-4 md:min-h-[210px] md:rounded-[1.6rem] md:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,209,197,0.16),transparent_28%),linear-gradient(145deg,rgba(183,174,247,0.08),transparent_45%,rgba(240,184,216,0.12))]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] sm:text-[11px]">
                      <Icon className="h-3.5 w-3.5" />
                      <span>{item.type}</span>
                    </div>
                    {item.href ? (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] transition-transform duration-300 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {item.source}
                  </p>
                  <h3 className="display-title mt-2.5 text-xl font-semibold leading-tight text-[var(--foreground)] [overflow-wrap:anywhere] sm:text-2xl">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-5">
                    <p className="text-sm text-[var(--muted)]">
                      {item.href ? "Open coverage" : "Referenced in CV"}
                    </p>
                  </div>
                </div>
              </div>
            );

            return (
              <Reveal key={`${item.source}-${item.title}`} delay={index * 0.08} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
