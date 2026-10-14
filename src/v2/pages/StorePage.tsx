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
    <main className="min-h-screen bg-[#061524] text-[#E6DCC8]">
      {/* =====================================================
          COMPACT HEADER / DECISION BAR
      ====================================================== */}
      <section className="border-b border-[#C08C45]/25 px-4 py-5 sm:px-5 md:px-8 md:py-6">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-[0.62rem] font-bold tracking-[0.26em] text-[#C08C45]">
                THE OLD IRONSIDES FLEET
              </div>

              <h1
                className="mt-1.5 text-[2rem] font-semibold leading-[0.98] text-[#F3EBDD] sm:text-[2.45rem] md:text-[2.7rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                CHOOSE YOUR ROAST.
              </h1>

              <p className="mt-2 max-w-[620px] text-[0.82rem] leading-[1.5] text-[#CFC8BD] md:text-[0.88rem]">
                Six distinct coffees. Roasted to order every Monday and
                Thursday.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                to="/roast/armada-sample-pack"
                className="inline-flex h-[42px] items-center justify-center bg-[#C08C45] px-5 text-[0.64rem] font-bold tracking-[0.11em] text-black transition hover:bg-[#D7A95D]"
              >
                START WITH A SAMPLE
              </Link>

              <div className="flex h-[42px] items-center justify-center border border-[#C08C45]/35 px-5 text-[0.6rem] font-semibold tracking-[0.08em] text-[#D7CDBE]">
                CORE ROASTS • SUBSCRIBE & SAVE 15%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}
      <section className="px-4 py-5 sm:px-5 md:px-8 md:py-6">
        <div className="mx-auto max-w-[1500px]">
          {/* MOBILE */}
          <div className="space-y-2.5 md:hidden">
            {roasts.map((item) => (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className="grid min-h-[122px] grid-cols-[112px_1fr] overflow-hidden border border-[#C08C45]/25 bg-[#0A1B2A]"
              >
                <div className="relative overflow-hidden border-r border-[#C08C45]/20">
                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="h-full w-full object-cover object-center"
                  />

                  {item.badge && (
                    <div className="absolute left-2 top-2 bg-[#061524] px-2 py-1 text-[0.48rem] font-bold tracking-[0.1em] text-[#E6C07F]">
                      {item.badge}
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center px-4 py-3">
                  <div className="text-[0.5rem] font-bold tracking-[0.16em] text-[#C08C45]">
                    {item.roast}
                  </div>

                  <h2
                    className="mt-1 text-[1rem] font-semibold leading-[1.02] text-[#F3EBDD]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h2>

                  <div className="mt-1.5 text-[0.58rem] leading-[1.35] text-[#BEB6AA]">
                    {item.notes}
                  </div>

                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[0.8rem] font-bold text-[#F3EBDD]">
                        ${item.price.toFixed(2)}
                      </div>

                      {!item.premium ? (
                        <div className="mt-0.5 text-[0.5rem] tracking-[0.08em] text-[#C08C45]">
                          SUBSCRIBE $18.70
                        </div>
                      ) : (
                        <div className="mt-0.5 text-[0.5rem] tracking-[0.08em] text-[#C08C45]">
                          PREMIUM • NO DISCOUNTS
                        </div>
                      )}
                    </div>

                    <div className="text-[0.54rem] font-bold tracking-[0.09em] text-[#C08C45]">
                      VIEW →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden grid-cols-2 gap-3 md:grid xl:grid-cols-3 xl:gap-4">
            {roasts.map((item) => (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className="group grid min-h-[250px] grid-cols-[42%_58%] overflow-hidden border border-[#C08C45]/25 bg-[#0A1B2A] transition duration-300 hover:-translate-y-[2px] hover:border-[#C08C45]/70"
              >
                {/* PHOTO */}
                <div className="relative overflow-hidden border-r border-[#C08C45]/20">
                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  />

                  {item.badge && (
                    <div className="absolute left-3 top-3 bg-[#061524] px-2.5 py-1 text-[0.5rem] font-bold tracking-[0.12em] text-[#E6C07F]">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center px-5 py-5">
                  <div className="text-[0.54rem] font-bold tracking-[0.17em] text-[#C08C45]">
                    {item.roast}
                  </div>

                  <h2
                    className="mt-1.5 text-[1.25rem] font-semibold leading-[1.02] text-[#F3EBDD] transition group-hover:text-[#E6C07F] xl:text-[1.35rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h2>

                  <div className="mt-2 text-[0.66rem] leading-[1.45] text-[#BFB7AC]">
                    {item.notes}
                  </div>

                  <div className="mt-4 border-t border-[#C08C45]/20 pt-3">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="text-[0.55rem] uppercase tracking-[0.1em] text-[#867D72]">
                          12 oz bag
                        </div>

                        <div className="mt-0.5 text-[1rem] font-bold text-[#F3EBDD]">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="text-[0.56rem] font-bold tracking-[0.09em] text-[#C08C45]">
                        VIEW ROAST →
                      </div>
                    </div>

                    {!item.premium ? (
                      <div className="mt-2 text-[0.54rem] font-semibold tracking-[0.08em] text-[#B99A6E]">
                        SUBSCRIBE & SAVE 15% • $18.70
                      </div>
                    ) : (
                      <div className="mt-2 text-[0.54rem] font-semibold tracking-[0.08em] text-[#B99A6E]">
                        PREMIUM RELEASE • DISCOUNTS EXCLUDED
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM UTILITY STRIP */}
          <div className="mt-4 grid border border-[#C08C45]/25 bg-[#081725] text-center sm:grid-cols-2">
            <div className="px-4 py-3 sm:border-r sm:border-[#C08C45]/20">
              <div className="text-[0.54rem] font-bold tracking-[0.16em] text-[#C08C45]">
                ROASTED TO ORDER
              </div>
              <div className="mt-1 text-[0.66rem] text-[#CFC8BD]">
                Monday & Thursday
              </div>
            </div>

            <div className="border-t border-[#C08C45]/20 px-4 py-3 sm:border-t-0">
              <div className="text-[0.54rem] font-bold tracking-[0.16em] text-[#C08C45]">
                FREE SHIPPING
              </div>
              <div className="mt-1 text-[0.66rem] text-[#CFC8BD]">
                On 3+ bags
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
