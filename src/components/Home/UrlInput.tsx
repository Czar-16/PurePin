"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clipboard, Loader2, Info } from "lucide-react";

interface UrlInputProps {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  onGenerate: () => void;
  loading: boolean;
}

export default function UrlInput({
  url,
  setUrl,
  onGenerate,
  loading,
}: UrlInputProps) {
  // const handlePaste = async () => {
  //   try {
  //     const text = await navigator.clipboard.readText();
  //     setUrl(text);
  //   } catch (err) {
  //     console.error("Clipboard read failed:", err);
  //   }
  // };

  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-red-950/40 backdrop-blur-sm">
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Input */}
          <div className="relative flex-1">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste Pinterest image address..."
              className="h-11 border-0 bg-transparent pr-12 text-sm text-white placeholder:text-gray-500 shadow-none focus-visible:ring-1 focus-visible:ring-red-400 sm:h-12 sm:text-base"
            />
            <button
              type="button"
              // onClick={handlePaste}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-red-500"
            >
              <Clipboard size={20} />
            </button>
          </div>
          {/* Generate Button */}
          <Button
            onClick={onGenerate}
            disabled={loading || !url.trim()}
            className="h-11 w-full rounded-xl bg-red-600 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 disabled:opacity-50 sm:h-12 sm:w-auto sm:px-8 sm:text-base cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate HQ Images"
            )}
          </Button>
        </div>
      </div>

      {/* Info note */}
      <div className="mt-3 flex items-start justify-center gap-2 px-2 text-center sm:mt-4">
        <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-red-400 sm:h-4 sm:w-4" />
        <p className="text-xs text-zinc-500 sm:text-sm">
          Make sure to copy the{" "}
          <span className="font-medium text-zinc-300">image address</span>{" "}
          (right-click the image → &quot;Copy image address&quot;) — not the
          Pinterest pin URL.
        </p>
      </div>
    </section>
  );
}
