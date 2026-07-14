import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { generateOriginalUrls } from "@/lib/pinterest";

async function imageExists(url: string) {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      validateStatus: () => true,
    });

    return response.status === 200;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { url } = body;

    if (!url) {
      return NextResponse.json(
        {
          error: "URL is required.",
        },
        {
          status: 400,
        },
      );
    }

    const candidates = generateOriginalUrls(url);

    const png = candidates.find((image) => image.format === "png");

    if (png && (await imageExists(png.url))) {
      return NextResponse.json([png]);
    }

    const jpg = candidates.find((image) => image.format === "jpg");

    if (jpg && (await imageExists(jpg.url))) {
      return NextResponse.json([jpg]);
    }

    return NextResponse.json([]);
  } catch {
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
