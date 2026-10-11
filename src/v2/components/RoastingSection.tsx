import { Link } from "react-router-dom";

export default function RoastingSection() {
  return (
    <section className="relative overflow-hidden bg-[#061524] px-5 py-8 text-[#E6DCC8] md:px-8 md:py-9 xl:py-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-10">
          {/* LEFT SIDE */}
          <div className="flex h-full flex-col justify-center lg:pr-2">
            <div className="text-[0.68rem] font-bold tracking-[0.28em] text-[#C08C45]">
              FROM THE ROASTER
            </div>

            <div className="mt-2.5 h-[2px] w-12 bg-[#C08C45]" />

            <h2
              className="mt-4 text-[2.35rem] font-semibold leading-[0.98] text-[#E6DCC8] sm:text-[2.7rem] lg:text-[2.95rem] xl:text-[3.15rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Roasted to order.
            </h2>

            <div
              className="mt-1 text-[2rem] italic leading-[1.02] text-[#C08C45] sm:text-[2.25rem] lg:text-[2.4rem] xl:text-[2.55rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Timed to land fresh.
            </div>

            <p className="mt-4 max-w-[560px] text-[0.9rem] leading-[1.55] text-[#D8D0C4]">
              We roast every Monday and Thursday in small batches, then allow
              the coffee time to rest before shipping it closer to peak
              freshness.
            </p>

            {/* ORDER / ROAST / SHIP */}
            <div className="mt-5 grid border border-[#C08C45]/55 bg-[#F4EBDD] text-[#03111d] sm:grid-cols-3">
              <div className="px-4 py-3 sm:border-r sm:border-[#C08C45]/35">
                <div className="text-[0.64rem] font-bold tracking-[0.15em] text-[#A36F2C]">
                  01&nbsp;&nbsp; ORDER
                </div>

                <p className="mt-2 text-[0.76rem] leading-[1.4]">
                  Your order starts the process.
                </p>
              </div>

              <div className="border-t border-[#C08C45]/35 px-4 py-3 sm:border-r sm:border-t-0">
                <div className="text-[0.64rem] font-bold tracking-[0.15em] text-[#A36F2C]">
                  02&nbsp;&nbsp; ROAST
                </div>

                <p className="mt-2 text-[0.76rem] leading-[1.4]">
                  Roasted Monday or Thursday.
                </p>
              </div>

              <div className="border-t border-[#C08C45]/35 px-4 py-3 sm:border-t-0">
                <div className="text-[0.64rem] font-bold tracking-[0.15em] text-[#A36F2C]">
                  03&nbsp;&nbsp; SHIP
                </div>

                <p className="mt-2 text-[0.76rem] leading-[1.4]">
                  Rested, packed, and sent fresh.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Link
                to="/roasting-process"
                className="inline-flex w-fit items-center border border-[#C08C45] px-5 py-2.5 text-[0.64rem] font-bold tracking-[0.12em] text-[#E6C07F] transition hover:bg-[#C08C45] hover:text-black"
              >
                LEARN HOW WE ROAST
                <span className="ml-3">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex h-full flex-col overflow-hidden border border-[#C08C45]/60 bg-[#04111D] shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
            <div className="relative min-h-[250px] flex-1 sm:min-h-[280px] lg:min-h-0">
              <img
                src="/roaster.jpg"
                alt="Coffee roasting in the cooling tray"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="grid shrink-0 grid-cols-2 bg-[#04111D] text-[#E6DCC8]">
              <div className="border-r border-[#C08C45]/45 px-5 py-3 text-center">
                <div
                  className="text-[1.35rem] sm:text-[1.5rem]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  MONDAY
                </div>

                <div className="mt-1 text-[0.58rem] font-bold tracking-[0.2em] text-[#C08C45]">
                  ROAST DAY
                </div>
              </div>

              <div className="px-5 py-3 text-center">
                <div
                  className="text-[1.35rem] sm:text-[1.5rem]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  THURSDAY
                </div>

                <div className="mt-1 text-[0.58rem] font-bold tracking-[0.2em] text-[#C08C45]">
                  ROAST DAY
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-[#C08C45]/45 bg-[#F4EBDD] px-5 py-2.5 text-center">
              <div className="text-[0.58rem] font-bold tracking-[0.17em] text-[#A36F2C]">
                ROASTED TO ORDER
                <span className="mx-3 text-[#B89A73]">|</span>
                TIMED FOR PEAK FRESHNESS
              </div>
            </div>
          </div>
        </div>

        {/* SOURCING TEASER */}
        <div className="mt-8 border-t border-[#C08C45]/35 pt-6 md:mt-9 md:pt-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[760px]">
              <div className="text-[0.64rem] font-bold tracking-[0.26em] text-[#C08C45]">
                BEFORE THE ROAST
              </div>

              <h3
                className="mt-2 text-[1.55rem] leading-[1.08] text-[#E6DCC8] sm:text-[1.8rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Great coffee starts at the source.
              </h3>

              <p className="mt-2 max-w-[700px] text-[0.85rem] leading-[1.5] text-[#CFC7BB]">
                Learn how we select coffee, where it comes from, and the people
                and regions behind every roast.
              </p>
            </div>

            <Link
              to="/sourcing"
              className="inline-flex h-[44px] w-fit shrink-0 items-center justify-center border border-[#C08C45] px-5 text-[0.64rem] font-bold tracking-[0.12em] text-[#E6C07F] transition hover:bg-[#C08C45] hover:text-black"
            >
              LEARN HOW WE SOURCE
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}