import { Link } from "react-router-dom";

const roasts = [
  {
    name: "FLAGSHIP",
    roast: "MEDIUM ROAST",
    description: "Smooth, balanced, and built for the everyday cup.",
    notes: "Hazelnut • Warm Spice • Cream",
    slug: "flagship",
    image: "/Flagship Transparent Mockup.png",
    price: 22,
  },
  {
    name: "BAPTISM BY FIRE",
    roast: "DARK ROAST",
    description: "Deep, smoky, bold, and unapologetically dark.",
    notes: "Chocolate • Molasses • Smoke",
    slug: "baptism-by-fire",
    image: "/Baptism By Fire Transparent .png",
    price: 22,
  },
  {
    name: "THE JAVA ACTION",
    roast: "MEDIUM ROAST",
    description: "Balanced, adventurous, and smooth through the finish.",
    notes: "Hazelnut • Caramel • Red Apple",
    slug: "java-action",
    image: "/Java Action Transparent.png",
    price: 22,
  },
  {
    name: "BLACK SALVO",
    roast: "COFFEE BLEND",
    description: "Rich and smooth with a bold, versatile foundation.",
    notes: "Vanilla • Cocoa • Almond",
    slug: "black-salvo",
    image: "/black-salvo-emblem.png",
    price: 22,
    badge: "NEW",
  },
  {
    name: "OAK & COPPER",
    roast: "BOURBON BARREL AGED",
    description: "A limited-release roast aged for oak, caramel, and depth.",
    notes: "Vanilla • Caramel • Oak",
    slug: "oak-and-copper",
    image: "/Oak&Copper Bag Transparent.png",
    price: 24.99,
    badge: "LIMITED RELEASE",
    premium: true,
  },
  {
    name: "BRASS MONKEY",
    roast: "FLAVORED ROAST",
    description: "Smooth Southern pecan with just the right amount of sweetness.",
    notes: "Pecan • Brown Sugar • Spice",
    slug: "brass-monkey",
    image: "/Brass Monkey Transparent Bag.png",
    price: 22,
    badge: "FLAVORED",
  },
];

