// src/components/Home/DeviceGuide.tsx

interface DeviceSection {
  title: string;
  steps: string[];
}

const devices: DeviceSection[] = [
  {
    title: "Download on Android",
    steps: [
      "The Pinterest app doesn't let you copy a direct image address.",
      "Open Pinterest.com in your phone's browser and switch to Desktop mode.",
      "Tap and hold the image, then select Open image in new tab.",
      "Copy the image URL from the address bar.",
      "Paste it into PurePin and tap Generate HQ Images.",
      "Tap Download to save the HD image.",
    ],
  },
  {
    title: "Download on iPhone (iOS)",
    steps: [
      "The Pinterest app doesn't let you copy a direct image address.",
      "Open Pinterest.com in Safari and switch to Desktop mode.",
      "Tap and hold the image, then select Open image in new tab.",
      "Copy the image URL from the address bar.",
      "Paste it into PurePin and tap Generate HQ Images.",
      "Tap Download to save the HD image.",
    ],
  },
  {
    title: "Download on PC (Linux/Windows)",
    steps: [
      "Go to Pinterest.com in your browser.",
      "Right-click the image and copy image address.",
      "Paste the link onto our Image Downloader page.",
      "Click Generate and preview the image.",
      "Save the crisp JPG/PNG file to your PC.",
    ],
  },
  {
    title: "Download on Mac",
    steps: [
      "Open Pinterest in your browser",
      "Select the pin and copy image address.",
      "Navigate to the PurePin downloader tool.",
      "Paste the URL and click Generate.",
      "Save the original file to your Downloads folder.",
    ],
  },
];

export default function DeviceGuide() {
  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-4 sm:mt-24 sm:px-6 lg:mt-28">
      <div className="mb-6 text-center sm:mb-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Download Pinterest Images on Any Device
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:mt-3 sm:text-base">
          Comprehensive guide for saving Pinterest photos on mobile and desktop
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {devices.map((device) => (
          <div
            key={device.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-red-600/40 sm:p-7"
          >
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">
              {device.title}
            </h3>

            <ol className="space-y-3 sm:space-y-4">
              {device.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-600/15 text-xs font-semibold text-red-400">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-zinc-400">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
