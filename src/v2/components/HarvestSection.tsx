export default function HarvestSection() {
  const sourcingPoints = [
    {
      title: "ETHICALLY SOURCED",
      body: "Selected with respect for quality, transparency, and the growers behind each harvest.",
    },
    {
      title: "SMALL-FARM FOCUSED",
      body: "Coffee shaped by the land, the people, and generations of growing experience.",
    },
    {
      title: "ROASTED IN SMALL BATCHES",
      body: "Roasted to order in controlled batches for freshness and consistency.",
    },
  ];

  const origins = [
    "ETHIOPIA",
    "COLOMBIA",
    "INDONESIA",
    "EL SALVADOR",
    "BRAZIL",
    "GUATEMALA",
  ];

  return (
    <section className="relative overflow-hidden bg-[#061524] text-[#E6DCC8]">
      {/* FARM BACKGROUND */}
      <img
        src="/farm1-web.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center brightness-[0.52] saturate-[0.85]"
      />

      {/* WARM EARTH TONE */}
      <div className="pointer-events-none absolute inset-0 bg-[#21170F]/38" />

      {/* TRANSITION FROM ROASTING SECTION */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061524]/95 via-[#061524]/30 via-[24%] to-transparent to-[58%]" />

      {/* TEXT CONTRAST */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-[#071421]/15 to-[#071421]/40" />

      {/* EXTRA DARKENING ON TEXT SIDE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#061524]/48" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-7 px-5 py-8 md:px-8 lg:grid-cols-[48%_52%] lg:items-center lg:gap-10 lg:py-10">
        {/* LEFT PHOTO */}
        <div className="relative overflow-hidden border border-[#C08C45]/40 p-[5px]">
          <div className="relative aspect-[1.18/1] overflow-hidden">
            <img
              src="/hands-beans.jpg"
              alt="Coffee farmer holding freshly harvested coffee cherries"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061524]/25 via-transparent to-transparent" />
          </div>
        </div>

        {/* RIGHT STORY */}
        <div className="lg:pr-3">
          <div className="text-[0.65rem] font-bold tracking-[0.27em] text-[#C08C45]">
            BEFORE THE ROAST
          </div>

          <h2
            className="mt-3 text-[2.55rem] font-semibold leading-[0.98] text-[#E9E0CF] sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.55rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            THE STORY BEHIND
            <span className="mt-1 block text-[#B9833F]">THE HARVEST.</span>
          </h2>

          <div className="mt-4 h-px w-full bg-[#C08C45]/45" />

          <p
            className="mt-4 max-w-[610px] text-[1.15rem] italic leading-[1.42] text-[#C99850] lg:text-[1.24rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Before the roast, before the bag, before the cup, there is the land
            and the people who work it.
          </p>

          <p className="mt-3 max-w-[630px] text-[0.86rem] leading-[1.55] text-[#D2CCC2]">
            We source coffee from regions known for quality, character, and
            craft. Every coffee begins with the work of growers whose experience
            and care shape what ultimately reaches your cup.
          </p>

          {/* SOURCING POINTS */}
          <div className="mt-5 border-t border-[#C08C45]/40 pt-4">
            <div className="mb-3 text-[0.64rem] font-bold tracking-[0.24em] text-[#C08C45]">
              FROM FARM TO ROASTER
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
              {sourcingPoints.map((item, index) => (
                <div
                  key={item.title}
                  className={`sm:px-4 ${
                    index === 0
                      ? "sm:pl-0"
                      : "sm:border-l sm:border-[#C08C45]/35"
                  }`}
                >
                  <div className="text-[0.63rem] font-bold tracking-[0.08em] text-[#C08C45]">
                    {item.title}
                  </div>

                  <p className="mt-1.5 text-[0.7rem] leading-[1.4] text-[#CFC8BD]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ORIGINS */}
          <div className="mt-5 border-t border-[#C08C45]/40 pt-3.5">
            <div className="text-[0.63rem] font-bold tracking-[0.23em] text-[#C08C45]">
              CORE ORIGINS
            </div>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
              {origins.map((origin, index) => (
                <div key={origin} className="flex items-center">
                  <span className="text-[0.69rem] tracking-[0.09em] text-[#E0D8CB]">
                    {origin}
                  </span>

                  {index < origins.length - 1 && (
                    <span className="ml-3 hidden text-[#C08C45]/70 sm:inline">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
