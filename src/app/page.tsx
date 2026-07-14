"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Home/Hero";
import UrlInput from "@/components/Home/UrlInput";
import Features from "@/components/Home/Features";
import ResultGrid from "@/components/Home/ResultGrid";
import HowItWorks from "@/components/Home/HowItWorks";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { GeneratedImageUrl } from "@/types";
import { pinterestUrlSchema } from "@/lib/validation";
import { generateOriginalUrls } from "@/lib/pinterest";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<GeneratedImageUrl[]>([]);
  const [error, setError] = useState("");

  const handleGenerate = () => {
    setError("");
    const result = pinterestUrlSchema.safeParse(url);
    if (!result.success) {
      setImages([]);
      setError(result.error.issues[0].message);
      return;
    }
    const generatedImages = generateOriginalUrls(result.data);
    console.log(generatedImages);
    setImages(generatedImages);
    console.log(url);
  };
  return (
    <>
      {/* TODO: redesign the logo and the navbar. */}
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col">
        <Hero />

        <UrlInput
          url={url}
          setUrl={setUrl}
          onGenerate={handleGenerate}
          loading={loading}
        />

        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}

        <Features />

        <ResultGrid />
        <Separator className="my-20 bg-red-950/60" />

        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
