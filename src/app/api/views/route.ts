import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const VIEW_KEY = "purepin:total_views";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const readOnly = searchParams.get("read") === "true";

  const count = readOnly
    ? await redis.get<number>(VIEW_KEY)
    : await redis.incr(VIEW_KEY);

  return NextResponse.json({ count: count ?? 0 });
}
