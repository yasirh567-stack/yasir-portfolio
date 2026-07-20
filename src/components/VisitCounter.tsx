"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-visited";

export function VisitCounter() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const alreadyVisited = sessionStorage.getItem(SESSION_KEY);
        const res = alreadyVisited
          ? await fetch("/api/visit")
          : await fetch("/api/visit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ path: window.location.pathname }),
            });

        if (!alreadyVisited) sessionStorage.setItem(SESSION_KEY, "1");

        const data: { total: number | null } = await res.json();
        if (!cancelled) setTotal(data.total);
      } catch {
        // No KV configured, or a network hiccup — the counter just stays hidden.
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (total === null) return null;

  return <span>{total.toLocaleString()} visits</span>;
}
