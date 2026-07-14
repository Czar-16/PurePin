import {
  MousePointerClick,
  Copy,
  ClipboardPaste,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: MousePointerClick,
    title: "Right-Click the Image",
    description: "Open the Pinterest image and right-click on it.",
  },
  {
    icon: Copy,
    title: "Copy Image Address",
    description: 'Select "Copy image address" from the menu.',
  },
  {
    icon: ClipboardPaste,
    title: "Paste Into PurePin",
    description: "Paste the link into the input field and generate.",
  },
  {
    icon: Download,
    title: "Download",
    description: "Preview the highest quality image and download it instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto mt-28 mb-24 w-full max-w-6xl px-4 scroll-mt-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          How it works
        </h2>

        <p className="mt-4 text-zinc-400">
          Three simple steps to get the highest quality Pinterest image.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.title}
              className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-600/60 hover:shadow-lg hover:shadow-red-950/40"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600/15">
                  <Icon className="h-7 w-7 text-red-500" />
                </div>

                <span className="mb-2 text-sm font-medium text-red-400">
                  Step {index + 1}
                </span>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
