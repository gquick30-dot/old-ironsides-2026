import { Link } from "react-router-dom";

export default function CoffeeRitualSection() {
  return (
    <section className="border-t-[6px] border-[#061524] bg-[#EFE5D5] text-[#071421]">
      {/* MAIN CONTENT */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-8 md:px-8 lg:grid-cols-[44%_56%] lg:items-center lg:py-8 xl:gap-10">
        {/* LEFT COPY */}
        <div className="max-w-[560px]">
          <div className="flex items-center gap-4">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#A36F2C]">
              MORNING RITUAL
            </div>

            <div className="h-px w-24 bg-[#C08C45]/60" />
          </div>

          <h2
            className="mt-5 text-[2.7rem] font-semibold leading-[0.98] text-[#071F35] sm:text-[3.1rem] lg:text-[3.35rem] xl:text-[3.65rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            FRESH COFFEE.
            <br />
            BUILT FOR THE
            <br />
            FIRST CUP.
          </h2>

          <p className="mt-6 max-w-[530px] font-serif text-[1.05rem] leading-[1.55] text-[#24384A] md:text-[1.12rem]">
            Fresh-roasted in small batches for the slow start, the first cup,
            and the few quiet minutes before the day takes over.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/store"
              className="inline-flex h-[48px] items-center justify-center bg-[#B57A31] px-8 font-serif text-[0.84rem] font-semibold tracking-[0.07em] text-white transition hover:bg-[#C48A45]"
            >
              SHOP THE FLEET
            </Link>

            <Link
              to="/roasting-process"
              className="inline-flex h-[48px] items-center justify-center border border-[#17324c] bg-transparent px-8 font-serif text-[0.84rem] font-semibold tracking-[0.05em] text-[#17324c] transition hover:bg-white/60"
            >
              HOW WE ROAST
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-[1.35fr_0.9fr] gap-3">
          {/* LARGE IMAGE */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[18px] border border-[#C08C45]/45 lg:min-h-[420px]">
            <img
              src="/harbor-coffee1.jpg"
              alt="Old Ironsides Coffee by the harbor"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-5 bottom-5 bg-[#071421]/92 px-5 py-4">
              <div
                className="text-[1.45rem] text-[#E9DFC9]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Small Batch.
              </div>

              <div className="mt-1 text-[0.68rem] font-bold tracking-[0.16em] text-[#C08C45]">
                ROASTED FOR THE DAILY RITUAL
              </div>
            </div>
          </div>

          {/* SUPPORTING IMAGES */}
          <div className="grid grid-rows-2 gap-3">
            <div className="relative min-h-[180px] overflow-hidden rounded-[18px] border border-[#C08C45]/35">
              <img
                src="/bean-pour.jpg"
                alt="Fresh roasted coffee beans"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="relative min-h-[180px] overflow-hidden rounded-[18px] border border-[#C08C45]/35">
              <img
                src="/coffee cups.jpg"
                alt="Fresh cups of coffee"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
