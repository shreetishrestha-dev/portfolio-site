type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--background-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.24em]">
        {eyebrow}
      </span>
      <h2 className="display-title mt-4 text-[2rem] font-semibold tracking-tight text-[var(--foreground)] sm:mt-5 sm:text-3xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:mt-4 sm:text-base md:text-lg">{description}</p>
    </div>
  );
}
