import type { Testimonial } from "@/data/types";
import { Reveal } from "./Reveal";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Reveal>
      <blockquote className="rounded-2xl border border-border bg-elevated p-8 sm:p-10">
        <p className="text-lg leading-relaxed text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
        <footer className="mt-6">
          <p className="font-heading text-base font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.title}</p>
          {testimonial.relationship && (
            <p className="mt-1 text-sm text-accent">{testimonial.relationship}</p>
          )}
        </footer>
      </blockquote>
    </Reveal>
  );
}
