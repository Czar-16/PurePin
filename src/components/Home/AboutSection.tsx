// src/components/Home/AboutSection.tsx

const sections = [
  {
    title: "About Pinterest Image Downloading",
    body: (
      <>
        Pinterest is a hub for high-quality visuals, from professional
        photography and artistic illustrations to informative infographics. Our{" "}
        <strong className="text-white">Pinterest image downloader</strong> is a
        specialized tool that helps you save these visual assets in their
        original resolution. Whether you are building a mood board, researching
        for a design project, or simply want to archive your favorite pins, our
        tool provides a seamless way to{" "}
        <strong className="text-white">save Pinterest images</strong> directly
        to your device.
      </>
    ),
  },
  {
    title: "Downloading Pinterest Photos in HD",
    body: (
      <>
        When you view an image on Pinterest, the platform often shows you a
        compressed version to speed up loading times. If you try to save the
        image directly through your browser, you might end up with a low-quality
        file.
        <br />
        <br />
        Our downloader bypasses these limitations by looking at the pin&apos;s
        metadata to find the direct source link for the{" "}
        <strong className="text-white">highest resolution copy</strong> of the
        photo. This makes it the go-to choice for creatives who need crisp,
        high-quality images for their work.
      </>
    ),
  },
  {
    title: "Why is high resolution important?",
    body: (
      <>
        High-quality images (HD) are essential for things like printing,
        professional presentations, or detailed design work. Our{" "}
        <strong className="text-white">Pinterest photo downloader</strong>{" "}
        ensures that every pixel is preserved, giving you the best possible
        starting point for your creative endeavors.
      </>
    ),
  },
  {
    title: "Support for JPG and PNG",
    body: (
      <>
        Pinterest creators upload their pins in various formats. Our tool
        handles them all. Whether it&apos;s a standard{" "}
        <strong className="text-white">Pinterest JPG download</strong> or a{" "}
        <strong className="text-white">Pinterest PNG download</strong>, you can
        trust that our tool will save the file correctly without any unnecessary
        conversion or quality loss.
      </>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-4 sm:mt-24 sm:px-6 lg:mt-28">
      <h2 className="mb-6 text-center text-2xl font-bold text-white sm:mb-10 sm:text-3xl md:text-4xl">
        About Pinterest Image Downloading
      </h2>

      <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:space-y-8 sm:p-8 md:p-10">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={
              index !== 0 ? "border-t border-white/10 pt-6 sm:pt-8" : undefined
            }
          >
            <h3 className="mb-2 text-base font-semibold text-red-400 sm:mb-3 sm:text-lg">
              {section.title}
            </h3>
            <p className="text-sm leading-6 text-zinc-400 sm:leading-7">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
