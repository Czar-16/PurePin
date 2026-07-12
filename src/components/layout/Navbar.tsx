import Image from "next/image";

export default function Navbar() {
  return (
    // TODO: redesign the logo and the navbar.

    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0a0a]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/Plogo2.png"
            alt="PurePin"
            width={36}
            height={36}
            priority
          />

          <span className="text-xl font-bold tracking-tight text-white">
            PurePin
          </span>
        </div>
      </div>
    </header>
  );
}
