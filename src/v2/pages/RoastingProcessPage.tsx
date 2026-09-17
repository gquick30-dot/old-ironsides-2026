import { Link } from "react-router-dom";

const roastFacts = [
  {
    number: "01",
    title: "ROAST DAY",
    body: "Coffee is roasted every Monday and Thursday in small batches, with each roast handled and checked for consistency.",
  },
  {
    number: "02",
    title: "WHY TWICE WEEKLY",
    body: "Two roast days keep inventory moving and shorten the time between the roaster and your cup.",
  },
  {
    number: "03",
    title: "RESTED BRIEFLY",
    body: "Freshly roasted coffee gets a short rest for flavor development before it is packed and prepared to ship.",
  },
  {
    number: "04",
    title: "NO SHELF COFFEE",
    body: "The goal is not months of warehouse inventory. The goal is coffee roasted around real demand.",
  },
];

const process = [
  ["ORDERED", "YOU PLACE YOUR ORDER"],
  ["ROASTED", "MONDAY / THURSDAY"],
  ["RESTED", "BRIEFLY"],
  ["PACKED", "BY HAND"],
  ["SHIPPED", "FRESH"],
];

export default function RoastingProcessPage() {
  return (
    <main className="bg-[#F3EBDD] text-[#071421]">
      {/* ================= HERO ================= */}
      <section className="px-3 pt-3 md:px-5">
        <div className="mx-auto grid max-w-[1580px] overflow-hidden border border-[#B78A56]/45 bg-[#F7F0E5] lg:grid-cols-[39%_61%]">
          {/* COPY */}
          <div className="flex items-center px-7 py-7 md:px-9 lg:px-10 xl:px-12">
            <div>
              <div className="text-[0.66rem] font-bold tracking-[0.24em] text-[#A36F2C]">
                HOW WE ROAST
              </div>

              <h1
                className="mt-2 text-[2.65rem] font-semibold leading-[0.96] sm:text-[3rem] lg:text-[3.15rem] xl:text-[3.5rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                REAL ROASTERY.
                <span className="block">REAL ROAST DAYS.</span>
              </h1>

              <div
                className="mt-3 text-[1.55rem] leading-[1.08] text-[#A36F2C] lg:text-[1.8rem] xl:text-[2rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ROASTED TWICE WEEKLY.
                <span className="block">SHIPPED AT PEAK FRESHNESS.</span>
              </div>

              <div className="mt-4 h-px w-full max-w-[430px] bg-[#C08C45]/60" />

              <p className="mt-4 max-w-[520px] text-[0.86rem] leading-[1.55] text-[#30383E]">
                Our coffee is roasted in small batches every Monday and
                Thursday, packed shortly after roasting, and shipped within
                days.
              </p>

              <p className="mt-2 text-[0.86rem] font-semibold">
                No warehouse. No shelves. Just fresh coffee.
              </p>
            </div>
          </div>

          {/* PHOTO */}
          <div className="relative min-h-[320px] sm:min-h-[390px] lg:min-h-[385px]">
            <img
              src="/roaster-site2.jpg"
              alt="Coffee roasting facility"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ================= NAVY FACT BAND ================= */}
      <section className="px-3 md:px-5">
        <div className="mx-auto max-w-[1580px] bg-[#061524] text-[#E6DCC8]">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {roastFacts.map((item, index) => (
              <div
                key={item.title}
                className={`relative px-6 py-5 lg:px-7 ${
                  index > 0
                    ? "border-t border-[#C08C45]/25 md:border-t-0 xl:border-l"
                    : ""
                } ${
                  index === 2
                    ? "md:border-t md:border-[#C08C45]/25 xl:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[0.62rem] font-bold tracking-[0.16em] text-[#C08C45]">
                    {item.number}
                  </span>

                  <h2
                    className="text-[0.9rem] font-semibold tracking-[0.04em]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.title}
                  </h2>
                </div>

                <div className="mt-2 h-px w-12 bg-[#C08C45]" />

                <p className="mt-3 text-[0.76rem] leading-[1.5] text-[#CEC6BA]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* PROCESS STRIP */}
          <div className="border-t border-[#C08C45]/35 px-5 py-4">
            <div className="bg-[#F4EBDD] px-5 py-4 text-[#071421]">
              <div className="grid gap-4 text-center sm:grid-cols-5">
                {process.map(([title, sub], index) => (
                  <div key={title} className="relative">
                    <div
                      className="text-[0.88rem] font-semibold"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {title}
                    </div>

                    <div className="mt-1 text-[0.6rem] font-bold tracking-[0.13em] text-[#A36F2C]">
                      {sub}
                    </div>

                    {index < process.length - 1 && (
                      <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg text-[#071421]/45 sm:block">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOWER FEATURE ================= */}
      <section className="px-3 pb-3 pt-3 md:px-5">
        <div className="mx-auto grid max-w-[1580px] overflow-hidden border border-[#B78A56]/45 bg-[#F7F0E5] lg:grid-cols-[0.9fr_0.9fr_1.2fr]">
          {/* QUOTE */}
          <div className="flex items-center px-7 py-6 lg:px-8">
            <div>
              <div className="text-[2.8rem] leading-[0.7] text-[#A36F2C]">
                “
              </div>

              <blockquote
                className="mt-1 text-[1.15rem] font-semibold leading-[1.23]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                WE DO NOT ROAST
                <span className="block">FOR SHELVES.</span>
                <span className="mt-1 block text-[#A36F2C]">WE ROAST FOR</span>
                <span className="block text-[#A36F2C]">
                  THE PEOPLE DRINKING IT.
                </span>
              </blockquote>

              <div className="mt-4 h-px bg-[#C08C45]/55" />

              <p className="mt-3 text-[0.75rem] leading-[1.5] text-[#3D4144]">
                Freshness comes from shortening the distance between roast day
                and your morning cup.
              </p>
            </div>
          </div>

          {/* PHOTO */}
          <div className="relative min-h-[240px] lg:min-h-[265px]">
            <img
              src="/roaster.jpg"
              alt="Freshly roasted coffee cooling"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* DETAILS */}
          <div className="bg-[#EEE3D2] px-7 py-6 lg:px-8">
            <div className="text-[0.62rem] font-bold tracking-[0.22em] text-[#A36F2C]">
              INSIDE THE ROASTERY
            </div>

            <h2
              className="mt-1 text-[1.35rem] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              BUILT AROUND THE ROAST DAY.
            </h2>

            <div className="mt-3 h-px bg-[#C08C45]/55" />

            <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                [
                  "SMALL TEAM",
                  "A focused crew responsible for the details from roast to pack.",
                ],
                [
                  "PRO EQUIPMENT",
                  "Commercial roasting equipment, precision scales, and proper production controls.",
                ],
                [
                  "HAND PACKED",
                  "Each bag is weighed, sealed, and prepared shortly after roasting.",
                ],
                [
                  "QUALITY CONTROL",
                  "Roasts are checked for consistency and flavor before they leave.",
                ],
              ].map(([title, body]) => (
                <div key={title}>
                  <div className="text-[0.66rem] font-bold tracking-[0.1em] text-[#8F5A24]">
                    {title}
                  </div>

                  <p className="mt-1 text-[0.72rem] leading-[1.45] text-[#363B3E]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#061524] px-6 py-4">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="text-[1rem] tracking-[0.05em] text-[#C08C45]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            FRESH COFFEE. ROASTED RIGHT. SHIPPED FAST.
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/store"
              className="inline-flex min-w-[205px] items-center justify-center bg-[#B86618] px-7 py-3 text-[0.7rem] font-bold tracking-[0.08em] text-white transition hover:bg-[#C97824]"
            >
              SHOP FRESH COFFEE
            </Link>

            <Link
              to="/roast/armada-sample-pack"
              className="inline-flex min-w-[205px] items-center justify-center border border-[#C08C45] px-7 py-3 text-[0.7rem] font-bold tracking-[0.08em] text-[#E6DCC8] transition hover:bg-[#C08C45] hover:text-black"
            >
              START WITH A SAMPLE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
