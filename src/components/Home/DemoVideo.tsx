export default function DemoVideo() {
  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-4 sm:mt-24 sm:px-6">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          See It In Action
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:mt-3 sm:text-base">
          A quick walkthrough of how PurePin works.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        {/* Desktop demo */}
        <div>
          <h3 className="mb-3 text-center text-sm font-semibold text-red-400 sm:text-base">
            On Desktop
          </h3>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#141010] shadow-lg shadow-red-950/40">
            {/* browser chrome bar */}
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />

              <div className="ml-3 flex-1 truncate rounded-md bg-black/30 px-3 py-1 text-[10px] text-zinc-500 sm:text-xs">
                purepin.app
              </div>
            </div>

            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                // put video ID
                // https://www.youtube.com/embed/VIDEO_ID
                src="https://www.youtube.com/embed/j6Vn0NGLl6M"
                title="PurePin Desktop Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Mobile demo */}
        <div>
          <h3 className="mb-3 text-center text-sm font-semibold text-red-400 sm:text-base">
            On Mobile
          </h3>

          <div className="mx-auto w-full max-w-[300px] rounded-[2rem] border-4 border-white/10 bg-black p-2 shadow-lg shadow-red-950/40 sm:max-w-[320px]">
            <div className="aspect-[9/16] max-h-[560px] overflow-hidden rounded-[1.5rem]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/j6Vn0NGLl6M"
                title="PurePin Mobile Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
