import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] pt-[170px]">
      {/* =========================================================
          PRIMARY HERO
      ========================================================== */}
      <div className="mx-auto max-w-[1500px]">
        {/* DESKTOP HERO */}
        <div className="hidden lg:grid lg:min-h-[385px] lg:grid-cols-[41%_59%]">
          {/* LEFT COPY */}
          <div className="flex items-center px-12 py-8 xl:px-14">
            <div className="w-full max-w-[500px]">
              <div className="mb-3 font-serif text-[0.76rem] uppercase leading-[1.65] tracking-[0.3em] text-[#17324c]">
                HISTORY FUELS
                <br />A BRIGHTER TOMORROW.
              </div>

              <div className="mb-4 h-px w-10 bg-[#A36F2C]" />

              <h1
                className="text-[2.8rem] font-bold leading-[0.98] tracking-[0.005em] text-[#061a2e] xl:text-[3.2rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                BUILT ON
                <br />
                TRADITION.
                <span className="mt-2 block text-[#A36F2C]">
                  ROASTED TO
                  <br />
                  ORDER.
                </span>
              </h1>

              <p className="mt-5 max-w-[440px] font-serif text-[1.02rem] leading-[1.4] text-[#17324c] xl:text-[1.08rem]">
                Small-batch coffee for those who value history, discipline, and
                a higher standard.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/store"
                  className="inline-flex h-[46px] items-center justify-center bg-[#AD782F] px-7 font-serif text-[0.83rem] font-semibold tracking-[0.06em] text-white transition hover:bg-[#BC8743]"
                >
                  SHOP COFFEE
                </Link>

                <Link
                  to="/roast/armada-sample-pack"
                  className="inline-flex h-[46px] items-center justify-center border border-[#17324c] bg-white/45 px-7 font-serif text-[0.83rem] font-semibold tracking-[0.025em] text-[#17324c] transition hover:bg-white"
                >
                  TRY A SAMPLE PACK
                </Link>
              </div>

              <div className="mt-5 flex items-center gap-2 font-serif text-[0.82rem] text-[#17324c]">
                <span className="font-bold">4.9</span>
                <span className="tracking-[0.04em] text-[#C08C45]">★★★★★</span>
                <span>43 Verified Reviews</span>
              </div>
            </div>
          </div>

          {/* HERO PHOTO */}
          <div className="relative overflow-hidden">
            <img
              src="/Hero-pic.jpg"
              alt="Old Ironsides Coffee Flagship roast with freshly brewed coffee"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* MOBILE / TABLET HERO */}
        <div className="lg:hidden">
          <div className="px-6 pb-6 pt-7 sm:px-8">
            <div className="font-serif text-[0.68rem] uppercase leading-[1.6] tracking-[0.28em] text-[#17324c]">
              HISTORY FUELS A BRIGHTER TOMORROW.
            </div>

            <div className="my-3 h-px w-10 bg-[#A36F2C]" />

            <h1
              className="text-[2.15rem] font-bold leading-[1] text-[#061a2e] sm:text-[2.6rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              BUILT ON TRADITION.
              <span className="mt-2 block text-[#A36F2C]">
                ROASTED TO ORDER.
              </span>
            </h1>

            <p className="mt-4 max-w-[520px] font-serif text-[1rem] leading-[1.4] text-[#17324c]">
              Small-batch coffee for those who value history, discipline, and a
              higher standard.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                to="/store"
                className="inline-flex h-[48px] items-center justify-center bg-[#AD782F] px-6 font-serif text-[0.84rem] font-semibold tracking-[0.05em] text-white"
              >
                SHOP COFFEE
              </Link>

              <Link
                to="/roast/armada-sample-pack"
                className="inline-flex h-[48px] items-center justify-center border border-[#17324c] bg-white/50 px-6 font-serif text-[0.84rem] font-semibold text-[#17324c]"
              >
                TRY A SAMPLE PACK
              </Link>
            </div>

            <div className="mt-4 flex items-center gap-2 font-serif text-[0.78rem] text-[#17324c]">
              <span className="font-bold">4.9</span>
              <span className="text-[#C08C45]">★★★★★</span>
              <span>43 Verified Reviews</span>
            </div>
          </div>

          <div className="relative h-[310px] overflow-hidden sm:h-[390px]">
            <img
              src="/Hero-pic.jpg"
              alt="Old Ironsides Coffee Flagship roast with freshly brewed coffee"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* =========================================================
    SUPPORTING CARDS
