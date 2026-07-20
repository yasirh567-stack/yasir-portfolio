import type { SkillGroup } from "@/data/types";
import { SimpleIcon } from "./SimpleIcon";
import { Reveal } from "./Reveal";

export function SkillGroupCard({ group, delay = 0 }: { group: SkillGroup; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl border border-border bg-elevated p-8">
        <h3 className="font-heading text-xl font-semibold">{group.title}</h3>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {group.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-transparent px-2 py-4 text-center transition-colors hover:border-border"
            >
              <span className="flex h-9 w-9 items-center justify-center text-foreground">
                {item.icon ? (
                  <SimpleIcon slug={item.icon} className="h-8 w-8" />
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-xs font-semibold text-muted">
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </span>
              <span className="text-sm text-muted">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
