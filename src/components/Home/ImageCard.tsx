"use client";

import Image from "next/image";
import axios from "axios";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GeneratedImage } from "@/types";

interface ImageCardProps {
  image: GeneratedImage;
}

export default function ImageCard({ image }: ImageCardProps) {
  const handleDownload = async () => {
    try {
      const response = await axios.get("/api/download", {
        params: {
          url: image.url,
        },
        responseType: "blob",
      });

      const blob = response.data;
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = objectUrl;
      link.download = `purepin.${image.format}`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-600/60 hover:shadow-lg hover:shadow-red-950/40">
      <div className="relative flex max-h-[70vh] w-full items-center justify-center bg-black/20">
        <Image
          src={image.url}
          alt={`Pinterest Original ${image.format.toUpperCase()}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70vh] w-full object-contain"
          unoptimized
        />
      </div>

      <div className="space-y-4 p-5">
        <h3 className="text-lg font-semibold text-white">
          {/* {image.format.toUpperCase()} */}
          {image.format.toUpperCase()} - Max Resolution Available.
        </h3>

        <Button
          onClick={handleDownload}
          className="w-full bg-red-600 text-white hover:bg-red-700 cursor-pointer"
        >
          <Download className="mr-2 h-4 w-4 " />
          Download Original
        </Button>
      </div>
    </div>
  );
}
