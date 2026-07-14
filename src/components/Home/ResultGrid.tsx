import { GeneratedImage } from "@/types";
import ImageCard from "./ImageCard";

interface ResultGridProps {
  images: GeneratedImage[];
}

export default function ResultGrid({ images }: ResultGridProps) {
  if (images.length === 0) return null;

  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Your Upgrade Is Ready
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {images.map((image) => (
          <ImageCard key={image.format} image={image} />
        ))}
      </div>
    </section>
  );
}
