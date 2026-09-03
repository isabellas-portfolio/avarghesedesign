type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight text-[var(--accent)] sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-6 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
