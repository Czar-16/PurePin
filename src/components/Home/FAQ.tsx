import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How to download Pinterest images in high resolution?",
    answer:
      'Just right-click the image and select "Copy image address", paste it into the input field above, and click "Generate HQ Images." PurePin fetches the original, uncompressed version and gives you a direct download button — no extra steps needed.',
  },
  {
    question: "What image formats are supported?",
    answer:
      "PurePin supports JPG and PNG, the two formats Pinterest images are typically stored in. Our tool automatically detects which original format is available for your image and serves that version.",
  },
  {
    question: "Is it free to download Pinterest photos?",
    answer:
      "Yes, completely free. There's no signup, no watermark, and no hidden limits — just paste a link and download.",
  },
  {
    question: "Can I download images on my mobile device?",
    answer:
      "Yes. PurePin works entirely in your browser, so it works the same on mobile, tablet, or desktop. Open Pinterest.com in Chrome or any other browser of your choice, switch to desktop mode, right-click the image, copy the image address, and paste it here.",
  },
  {
    question: "Do I need a Pinterest account to download images?",
    answer:
      "No account needed — neither for Pinterest nor for PurePin. You only need the public image address, and our tool handles the rest.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto mt-16 mb-16 w-full max-w-3xl px-4 sm:mt-24 sm:mb-24 sm:px-6 lg:mt-28 scroll-mt-24"
    >
      <div className="mb-6 text-center sm:mb-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Pinterest Image Downloader FAQ
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:mt-3 sm:text-base">
          Commonly asked questions about our Pinterest image saving tool.
        </p>
      </div>

      <Accordion multiple={false} className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="rounded-xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-colors hover:border-red-600/40 data-[state=open]:border-red-600/50 sm:px-6"
          >
            <AccordionTrigger className="py-4 text-left text-sm font-semibold text-white hover:no-underline sm:py-5 sm:text-base cursor-pointer">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-6 text-zinc-400 sm:pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
