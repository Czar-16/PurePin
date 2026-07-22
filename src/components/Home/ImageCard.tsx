"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GeneratedImage } from "@/types";

interface ImageCardProps {
  image: GeneratedImage;
}

export default function ImageCard({ image }: ImageCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const getImageId = (url: string) => {
    const parts = url.split("/");
    const filename = parts[parts.length - 1]; // abcdef1234567890.jpg
    return filename.split(".")[0]; // abcdef1234567890
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);

    try {
      const response = await axios.get("/api/download", {
        params: {
          url: image.url,
        },
        responseType: "blob",
        onDownloadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setProgress(percent);
          } else {
            // total size unknown (no Content-Length header) — show indeterminate progress
            setProgress((prev) => Math.min(prev + 10, 90));
          }
        },
      });

      const blob = response.data;
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      const imageId = getImageId(image.url);
      link.href = objectUrl;
      link.download = `purepin-${imageId}.${image.format}`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(objectUrl);
      setProgress(100);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      // brief delay so the user sees the 100% state before it resets
      setTimeout(() => {
        setIsDownloading(false);
        setProgress(0);
      }, 400);
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
          {image.format.toUpperCase()} - Max Resolution Available.
        </h3>

        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full bg-red-600 text-white hover:bg-red-700 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isDownloading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Downloading... {progress}%
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download Original
            </>
          )}
        </Button>

        {isDownloading && (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-red-600 transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
