import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Home/Hero";
import UrlInput from "@/components/Home/UrlInput";
import Features from "@/components/Home/Features";
import ResultGrid from "@/components/Home/ResultGrid";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6">
        <Hero />

        <UrlInput />

        <Features />

        <ResultGrid />

        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}
