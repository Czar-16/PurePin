// import { GeneratedImage } from "@/types";

import { GeneratedImageUrl } from "@/types";

export function generateOriginalUrls(url: string): GeneratedImageUrl[] {
  // By default the url is in jpg just the originals is replace with px.
  const original = url.includes("/originals/")
    ? url
    : url.replace(/\/(236x|474x|564x|736x)\//, "/originals/");

  const png = original.replace(/\.(jpg|jpeg|webp)$/i, ".png");

  return [
    {
      type: "jpg",
      url: original,
    },
    {
      type: "png",
      url: png,
    },
  ];
}
