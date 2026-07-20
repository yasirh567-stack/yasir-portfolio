import { recordVisit, getVisitStats } from "@/lib/redis";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const path = typeof body.path === "string" ? body.path : "/";
  const total = await recordVisit(path);
  return Response.json({ total });
}

export async function GET() {
  const stats = await getVisitStats();
  return Response.json({ total: stats?.total ?? null });
}
