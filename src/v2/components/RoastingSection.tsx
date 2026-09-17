import { Link } from "react-router-dom";

export default function RoastingSection() {
  return (
    <section className="relative overflow-hidden bg-[#061524] px-5 py-11 text-[#E6DCC8] md:px-8 md:py-13 xl:py-16">
      <div className="mx-auto grid max-w-[1500px] items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] xl:gap-12">
        {/* LEFT SIDE */}
        <div className="lg:pr-2">
          <div className="text-[0.72rem] font-bold tracking-[0.28em] text-[#C08C45]">
            FROM THE ROASTER
          </div>

          <div className="mt-3 h-[2px] w-14 bg-[#C08C45]" />

          <h2
            className="mt-5 text-[2.8rem] font-semibold leading-[0.98] text-[#E6DCC8] sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[4rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Roasted to order.
          </h2>

          <div
            className="mt-1 text-[2.45rem] italic leading-[1.02] text-[#C08C45] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.45rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Timed to land fresh.
          </div>

          <p className="mt-6 max-w-[600px] text-[0.98rem] leading-[1.75] text-[#D8D0C4] md:text-[1.03rem]">
            We roast every Monday and Thursday in small batches, allowing each
            coffee time to rest and degas. Then we ship so it arrives closer to
            peak freshness, never sitting on a shelf waiting for an order.
          </p>

          {/* ORDER / ROAST / SHIP */}
          <div className="mt-7 grid border border-[#C08C45]/55 bg-[#F4EBDD] text-[#03111d] sm:grid-cols-3">
            <div className="px-5 py-4 sm:border-r sm:border-[#C08C45]/35">
              <div className="text-[0.7rem] font-bold tracking-[0.16em] text-[#A36F2C]">
                01&nbsp;&nbsp; ORDER
              </div>

              <p className="mt-2.5 text-[0.84rem] leading-[1.5]">
                You place the order.
                <br />
                We secure your beans
                <br />
                and get to work.
              </p>
            </div>

            <div className="border-t border-[#C08C45]/35 px-5 py-4 sm:border-r sm:border-t-0">
              <div className="text-[0.7rem] font-bold tracking-[0.16em] text-[#A36F2C]">
                02&nbsp;&nbsp; ROAST
              </div>

              <p className="mt-2.5 text-[0.84rem] leading-[1.5]">
                We roast every
                <br />
                Monday and
                <br />
                Thursday.
              </p>
            </div>

            <div className="border-t border-[#C08C45]/35 px-5 py-4 sm:border-t-0">
              <div className="text-[0.7rem] font-bold tracking-[0.16em] text-[#A36F2C]">
                03&nbsp;&nbsp; SHIP
              </div>

              <p className="mt-2.5 text-[0.84rem] leading-[1.5]">
                After resting and
                <br />
                degassing, it ships
                <br />
                at peak freshness.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
            <p
              className="max-w-[390px] text-[0.95rem] italic leading-relaxed text-[#C8BCA8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Great coffee takes time, and timing matters.
            </p>

            <Link
              to="/roasting-process"
              className="inline-flex w-fit shrink-0 items-center border border-[#C08C45] px-6 py-3 text-[0.68rem] font-bold tracking-[0.12em] text-[#E6C07F] transition hover:bg-[#C08C45] hover:text-black"
            >
              LEARN MORE
              <span className="ml-4">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="overflow-hidden border border-[#C08C45]/60 bg-[#04111D] shadow-[0_20px_45px_rgba(0,0,0,0.28)] lg:scale-[1.025]">
          {/* PHOTO */}
          <div className="relative h-[380px] sm:h-[450px] lg:h-[480px] xl:h-[525px]">
            <img
              src="/roaster.jpg"
              alt="Coffee roasting in the cooling tray"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* ROAST DAYS */}
          <div className="grid grid-cols-2 bg-[#04111D] text-[#E6DCC8]">
            <div className="border-r border-[#C08C45]/45 px-7 py-5 text-center">
              <div
                className="text-[1.65rem] sm:text-[1.85rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                MONDAY
              </div>

              <div className="mt-1 text-[0.66rem] font-bold tracking-[0.22em] text-[#C08C45]">
                ROAST DAY
              </div>
            </div>

            <div className="px-7 py-5 text-center">
              <div
                className="text-[1.65rem] sm:text-[1.85rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                THURSDAY
              </div>

              <div className="mt-1 text-[0.66rem] font-bold tracking-[0.22em] text-[#C08C45]">
                ROAST DAY
              </div>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="border-t border-[#C08C45]/45 bg-[#F4EBDD] px-6 py-3.5 text-center">
            <div className="text-[0.66rem] font-bold tracking-[0.18em] text-[#A36F2C]">
              ROASTED TO ORDER
              <span className="mx-4 text-[#B89A73]">|</span>
              TIMED FOR PEAK FRESHNESS.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
