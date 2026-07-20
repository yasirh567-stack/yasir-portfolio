import type { Metadata } from "next";
import { getVisitStats } from "@/lib/redis";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/Section";

export const metadata: Metadata = pageMetadata({
  title: "Stats",
  description: "Private visit stats.",
  path: "/stats",
  noIndex: true,
});

// Read fresh from Redis on every request instead of baking in a
// build-time snapshot — visit counts change constantly.
export const dynamic = "force-dynamic";

export default async function StatsPage() {
  const stats = await getVisitStats();

  return (
    <Section eyebrow="Private" title="Visit stats">
      {!stats ? (
        <div className="rounded-2xl border border-border bg-elevated p-8 text-muted">
          <p>
            No KV database is configured yet, so there&apos;s nothing to show. Set{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-sm">
              UPSTASH_REDIS_REST_URL
            </code>{" "}
            and{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-sm">
              UPSTASH_REDIS_REST_TOKEN
            </code>{" "}
            (see the README) and visits will start recording automatically.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-elevated p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-muted">
              Total visits
            </p>
            <p className="mt-2 font-heading text-5xl font-semibold text-accent">
              {stats.total.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-elevated p-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
              Per-page breakdown
            </p>
            {Object.keys(stats.pages).length === 0 ? (
              <p className="text-muted">No page-level data yet.</p>
            ) : (
              <ul className="divide-y divide-border">
                {Object.entries(stats.pages)
                  .sort(([, a], [, b]) => b - a)
                  .map(([path, count]) => (
                    <li key={path} className="flex items-center justify-between py-3">
                      <span className="font-mono text-sm text-foreground">{path}</span>
                      <span className="text-sm text-muted">{count.toLocaleString()}</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
