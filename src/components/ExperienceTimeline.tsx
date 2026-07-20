import type { ExperienceEntry } from "@/data/types";
import { Reveal } from "./Reveal";

export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative ml-3 border-l border-border">
      {entries.map((role, index) => (
        <li key={`${role.company}-${role.title}`} className="relative pb-16 pl-10 last:pb-0">
          <span className="absolute -left-[7.5px] top-2 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background" />
          <Reveal delay={index * 0.05}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                {role.title}
              </h3>
              <span className="text-sm font-medium text-muted">
                {role.startDate} &ndash; {role.endDate}
              </span>
            </div>
            <p className="mt-1.5 text-base font-medium text-accent">
              {role.company}
              {role.location && <span className="text-muted"> &middot; {role.location}</span>}
            </p>
            <ul className="mt-5 space-y-3">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
