import { GeneratedImage } from "@/types";
import ImageCard from "./ImageCard";
import EmptyState from "./EmptyState";

interface ResultGridProps {
  images: GeneratedImage[];
  hasSearched: boolean;
  loading: boolean;
}

export default function ResultGrid({
  images,
  hasSearched,
  loading,
}: ResultGridProps) {
  // not searched yet
  if (!hasSearched) {
    return null;
  }

  // request is in-flight — don't show EmptyState yet
  if (loading) {
    return null; // or a loading skeleton, see below
  }

  // search is done but the result is empty array
  if (images.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="mx-auto mt-20 w-full max-w-4xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Your Upgrade Is Ready
      </h2>

      <div className="grid place-items-center">
        {images.map((image) => (
          <div key={image.format} className="w-full max-w-md">
            <ImageCard image={image} />
          </div>
        ))}
      </div>
    </section>
  );
}
