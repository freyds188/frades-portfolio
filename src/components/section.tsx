import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
