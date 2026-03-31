import { Github, HeartHandshake, Linkedin } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="section-shell glass-panel flex flex-col gap-4 rounded-[2rem] px-6 py-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display-title text-lg font-semibold text-[var(--foreground)]">{portfolio.name}</p>
          <p className="mt-1">Senior full-stack engineer building elegant, high-trust digital products.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="inline-flex items-center gap-2">
            <HeartHandshake className="h-4 w-4" />
            Open to thoughtful collaborations
          </span>
        </div>
      </div>
    </footer>
  );
}
