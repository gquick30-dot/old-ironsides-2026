import { Link } from "react-router-dom";

const roasts = [
  {
    name: "FLAGSHIP",
    roast: "MEDIUM ROAST",
    notes: "Hazelnut • Warm Spice • Cream",
    slug: "flagship",
    image: "/flagship-bag1.jpg",
    price: 22,
  },
  {
    name: "BAPTISM BY FIRE",
    roast: "DARK ROAST",
    notes: "Chocolate • Molasses • Smoke",
    slug: "baptism-by-fire",
    image: "/baptism-bag1.jpg",
    price: 22,
  },
  {
    name: "THE JAVA ACTION",
    roast: "MEDIUM ROAST",
    notes: "Hazelnut • Caramel • Red Apple",
    slug: "java-action",
    image: "/java-bag1.jpg",
    price: 22,
  },
  {
    name: "BLACK SALVO",
    roast: "COFFEE BLEND",
    notes: "Vanilla • Cocoa • Almond",
    slug: "black-salvo",
    image: "/salvo-bag1.jpg",
    price: 22,
    badge: "NEW",
  },
  {
    name: "OAK & COPPER",
    roast: "BOURBON BARREL AGED",
    notes: "Vanilla • Caramel • Oak",
    slug: "oak-and-copper",
    image: "/copper-bag1.jpg",
    price: 24.99,
    badge: "LIMITED RELEASE",
    premium: true,
  },
  {
    name: "BRASS MONKEY",
    roast: "FLAVORED ROAST",
    notes: "Pecan • Brown Sugar • Spice",
    slug: "brass-monkey",
    image: "/brass-bag1.jpg",
    price: 22,
    badge: "FLAVORED",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#F3EBDD] text-[#071F35]">
      {/* =====================================================
          COMPACT STORE HEADER
      ====================================================== */}
      <section className="relative border-b border-[#C08C45]/25 bg-[#F3EBDD] px-4 pb-5 pt-5 sm:px-5 md:px-8 lg:pt-[58px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(192,140,69,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-[0.6rem] font-bold tracking-[0.26em] text-[#A36F2C]">
                THE OLD IRONSIDES FLEET
              </div>

              <h1
                className="mt-1.5 text-[2rem] font-semibold leading-[0.98] text-[#071F35] sm:text-[2.35rem] md:text-[2.65rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                CHOOSE YOUR ROAST.
              </h1>

              <p className="mt-2 max-w-[620px] text-[0.82rem] leading-[1.5] text-[#55514B]">
                Six distinct coffees. Roasted to order every Monday and Thursday.
              </p>
            </div>

            {/* TOP CONVERSION OPTIONS */}
            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                to="/roast/armada-sample-pack"
                className="flex min-h-[48px] items-center justify-center bg-[#C08C45] px-5 text-center text-[0.64rem] font-bold tracking-[0.11em] text-black transition hover:bg-[#D7A95D]"
              >
                START WITH A SAMPLE
              </Link>

              <div className="flex min-h-[48px] flex-col justify-center border border-[#071F35]/25 bg-[#071F35] px-5">
                <div className="text-[0.58rem] font-bold tracking-[0.12em] text-[#E6C07F]">
                  SUBSCRIBE & SAVE 15%
                </div>

                <div className="mt-0.5 text-[0.72rem] font-semibold text-[#F3EBDD]">
                  Core roasts $18.70 / bag
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ROAST GRID
      ====================================================== */}
      <section className="px-4 py-4 sm:px-5 md:px-8 md:py-5">
        <div className="mx-auto max-w-[1500px]">
          {/* MOBILE */}
          <div className="space-y-2.5 md:hidden">
            {roasts.map((item) => (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className="relative grid min-h-[132px] grid-cols-[112px_1fr] overflow-hidden border border-[#A68459]/35 bg-[#FAF3E8]"
              >
                {/* PHOTO */}
                <div className="relative overflow-hidden border-r border-[#A68459]/25">
                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="h-full w-full object-cover object-center"
                  />

                  {item.badge && (
                    <div className="absolute left-2 top-2 bg-[#071F35] px-2 py-1 text-[0.46rem] font-bold tracking-[0.1em] text-[#E6C07F]">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center px-4 py-3">
                  <div className="text-[0.49rem] font-bold tracking-[0.16em] text-[#A36F2C]">
                    {item.roast}
                  </div>

                  <h2
                    className="mt-1 text-[1rem] font-semibold leading-[1.02] text-[#071F35]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h2>

                  <div className="mt-1.5 text-[0.58rem] leading-[1.35] text-[#746A5E]">
                    {item.notes}
                  </div>

                  <div className="mt-2.5 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[0.8rem] font-bold text-[#071F35]">
                        ${item.price.toFixed(2)}
                      </div>

                      {!item.premium ? (
                        <div className="mt-1 text-[0.57rem] font-bold text-[#A36F2C]">
                          SUBSCRIBE $18.70
                        </div>
                      ) : (
                        <div className="mt-1 text-[0.52rem] font-semibold text-[#8C704F]">
                          PREMIUM • NO DISCOUNTS
                        </div>
                      )}
                    </div>

                    <div className="text-[0.52rem] font-bold tracking-[0.09em] text-[#A36F2C]">
                      VIEW →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4">
            {roasts.map((item) => (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className="group relative grid min-h-[215px] grid-cols-[42%_58%] overflow-hidden border border-[#A68459]/35 bg-[#FAF3E8] shadow-[0_5px_16px_rgba(61,39,19,0.04)] transition duration-300 hover:-translate-y-[2px] hover:border-[#C08C45]/80 hover:shadow-[0_12px_26px_rgba(61,39,19,0.10)]"
              >
                {/* PHOTO */}
                <div className="relative overflow-hidden border-r border-[#A68459]/25">
                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]"
                  />

                  {item.badge && (
                    <div className="absolute left-3 top-3 bg-[#071F35] px-2.5 py-1 text-[0.48rem] font-bold tracking-[0.12em] text-[#E6C07F]">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center px-5 py-4">
                  <div className="text-[0.52rem] font-bold tracking-[0.17em] text-[#A36F2C]">
                    {item.roast}
                  </div>

                  <h2
                    className="mt-1.5 text-[1.2rem] font-semibold leading-[1.02] text-[#071F35] transition group-hover:text-[#8A5B25] xl:text-[1.28rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h2>

                  <div className="mt-2 text-[0.64rem] leading-[1.4] text-[#716658]">
                    {item.notes}
                  </div>

                  <div className="mt-3 border-t border-[#6D5333]/20 pt-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[0.5rem] uppercase tracking-[0.1em] text-[#8B8175]">
                          12 oz bag
                        </div>

                        <div className="mt-0.5 text-[1rem] font-bold text-[#071F35]">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="pt-4 text-[0.52rem] font-bold tracking-[0.09em] text-[#A36F2C]">
                        VIEW ROAST →
                      </div>
                    </div>

                    {!item.premium ? (
                      <div className="mt-2 flex items-center justify-between border border-[#C08C45]/30 bg-[#F0E1CA] px-3 py-2">
                        <div>
                          <div className="text-[0.52rem] font-bold tracking-[0.08em] text-[#8A5B25]">
                            SUBSCRIBE & SAVE 15%
                          </div>

                          <div className="mt-0.5 text-[0.7rem] font-bold text-[#071F35]">
                            $18.70 / BAG
                          </div>
                        </div>

                        <div className="text-[0.52rem] font-semibold text-[#8A5B25]">
                          SAVE $3.30
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 border border-[#C08C45]/30 bg-[#F0E1CA] px-3 py-2">
                        <div className="text-[0.52rem] font-bold tracking-[0.08em] text-[#8A5B25]">
                          PREMIUM RELEASE
                        </div>

                        <div className="mt-0.5 text-[0.58rem] font-semibold text-[#665B4F]">
                          Discounts excluded
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C08C45] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* SMALL TRUST STRIP */}
          <div className="mt-4 flex flex-col justify-center gap-2 border-t border-[#A68459]/30 pt-4 text-center sm:flex-row sm:gap-8">
            <div className="text-[0.58rem] font-bold tracking-[0.1em] text-[#716658]">
              ROASTED MONDAY & THURSDAY
            </div>

            <div className="hidden text-[#C08C45] sm:block">•</div>

            <div className="text-[0.58rem] font-bold tracking-[0.1em] text-[#716658]">
              FREE SHIPPING ON 3+ BAGS
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}