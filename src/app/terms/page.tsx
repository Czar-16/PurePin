// src/app/terms/page.tsx

import Image from "next/image";

export default function TermsOfService() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
        Terms of Service
      </h1>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          src="/terms.png"
          alt="Terms of Service"
          width={1600}
          height={2000}
          className="h-auto w-full"
        />
      </div>
    </main>
  );
}
