import { Download, ImageIcon, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate original image links instantly.",
  },
  {
    icon: ImageIcon,
    title: "Original Quality",
    description: "Access the highest resolution available.",
  },
  {
    icon: ShieldCheck,
    title: "No Login",
    description: "No signup. No tracking. Just download.",
  },
  {
    icon: Download,
    title: "One Click",
    description: "Download images with a single click.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-600/60 hover:shadow-lg hover:shadow-red-950/40"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-xl bg-red-600/15 p-3">
                  <Icon className="h-6 w-6 text-red-500" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-400">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
