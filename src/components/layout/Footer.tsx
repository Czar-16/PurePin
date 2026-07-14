// src/components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

const links = {
  product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-red-950/40 bg-[#0d0a0a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Plogo2.png" alt="PurePin" width={32} height={32} />
              <span className="text-lg font-bold tracking-tight text-white">
                Pure<span className="text-red-500">Pin</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Convert Pinterest image URLs into the highest quality version
              instantly. No ads, no login — just fast downloads.
            </p>

            <Link
              href="https://github.com/Czar-16/PurePin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400 transition-colors hover:border-red-600/50 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              Leave a ⭐ on Github
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} PurePin. All rights reserved.
          </p>

          <p className="text-xs text-zinc-500">
            Not affiliated with Pinterest, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
