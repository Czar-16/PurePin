import { ImageOff } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="mx-auto mt-20 w-full max-w-2xl rounded-2xl border border-red-900/40 bg-white/5 p-10 text-center backdrop-blur">
      <ImageOff className="mx-auto mb-4 h-12 w-12 text-red-500" />

      <h2 className="text-2xl font-bold text-white">
        Original Image Not Found
      </h2>

      <p className="mt-3 text-gray-400">
        This Pinterest image doesn't have an original version available. Try
        another Pinterest image.
      </p>
    </section>
  );
}