========================================================== */}
      <div className="border-t border-[#d8cebf] bg-[#f7f3eb] px-4 py-3 lg:px-6">
        <div className="mx-auto max-w-[1500px]">
          {/* =====================================================
      {/* =====================================================
    DESKTOP / TABLET CARDS
====================================================== */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-3">
            {/* ================= FLEET ================= */}
            <Link
              to="/store"
              className="group relative min-h-[182px] overflow-hidden border border-[#d8cebf] bg-[#082237]"
            >
              <img
                src="/bags-hero.jpg"
                alt="Old Ironsides Coffee roast lineup"
                className="absolute right-0 top-0 h-full w-[70%] object-cover object-center transition duration-500 group-hover:scale-[1.015]"
              />

              {/* LESS NAVY COVERAGE SO ALL SIX BAGS READ BETTER */}
              <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#082237] from-[0%] via-[#082237] via-[50%] via-[#082237]/88 via-[68%] to-transparent" />

              <div className="relative z-10 flex h-full max-w-[49%] flex-col px-6 py-5">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#C08C45]">
                  THE FLEET
                </div>

                <h2
                  className="mt-2 text-[1.38rem] leading-[1.03] text-[#F0E7D5] xl:text-[1.5rem]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Six Roasts.
                  <br />
                  Six Stories.
                </h2>

                <p className="mt-3 max-w-[225px] font-serif text-[0.83rem] leading-[1.3] text-[#E4DAC8]">
                  Six distinctive roasts, each with a story of its own.
                </p>

                <span className="mt-auto pt-3 text-[0.68rem] font-semibold tracking-[0.08em] text-[#C08C45]">
                  EXPLORE THE FLEET →
                </span>
              </div>
            </Link>

            {/* ================= PROCESS ================= */}
            <Link
              to="/roasting-process"
              className="group relative min-h-[182px] overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
              {/* THIS IS THE ROASTER FIX */}
              <img
                src="/roaster.jpg"
                alt="Coffee roasting in small batches"
                className="absolute right-0 top-0 h-full w-[66%] object-cover object-[67%_center] transition duration-500 group-hover:scale-[1.015]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 10%, rgba(0,0,0,0.65) 24%, black 38%, black 100%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 10%, rgba(0,0,0,0.65) 24%, black 38%, black 100%)",
                }}
              />

              {/* NO CREAM GRADIENT OVER THE PHOTO */}
              <div className="relative z-10 flex h-full max-w-[51%] flex-col px-6 py-5">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#A36F2C]">
                  OUR PROCESS
                </div>

                <h2
                  className="mt-2 text-[1.38rem] leading-[1.03] text-[#102942] xl:text-[1.5rem]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Roasted in
                  <br />
                  Small Batches.
                </h2>

                <p className="mt-3 max-w-[220px] font-serif text-[0.83rem] leading-[1.3] text-[#17324c]">
                  Every Monday and Thursday for peak freshness.
                </p>

                <span className="mt-auto pt-3 text-[0.68rem] font-semibold tracking-[0.08em] text-[#A36F2C]">
                  OUR ROAST SCHEDULE →
                </span>
              </div>
            </Link>

            {/* ================= MISSION ================= */}
            {/* LEAVE THIS ONE ALONE */}
            <Link
              to="/sdvosb"
              className="group relative min-h-[182px] overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
              <img
                src="/flag-hero.png"
                alt="American flag"
                className="absolute right-[-7%] top-[-7%] h-[114%] w-[74%] object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3eb] from-[0%] via-[#f7f3eb] via-[38%] via-[#f7f3eb]/95 via-[49%] via-[#f7f3eb]/65 via-[59%] to-transparent to-[79%]" />

              <div className="relative z-10 flex h-full max-w-[60%] flex-col px-6 py-5">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#A36F2C]">
                  OUR MISSION
                </div>

                <h2
                  className="mt-2 text-[1.38rem] leading-[1.03] text-[#102942] xl:text-[1.5rem]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Veteran Owned.
                  <br />
                  Purpose Driven.
                </h2>

                <p className="mt-3 max-w-[230px] font-serif text-[0.83rem] leading-[1.3] text-[#17324c]">
                  Coffee with a history worth carrying forward.
                </p>

                <span className="mt-auto pt-3 text-[0.68rem] font-semibold tracking-[0.08em] text-[#A36F2C]">
                  LEARN MORE →
                </span>
              </div>
            </Link>
          </div>

          {/* =====================================================
        MOBILE
    ====================================================== */}
          <div className="grid grid-cols-1 gap-3 md:hidden">
            {/* FLEET */}
            <Link
              to="/store"
              className="overflow-hidden border border-[#d8cebf] bg-[#082237]"
            >
              <img
                src="/bags-hero.jpg"
                alt="Old Ironsides Coffee roast lineup"
                className="h-[150px] w-full object-cover object-center"
              />

              <div className="px-5 py-4">
                <div className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#C08C45]">
                  THE FLEET
                </div>

                <h2
                  className="mt-2 text-[1.35rem] leading-[1.05] text-[#F0E7D5]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Six Roasts. Six Stories.
                </h2>

                <p className="mt-2 font-serif text-[0.87rem] leading-[1.35] text-[#DDD2BE]">
                  Six distinctive roasts, each with a story of its own.
                </p>

                <span className="mt-3 inline-block text-[0.68rem] font-semibold tracking-[0.08em] text-[#C08C45]">
                  EXPLORE THE FLEET →
                </span>
              </div>
            </Link>

            {/* PROCESS */}
            <Link
              to="/roasting-process"
              className="overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
              <img
                src="/roaster.jpg"
                alt="Coffee roasting in small batches"
                className="h-[150px] w-full object-cover object-[68%_center]"
              />

              <div className="px-5 py-4">
                <div className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#A36F2C]">
                  OUR PROCESS
                </div>

                <h2
                  className="mt-2 text-[1.35rem] leading-[1.05] text-[#102942]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Roasted in Small Batches.
                </h2>

                <p className="mt-2 font-serif text-[0.87rem] leading-[1.35] text-[#17324c]">
                  Every Monday and Thursday for peak freshness.
                </p>

                <span className="mt-3 inline-block text-[0.68rem] font-semibold tracking-[0.08em] text-[#A36F2C]">
                  OUR ROAST SCHEDULE →
                </span>
              </div>
            </Link>

            {/* MISSION */}
            <Link
              to="/sdvosb"
              className="overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
              <img
                src="/flag-hero.png"
                alt="American flag"
                className="h-[150px] w-full object-cover object-center"
              />

              <div className="px-5 py-4">
                <div className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#A36F2C]">
                  OUR MISSION
                </div>

                <h2
                  className="mt-2 text-[1.35rem] leading-[1.05] text-[#102942]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Veteran Owned. Purpose Driven.
                </h2>

                <p className="mt-2 font-serif text-[0.87rem] leading-[1.35] text-[#17324c]">
                  Coffee with a history worth carrying forward.
                </p>

                <span className="mt-3 inline-block text-[0.68rem] font-semibold tracking-[0.08em] text-[#A36F2C]">
                  LEARN MORE →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
