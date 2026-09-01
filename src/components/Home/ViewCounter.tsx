"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("purepin_view_counted");
    const endpoint = alreadyCounted ? "/api/views?read=true" : "/api/views";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        sessionStorage.setItem("purepin_view_counted", "1");
      })
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400">
      <Eye className="h-4 w-4" />
      <span className="hidden sm:inline">
        {count !== null ? count.toLocaleString() : "—"}
      </span>
    </div>
  );
}
