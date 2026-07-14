"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/Home/Hero";
import UrlInput from "@/components/Home/UrlInput";
import Features from "@/components/Home/Features";
import ResultGrid from "@/components/Home/ResultGrid";
import HowItWorks from "@/components/Home/HowItWorks";

import { Separator } from "@/components/ui/separator";

import { GeneratedImage } from "@/types";
import { pinterestUrlSchema } from "@/lib/validation";
import axios from "axios";
import AboutSection from "@/components/Home/AboutSection";
import DeviceGuide from "@/components/Home/DeviceGuide";
import FAQ from "@/components/Home/FAQ";
import DemoVideo from "@/components/Home/DemoVideo";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setHasSearched(true);

    const result = pinterestUrlSchema.safeParse(url);

    if (!result.success) {
      setImages([]);
      setError(result.error.issues[0].message);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/resolve", {
        url: result.data,
      });

      setImages(response.data);
    } catch {
      setImages([]);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

        {/* <ResultGrid images={images} hasSearched={hasSearched} /> */}
        <ResultGrid
          images={images}
          hasSearched={hasSearched}
          loading={loading}
        />
        <Separator className="my-15 bg-red-950/60" />

        <Features />

        <Separator className="my-15 bg-red-950/60" />

        <HowItWorks />

        <Separator className="my-15 bg-red-950/60" />

        <DemoVideo />
        <Separator className="my-15 bg-red-950/60" />

        <AboutSection />

        <Separator className="my-15 bg-red-950/60" />

        <DeviceGuide />

        <Separator className="my-15 bg-red-950/60" />

        <FAQ />
        <Separator className="my-15 bg-red-950/60" />
      </main>

      <Footer />
    </>
  );
}
