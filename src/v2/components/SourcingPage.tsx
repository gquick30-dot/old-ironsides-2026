import { Link } from "react-router-dom";

export default function SourcingPage() {
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
      body: "Once it reaches us, the coffee is roasted in controlled batches for freshness and consistency.",
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
    <main className="bg-[#F4EBDD] text-[#071421]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#061524] text-[#E6DCC8]">
        <img
          src="/farm1-web.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center brightness-[0.48] saturate-[0.82]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[#21170F]/35" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061524]/92 via-[#061524]/58 to-[#061524]/20" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061524]/72 via-transparent to-[#061524]/80" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-12 pt-14 md:px-8 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20">
          <div className="max-w-[820px]">
            <div className="text-[0.65rem] font-bold tracking-[0.28em] text-[#C08C45]">
              BEFORE THE ROAST
            </div>

            <div className="mt-3 h-[2px] w-12 bg-[#C08C45]" />

            <h1
              className="mt-5 text-[2.7rem] font-semibold leading-[0.96] text-[#E9E0CF] sm:text-[3.5rem] lg:text-[4.4rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              THE STORY BEHIND
              <span className="mt-2 block text-[#C08C45]">THE HARVEST.</span>
            </h1>

            <p
              className="mt-6 max-w-[720px] text-[1.15rem] italic leading-[1.5] text-[#D5B47F] sm:text-[1.3rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Before the roast, before the bag, before the cup, there is the
              land and the people who work it.
            </p>

            <p className="mt-5 max-w-[700px] text-[0.94rem] leading-[1.65] text-[#DDD6CB] sm:text-[1rem]">
              We source coffee from regions known for quality, character, and
              craft. Every coffee begins with growers whose experience,
              environment, and care shape what ultimately reaches your cup.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PEOPLE + HARVEST
      ========================================================== */}
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1350px] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          {/* IMAGE */}
          <div className="relative overflow-hidden border border-[#C08C45]/40 bg-[#061524] p-[5px]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/hands-beans.jpg"
                alt="Coffee farmer holding freshly harvested coffee cherries"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061524]/28 via-transparent to-transparent" />
            </div>
          </div>

          {/* COPY */}
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.26em] text-[#A36F2C]">
              WHERE IT BEGINS
            </div>

            <h2
              className="mt-3 text-[2rem] font-semibold leading-[1.02] text-[#071F35] sm:text-[2.5rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              GREAT COFFEE STARTS
              <span className="mt-1 block text-[#A36F2C]">
                LONG BEFORE THE ROASTER.
              </span>
            </h2>

            <p className="mt-5 text-[0.94rem] leading-[1.65] text-[#344454]">
              Coffee is agricultural. Soil, elevation, climate, rainfall,
              processing, and the decisions made by growers all influence what
              eventually ends up in the cup.
            </p>

            <p className="mt-4 text-[0.94rem] leading-[1.65] text-[#344454]">
              Our job begins with choosing coffees that already have something
              worth preserving. Roasting does not create quality from nothing.
              It should reveal what was already built at the farm.
            </p>

            <div className="mt-6 border-l-2 border-[#C08C45] bg-[#EEE3D3] px-5 py-4">
              <div className="text-[0.63rem] font-bold tracking-[0.2em] text-[#A36F2C]">
                OUR STANDARD
              </div>

              <p className="mt-2 text-[0.87rem] leading-[1.55] text-[#344454]">
                Start with good coffee. Treat it with respect. Roast it with
                purpose. Get it to the customer while it is fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOURCING PRINCIPLES
      ========================================================== */}
      <section className="bg-[#071421] px-5 py-10 text-[#E6DCC8] md:px-8 md:py-12">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-[720px]">
            <div className="text-[0.64rem] font-bold tracking-[0.26em] text-[#C08C45]">
              FROM FARM TO ROASTER
            </div>

            <h2
              className="mt-3 text-[2rem] font-semibold leading-[1.02] sm:text-[2.5rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              SOURCED WITH PURPOSE.
            </h2>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {sourcingPoints.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#C08C45]/35 bg-[#0A1C2C] px-5 py-5"
              >
                <div className="text-[0.58rem] font-bold tracking-[0.2em] text-[#C08C45]">
                  0{index + 1}
                </div>

                <h3
                  className="mt-3 text-[1rem] text-[#E9E0CF]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-[0.82rem] leading-[1.55] text-[#CFC8BD]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ORIGINS
      ========================================================== */}
      <section className="px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="text-[0.64rem] font-bold tracking-[0.26em] text-[#A36F2C]">
            CORE ORIGINS
          </div>

          <h2
            className="mt-3 text-[2rem] font-semibold leading-[1.02] text-[#071F35] sm:text-[2.4rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            COFFEE FROM DISTINCT REGIONS.
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[0.9rem] leading-[1.6] text-[#45515D]">
            Different regions bring different characteristics to the cup.
            Origin, processing, elevation, and growing conditions all contribute
            to the final flavor.
          </p>

          <div className="mx-auto mt-7 grid max-w-[900px] grid-cols-2 border border-[#C08C45]/35 sm:grid-cols-3">
            {origins.map((origin, index) => (
              <div
                key={origin}
                className={`flex min-h-[72px] items-center justify-center px-3 text-[0.7rem] font-bold tracking-[0.12em] text-[#7A5526]
                ${index % 2 !== 0 ? "border-l border-[#C08C45]/25" : ""}
                sm:border-l
                sm:first:border-l-0`}
              >
                {origin}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BACK TO THE COFFEE
      ========================================================== */}
      <section className="border-t border-[#C08C45]/35 bg-[#EEE3D3] px-5 py-9 md:px-8 md:py-11">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <div className="text-[0.63rem] font-bold tracking-[0.25em] text-[#A36F2C]">
            FROM ORIGIN TO CUP
          </div>

          <h2
            className="mt-3 text-[1.8rem] font-semibold leading-[1.05] text-[#071F35] sm:text-[2.2rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            FIND THE ROAST THAT FITS YOUR CUP.
          </h2>

          <p className="mt-3 max-w-[600px] text-[0.88rem] leading-[1.55] text-[#45515D]">
            Explore the fleet and see how different origins, roast profiles, and
            flavor notes come together.
          </p>

          <div className="mt-6 flex w-full max-w-[500px] flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/store"
              className="inline-flex h-[48px] items-center justify-center bg-[#A8732E] px-7 text-[0.72rem] font-bold tracking-[0.11em] text-white transition hover:bg-[#B9833F]"
            >
              SHOP THE FLEET
            </Link>

            <Link
              to="/roast/armada-sample-pack"
              className="inline-flex h-[48px] items-center justify-center border border-[#071F35] px-7 text-[0.72rem] font-bold tracking-[0.1em] text-[#071F35] transition hover:bg-white/60"
            >
              TRY A SAMPLE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}