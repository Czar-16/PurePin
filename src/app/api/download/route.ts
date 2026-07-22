import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // console.log("Download API hit");
  const url = request.nextUrl.searchParams.get("url");
  // console.log("URL is :", url);

  if (!url) {
    return NextResponse.json(
      {
        error: "Image URL is required.",
      },
      {
        status: 400,
      },
    );
  }
  try {
    // convert string url to URL
    const parsedUrl = new URL(url);

    // security check: only allow Pinterest's image CDN to prevent
    // this route being abused as an open proxy (SSRF risk)
    if (parsedUrl.hostname !== "i.pinimg.com") {
      return NextResponse.json(
        { error: "Only Pinterest image addresses are allowed." },
        { status: 400 },
      );
    }

    // normally axios assumes you're requesting JSON
    const response = await axios.get(url, {
      // give response in raw binary data
      responseType: "arraybuffer",
    });

    // send the image back through our own server (proxy) with headers
    // that force the browser to download it instead of opening/rendering it
    return new NextResponse(response.data, {
      headers: {
        "Content-Type": String(
          response.headers["content-type"] || "application/octet-stream",
        ),
        "Content-Disposition": 'attachment; filename="purepin-image"',
      },
    });
  } catch (error) {
    // catches invalid URLs, network failures, or Pinterest blocking the request
    return NextResponse.json(
      { error: "Failed to download image." },
      { status: 500 },
    );
  }
}
