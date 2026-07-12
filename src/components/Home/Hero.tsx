import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          Free · No login · No watermarks
        </span>

        <h1
          className={`${sora.className} text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl`}
        >
          Upgrade any pin
          <br />
          to{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            full quality
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg">
          Convert Pinterest image URLs into the highest quality version
          instantly. No ads, no login &mdash; just fast downloads.
        </p>
      </div>
    </section>
  );
}