export default function StorePage() {
  return (
    <main className="bg-[#F3EBDD] text-[#03111d]">
      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-[#C08C45]/25 bg-[#F3EBDD] px-5 py-9 md:px-8 md:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(192,140,69,0.09),transparent_30%),radial-gradient(circle_at_82%_65%,rgba(109,83,51,0.06),transparent_30%)]" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-[780px] text-center">
            <div className="text-[0.65rem] font-bold tracking-[0.28em] text-[#A36F2C]">
              THE OLD IRONSIDES FLEET
            </div>

            <h1
              className="mt-3 text-[2.55rem] font-semibold leading-[0.96] text-[#071F35] sm:text-[3.2rem] lg:text-[3.8rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              CHOOSE YOUR ROAST.
            </h1>

            <p className="mx-auto mt-4 max-w-[650px] text-[0.94rem] leading-[1.6] text-[#46515B] md:text-[1rem]">
              Six distinct coffees, roasted in small batches and made to order.
              Find the one that fits your cup.
            </p>
          </div>

          {/* VALUE STRIP */}
          <div className="mx-auto mt-7 grid max-w-[950px] border border-[#C08C45]/35 bg-[#071421] text-center sm:grid-cols-3">
            <div className="px-4 py-4 sm:border-r sm:border-[#C08C45]/25">
              <div className="text-[0.6rem] font-bold tracking-[0.19em] text-[#C08C45]">
                ROASTED TO ORDER
              </div>

              <div className="mt-1.5 text-[0.76rem] text-[#DDD4C7]">
                Every Monday & Thursday
              </div>
            </div>

            <div className="border-t border-[#C08C45]/25 px-4 py-4 sm:border-r sm:border-t-0">
              <div className="text-[0.6rem] font-bold tracking-[0.19em] text-[#C08C45]">
                SUBSCRIBE & SAVE 15%
              </div>

              <div className="mt-1.5 text-[0.76rem] text-[#DDD4C7]">
                Available on core roasts
              </div>
            </div>

            <div className="border-t border-[#C08C45]/25 px-4 py-4 sm:border-t-0">
              <div className="text-[0.6rem] font-bold tracking-[0.19em] text-[#C08C45]">
                FREE SHIPPING
              </div>

              <div className="mt-1.5 text-[0.76rem] text-[#DDD4C7]">
                On 3+ bags
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}
      <section className="px-4 py-8 sm:px-5 md:px-8 md:py-11 xl:py-12">
        <div className="mx-auto max-w-[1500px]">
          {/* MOBILE */}
          <div className="space-y-3 md:hidden">
            {roasts.map((item) => (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className="group relative grid min-h-[150px] grid-cols-[120px_1fr] overflow-hidden border border-[#A68459]/35 bg-[#F8F0E5]"
              >
                {item.badge && (
                  <div className="absolute left-2 top-2 z-20 bg-[#071421] px-2 py-1 text-[0.5rem] font-bold tracking-[0.12em] text-[#E6C07F]">
                    {item.badge}
                  </div>
                )}

                {/* BAG */}
                <div className="relative flex items-center justify-center overflow-hidden">
                  <div className="absolute bottom-[12%] h-[20px] w-[66%] rounded-[50%] bg-black/15 blur-lg" />

                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="relative z-10 max-h-[135px] max-w-[108px] object-contain drop-shadow-[0_12px_9px_rgba(0,0,0,0.20)]"
                  />
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center border-l border-[#A68459]/20 py-4 pl-4 pr-3">
                  <div className="text-[0.54rem] font-bold tracking-[0.16em] text-[#A36F2C]">
                    {item.roast}
                  </div>

                  <h2
                    className="mt-1 text-[1.08rem] font-semibold leading-[1.04] text-[#071F35]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h2>

                  <div className="mt-2 text-[0.62rem] leading-[1.4] text-[#756959]">
                    {item.notes}
                  </div>

                  <div className="mt-2.5 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[0.58rem] uppercase tracking-[0.1em] text-[#867665]">
                        12 oz
                      </div>

                      <div className="mt-0.5 text-[0.95rem] font-bold text-[#071F35]">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="text-[0.58rem] font-bold tracking-[0.09em] text-[#A36F2C]">
                      VIEW ROAST →
                    </div>
                  </div>

                  {!item.premium && (
                    <div className="mt-2 text-[0.56rem] font-semibold tracking-[0.08em] text-[#8A6B46]">
                      SUBSCRIBE & SAVE 15%
                    </div>
                  )}

                  {item.premium && (
                    <div className="mt-2 text-[0.56rem] font-semibold tracking-[0.08em] text-[#8A6B46]">
                      PREMIUM RELEASE • DISCOUNTS EXCLUDED
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* DESKTOP / TABLET */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
            {roasts.map((item) => (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className="group relative flex min-h-[390px] flex-col overflow-hidden border border-[#A68459]/35 bg-[#F8F0E5] shadow-[0_7px_22px_rgba(61,39,19,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C08C45]/80 hover:shadow-[0_18px_38px_rgba(61,39,19,0.11)]"
              >
                {item.badge && (
                  <div className="absolute left-4 top-4 z-20 bg-[#071421] px-3 py-1.5 text-[0.55rem] font-bold tracking-[0.14em] text-[#E6C07F]">
                    {item.badge}
                  </div>
                )}

                {/* BAG AREA */}
                <div className="relative flex min-h-[245px] items-center justify-center overflow-hidden border-b border-[#A68459]/20">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(192,140,69,0.10),transparent_36%)]" />

                  <div className="absolute bottom-[9%] h-[28px] w-[38%] rounded-[50%] bg-black/15 blur-xl" />

                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="relative z-10 max-h-[230px] max-w-[68%] object-contain drop-shadow-[0_16px_11px_rgba(0,0,0,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
                  />
                </div>

                {/* INFO */}
                <div className="flex flex-1 flex-col p-5 xl:p-6">
                  <div className="text-[0.6rem] font-bold tracking-[0.16em] text-[#A36F2C]">
                    {item.roast}
                  </div>

                  <h2
                    className="mt-2 text-[1.45rem] font-semibold leading-[1.02] text-[#071F35] transition group-hover:text-[#8A5B25] xl:text-[1.6rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h2>

                  <p className="mt-3 text-[0.82rem] leading-[1.55] text-[#4B4B47]">
                    {item.description}
                  </p>

                  <div className="mt-3 text-[0.7rem] leading-[1.45] text-[#756959]">
                    {item.notes}
                  </div>

                  <div className="mt-auto pt-5">
                    <div className="border-t border-[#6D5333]/20 pt-4">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <div className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#887866]">
                            12 oz bag
                          </div>

                          <div className="mt-1 text-[1.1rem] font-bold text-[#071F35]">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>

                        <div className="text-[0.62rem] font-bold tracking-[0.1em] text-[#A36F2C]">
                          VIEW ROAST →
                        </div>
                      </div>

                      {!item.premium ? (
                        <div className="mt-3 text-[0.6rem] font-semibold tracking-[0.09em] text-[#8A6B46]">
                          SUBSCRIBE & SAVE 15% • $18.70
                        </div>
                      ) : (
                        <div className="mt-3 text-[0.6rem] font-semibold tracking-[0.09em] text-[#8A6B46]">
                          PREMIUM RELEASE • DISCOUNTS EXCLUDED
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="h-[3px] w-0 bg-[#C08C45] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SAMPLE PACK
      ====================================================== */}
      <section className="bg-[#071421] px-5 py-8 text-[#E6DCC8] md:px-8 md:py-10">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <div className="text-[0.62rem] font-bold tracking-[0.26em] text-[#C08C45]">
            NOT SURE WHERE TO START?
          </div>

          <h2
            className="mt-3 text-[1.9rem] font-semibold leading-[1.03] sm:text-[2.25rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            START WITH A SAMPLE.
          </h2>

          <p className="mx-auto mt-3 max-w-[580px] text-[0.86rem] leading-[1.6] text-[#CFC8BD]">
            Explore the fleet before committing to a full bag.
          </p>

          <Link
            to="/roast/armada-sample-pack"
            className="mt-5 inline-flex h-[46px] items-center justify-center bg-[#C08C45] px-7 text-[0.68rem] font-bold tracking-[0.11em] text-black transition hover:bg-[#D7A95D]"
          >
            TRY THE SAMPLE PACK
          </Link>
        </div>
      </section>
    </main>
  );
}