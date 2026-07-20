import { Redis } from "@upstash/redis";

const TOTAL_KEY = "portfolio:visits:total";
const PAGES_KEY = "portfolio:visits:pages";

/**
 * Accepts either Upstash's own env var names or Vercel KV's (KV is
 * Upstash-backed and exposes the same REST URL/token under a different
 * prefix), so this works whichever one you provision. See README for
 * setup steps. Returns null when neither is configured, so local dev
 * and builds work with no KV database attached — callers must handle null.
 */
function getClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) return null;
  return new Redis({ url, token });
}

export const redis = getClient();

export async function recordVisit(path: string): Promise<number | null> {
  if (!redis) return null;
  const [total] = await Promise.all([
    redis.incr(TOTAL_KEY),
    redis.hincrby(PAGES_KEY, path, 1),
  ]);
  return total;
}

export async function getVisitStats(): Promise<{
  total: number;
  pages: Record<string, number>;
} | null> {
  if (!redis) return null;
  const [total, pages] = await Promise.all([
    redis.get<number>(TOTAL_KEY),
    redis.hgetall<Record<string, number>>(PAGES_KEY),
  ]);
  return { total: total ?? 0, pages: pages ?? {} };
}
