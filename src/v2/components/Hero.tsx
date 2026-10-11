import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] pt-[116px] lg:pt-[170px]">
      {/* =========================================================
          PRIMARY HERO
      ========================================================== */}
      <div className="mx-auto max-w-[1500px]">
        {/* ================= DESKTOP HERO ================= */}
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

        {/* ================= MOBILE / TABLET HERO ================= */}
        <div className="lg:hidden">
          <div className="px-5 pb-5 pt-6 sm:px-7">
            <div className="font-serif text-[0.64rem] uppercase leading-[1.55] tracking-[0.26em] text-[#17324c]">
              HISTORY FUELS A BRIGHTER TOMORROW.
            </div>

            <div className="my-3 h-px w-10 bg-[#A36F2C]" />

            <h1
              className="text-[2rem] font-bold leading-[0.98] text-[#061a2e] sm:text-[2.5rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              BUILT ON
              <br />
              TRADITION.
              <span className="mt-2 block text-[#A36F2C]">
                ROASTED TO ORDER.
              </span>
            </h1>

            <p className="mt-4 max-w-[500px] font-serif text-[0.97rem] leading-[1.42] text-[#17324c]">
              Small-batch coffee for those who value history, discipline, and a
              higher standard.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <Link
                to="/store"
                className="inline-flex h-[48px] items-center justify-center bg-[#AD782F] px-6 font-serif text-[0.82rem] font-semibold tracking-[0.05em] text-white"
              >
                SHOP COFFEE
              </Link>

              <Link
                to="/roast/armada-sample-pack"
                className="inline-flex h-[48px] items-center justify-center border border-[#17324c] bg-white/55 px-6 font-serif text-[0.82rem] font-semibold text-[#17324c]"
              >
                TRY A SAMPLE PACK
              </Link>
            </div>

            <div className="mt-4 flex items-center gap-2 font-serif text-[0.76rem] text-[#17324c]">
              <span className="font-bold">4.9</span>
              <span className="tracking-[0.03em] text-[#C08C45]">★★★★★</span>
              <span>43 Verified Reviews</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
            <img
              src="/Hero-pic.jpg"
              alt="Old Ironsides Coffee Flagship roast with freshly brewed coffee"
              className="absolute inset-0 h-full w-full object-cover object-[56%_center]"
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          SUPPORTING CARDS
      ========================================================== */}
      <div className="border-t border-[#d8cebf] bg-[#f7f3eb] px-4 py-3 lg:px-6">
        <div className="mx-auto max-w-[1500px]">
          {/* ================= DESKTOP / TABLET CARDS ================= */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-3">
            {/* FLEET */}
            <Link
              to="/store"
              className="group relative min-h-[182px] overflow-hidden border border-[#d8cebf] bg-[#082237]"
            >
              <img
                src="/bags-hero.jpg"
                alt="Old Ironsides Coffee roast lineup"
                className="absolute right-0 top-0 h-full w-[76%] object-cover object-center transition duration-500 group-hover:scale-[1.015]"
              />

              <div className="absolute inset-y-0 left-0 w-[43%] bg-gradient-to-r from-[#082237] from-[0%] via-[#082237] via-[48%] via-[#082237]/85 via-[64%] via-[#082237]/35 via-[82%] to-transparent" />

              <div className="relative z-10 flex h-full max-w-[43%] flex-col px-6 py-5">
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

                <p className="mt-3 max-w-[205px] font-serif text-[0.81rem] leading-[1.28] text-[#E4DAC8]">
                  Six distinctive roasts, each with a story of its own.
                </p>

                <span className="mt-auto pt-3 text-[0.67rem] font-semibold tracking-[0.08em] text-[#C08C45]">
                  EXPLORE THE FLEET →
                </span>
              </div>
            </Link>

            {/* PROCESS */}
            <Link
              to="/roasting-process"
              className="group relative min-h-[182px] overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
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

            {/* MISSION */}
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

          {/* ================= MOBILE CARDS ================= */}
          <div className="space-y-3 md:hidden">
            {/* FLEET */}
            <Link
              to="/store"
              className="relative block overflow-hidden border border-[#d8cebf] bg-[#082237]"
            >
              <div className="relative h-[175px] overflow-hidden">
                <img
                  src="/bags-hero.jpg"
                  alt="Old Ironsides Coffee roast lineup"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#082237] via-[#082237]/82 to-transparent" />

                <div className="relative z-10 flex h-full w-[62%] flex-col justify-center px-5">
                  <div className="text-[0.61rem] font-semibold uppercase tracking-[0.27em] text-[#C08C45]">
                    THE FLEET
                  </div>

                  <h2
                    className="mt-2 text-[1.42rem] leading-[1.02] text-[#F0E7D5]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Six Roasts.
                    <br />
                    Six Stories.
                  </h2>

                  <span className="mt-4 text-[0.65rem] font-semibold tracking-[0.08em] text-[#C08C45]">
                    EXPLORE THE FLEET →
                  </span>
                </div>
              </div>
            </Link>

            {/* PROCESS */}
            <Link
              to="/roasting-process"
              className="relative block overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
              <div className="relative h-[165px] overflow-hidden">
                <img
                  src="/roaster.jpg"
                  alt="Coffee roasting in small batches"
                  className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-[68%_center]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3eb] from-[0%] via-[#f7f3eb] via-[43%] to-transparent to-[72%]" />

                <div className="relative z-10 flex h-full w-[58%] flex-col justify-center px-5">
                  <div className="text-[0.61rem] font-semibold uppercase tracking-[0.27em] text-[#A36F2C]">
                    OUR PROCESS
                  </div>

                  <h2
                    className="mt-2 text-[1.36rem] leading-[1.03] text-[#102942]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Roasted in
                    <br />
                    Small Batches.
                  </h2>

                  <span className="mt-4 text-[0.65rem] font-semibold tracking-[0.07em] text-[#A36F2C]">
                    OUR ROAST SCHEDULE →
                  </span>
                </div>
              </div>
            </Link>

            {/* MISSION */}
            <Link
              to="/sdvosb"
              className="relative block overflow-hidden border border-[#d8cebf] bg-[#f7f3eb]"
            >
              <div className="relative h-[165px] overflow-hidden">
                <img
                  src="/flag-hero.png"
                  alt="American flag"
                  className="absolute inset-y-0 right-0 h-full w-[60%] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3eb] from-[0%] via-[#f7f3eb] via-[45%] to-transparent to-[74%]" />

                <div className="relative z-10 flex h-full w-[60%] flex-col justify-center px-5">
                  <div className="text-[0.61rem] font-semibold uppercase tracking-[0.27em] text-[#A36F2C]">
                    OUR MISSION
                  </div>

                  <h2
                    className="mt-2 text-[1.36rem] leading-[1.03] text-[#102942]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Veteran Owned.
                    <br />
                    Purpose Driven.
                  </h2>

                  <span className="mt-4 text-[0.65rem] font-semibold tracking-[0.07em] text-[#A36F2C]">
                    LEARN MORE →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
