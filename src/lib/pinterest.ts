// src/lib/pinterest.ts

import { GeneratedImage } from "@/types";

export function generateOriginalUrls(url: string): GeneratedImage[] {
  // Replace any Pinterest size folder with "originals"
  const baseUrl = url.replace(
    /https:\/\/i\.pinimg\.com\/[^/]+\//,
    "https://i.pinimg.com/originals/",
  );

  // Remove the existing extension
  const withoutExtension = baseUrl.replace(/\.(jpg|jpeg|png|webp)$/i, "");

  return [
    {
      format: "jpg",
      url: `${withoutExtension}.jpg`,
    },
    {
      format: "png",
      url: `${withoutExtension}.png`,
    },
  ];
}
