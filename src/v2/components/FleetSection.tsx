import { Link } from "react-router-dom";

const roasts = [
  {
    name: "FLAGSHIP",
    roast: "MEDIUM ROAST",
    notes: "Hazelnut • Warm Spice • Cream",
    slug: "flagship",
    image: "/Flagship Transparent Mockup.png",
  },
  {
    name: "BAPTISM BY FIRE",
    roast: "DARK ROAST",
    notes: "Chocolate • Molasses • Smoke",
    slug: "baptism-by-fire",
    image: "/Baptism By Fire Transparent .png",
  },
  {
    name: "THE JAVA ACTION",
    roast: "MEDIUM ROAST",
    notes: "Hazelnut • Caramel • Red Apple",
    slug: "the-java-action",
    image: "/Java Action Transparent.png",
  },
  {
    name: "BLACK SALVO",
    roast: "COFFEE BLEND",
    notes: "Vanilla • Cocoa • Almond",
    slug: "black-salvo",
    image: "/black-salvo-emblem.png",
  },
  {
    name: "OAK & COPPER",
    roast: "BOURBON BARREL AGED",
    notes: "Vanilla • Caramel • Oak",
    slug: "oak-and-copper",
    image: "/Oak&Copper Bag Transparent.png",
  },
  {
    name: "BRASS MONKEY",
    roast: "FLAVORED ROAST",
    notes: "Pecan • Brown Sugar • Spice",
    slug: "brass-monkey",
    image: "/Brass Monkey Transparent Bag.png",
  },
];

export default function FleetSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3EBDD] px-4 py-9 sm:px-5 md:px-6 md:py-11 xl:px-8 xl:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(192,140,69,0.08),transparent_30%),radial-gradient(circle_at_85%_78%,rgba(109,83,51,0.06),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* =====================================================
            INTRO
        ====================================================== */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="text-[0.64rem] font-bold tracking-[0.25em] text-[#A36F2C] md:text-[0.7rem]">
            EXPLORE THE FLEET
          </div>

          <h2
            className="mt-2 text-[2.25rem] font-bold leading-[0.98] text-[#03111d] sm:text-[2.7rem] md:text-[3rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            OUR ROASTS
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-[0.9rem] leading-[1.5] text-[#4A4742] md:text-[0.96rem]">
            Six distinct coffees, from smooth and balanced to dark,
            barrel-aged, and flavored.
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <Link
              to="/store"
              className="inline-flex h-[44px] items-center justify-center bg-[#C08C45] px-6 text-[0.7rem] font-bold tracking-[0.1em] text-black transition hover:bg-[#D6A557]"
            >
              SHOP ALL ROASTS
              <span className="ml-3">→</span>
            </Link>

            <Link
              to="/roast/armada-sample-pack"
              className="text-[0.65rem] font-bold tracking-[0.09em] text-[#8A5B25] transition hover:text-[#03111d]"
            >
              NOT SURE? TRY A SAMPLE PACK
            </Link>
          </div>
        </div>

        {/* =====================================================
            MOBILE ROAST LIST
        ====================================================== */}
        <div className="mt-7 space-y-2.5 md:hidden">
          {roasts.map((item) => (
            <Link
              key={item.slug}
              to={`/roast/${item.slug}`}
              className="grid min-h-[118px] grid-cols-[105px_1fr] items-center overflow-hidden border border-[#A68459]/35 bg-[#F7EFE2]"
            >
              {/* BAG */}
              <div className="relative flex h-full items-center justify-center overflow-hidden">
                <div className="absolute bottom-[12%] h-[18px] w-[60%] rounded-[50%] bg-black/12 blur-lg" />

                <img
                  src={item.image}
                  alt={`${item.name} coffee bag`}
                  className="relative z-10 max-h-[105px] max-w-[90px] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* DETAILS */}
              <div className="border-l border-[#A68459]/20 py-4 pl-4 pr-3">
                <div className="text-[0.55rem] font-bold tracking-[0.16em] text-[#9C692C]">
                  {item.roast}
                </div>

                <h3
                  className="mt-1 text-[1.05rem] font-bold leading-[1.05] text-[#03111d]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.name}
                </h3>

                <div className="mt-2 text-[0.64rem] leading-[1.4] text-[#716658]">
                  {item.notes}
                </div>

                <div className="mt-2 text-[0.58rem] font-bold tracking-[0.1em] text-[#A36F2C]">
                  VIEW ROAST →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            DESKTOP / TABLET ROAST GRID
        ====================================================== */}
        <div className="mt-8 hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {roasts.map((item) => (
            <Link
              key={item.slug}
              to={`/roast/${item.slug}`}
              className="group relative overflow-hidden border border-[#A68459]/35 bg-[#F7EFE2] transition duration-300 hover:-translate-y-[2px] hover:border-[#C08C45]/70 hover:shadow-[0_14px_30px_rgba(61,39,19,0.10)]"
            >
              <div className="grid min-h-[235px] grid-cols-[42%_58%]">
                {/* BAG */}
                <div className="relative flex items-center justify-center overflow-hidden">
                  <div className="absolute bottom-[10%] h-[26px] w-[62%] rounded-[50%] bg-black/14 blur-xl" />

                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="relative z-10 max-h-[220px] max-w-[94%] object-contain drop-shadow-[0_14px_10px_rgba(0,0,0,0.20)] transition duration-300 group-hover:-translate-y-1"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-center py-5 pr-6">
                  <div className="text-[0.62rem] font-bold tracking-[0.15em] text-[#9C692C]">
                    {item.roast}
                  </div>

                  <h3
                    className="mt-1.5 text-[1.28rem] font-bold leading-[1.03] text-[#03111d] transition group-hover:text-[#895B26] xl:text-[1.4rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.name}
                  </h3>

                  <div className="mt-3 text-[0.7rem] leading-[1.5] text-[#716658]">
                    {item.notes}
                  </div>

                  <div className="mt-4 border-t border-[#6D5333]/20 pt-3 text-[0.6rem] font-bold tracking-[0.11em] text-[#A36F2C]">
                    VIEW ROAST →
                  </div>
                </div>
              </div>

              <div className="h-[3px] w-0 bg-[#C08C45] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}