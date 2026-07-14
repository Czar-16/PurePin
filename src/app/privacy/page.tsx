// src/app/privacy/page.tsx

import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
        Privacy Policy
      </h1>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          src="/terms.png"
          alt="Privacy Policy"
          width={1600}
          height={2000}
          className="h-auto w-full"
        />
      </div>
    </main>
  );
}
