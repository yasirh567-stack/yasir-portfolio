import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  eyebrow,
  title,
  description,
}: {
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className={cn("py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className="mb-14 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
