import { Link } from "react-router-dom";

const roasts = [
  {
    name: "FLAGSHIP",
    roast: "MEDIUM ROAST",
    description: "Smooth, balanced, and endlessly drinkable.",
    notes: "Hazelnut  •  Warm Spice  •  Cream",
    slug: "flagship",
    image: "/Flagship Transparent Mockup.png",
  },
  {
    name: "BAPTISM BY FIRE",
    roast: "DARK ROAST",
    description: "Deep, smoky, and unforgettable.",
    notes: "Chocolate  •  Molasses  •  Smoke",
    slug: "baptism-by-fire",
    image: "/Baptism By Fire Transparent .png",
  },
  {
    name: "THE JAVA ACTION",
    roast: "MEDIUM ROAST",
    description: "Balanced and adventurous with a smooth finish.",
    notes: "Hazelnut  •  Caramel  •  Red Apple",
    slug: "the-java-action",
    image: "/Java Action Transparent.png",
  },
  {
    name: "BLACK SALVO",
    roast: "COFFEE BLEND",
    description: "Rich and smooth with a bold foundation.",
    notes: "Vanilla  •  Cocoa  •  Almond",
    slug: "black-salvo",
    image: "/black-salvo-emblem.png",
  },
  {
    name: "OAK & COPPER",
    roast: "BOURBON BARREL AGED",
    description: "Aged for depth with notes of oak, caramel, and warmth.",
    notes: "Vanilla  •  Caramel  •  Oak",
    slug: "oak-and-copper",
    image: "/Oak&Copper Bag Transparent.png",
  },
  {
    name: "BRASS MONKEY",
    roast: "FLAVORED ROAST",
    description: "Smooth, nutty, and just the right amount of sweet.",
    notes: "Pecan  •  Brown Sugar  •  Spice",
    slug: "brass-monkey",
    image: "/Brass Monkey Transparent Bag.png",
  },
];

export default function FleetSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3EBDD] px-4 py-10 sm:px-5 md:px-6 md:py-12 xl:px-8 xl:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(192,140,69,0.10),transparent_30%),radial-gradient(circle_at_85%_78%,rgba(109,83,51,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* TOP */}
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch xl:gap-5">
          {/* INTRO */}
          <div className="flex flex-col justify-center px-1 lg:px-3 xl:px-5">
            <div className="text-[0.68rem] font-bold tracking-[0.24em] text-[#A36F2C] md:text-[0.72rem]">
              EXPLORE THE FLEET
            </div>

            <h2
              className="mt-1.5 text-[2.3rem] font-bold leading-[0.94] text-[#03111d] sm:text-[2.65rem] md:text-[3rem] lg:text-[3.15rem] xl:text-[3.45rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              OUR ROASTS
            </h2>

            <p className="mt-3.5 max-w-[500px] text-[0.95rem] leading-[1.55] text-[#3E403F] md:text-[1rem]">
              From smooth and balanced to dark, smoky and barrel-aged, there is
              a roast for every kind of coffee drinker.
            </p>

            <Link
              to="/store"
              className="mt-4 inline-flex w-fit items-center bg-[#C08C45] px-6 py-3 text-[0.78rem] font-bold tracking-[0.08em] text-black shadow-[0_8px_20px_rgba(192,140,69,0.16)] transition hover:-translate-y-[2px] hover:bg-[#D6A557]"
            >
              FIND YOUR ROAST
              <span className="ml-4">→</span>
            </Link>
          </div>

          {/* GUIDE PANEL */}
          <div className="relative overflow-hidden border border-[#C08C45]/55 bg-[#061524] shadow-[0_14px_28px_rgba(0,0,0,0.14)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(192,140,69,0.12),transparent_28%)]" />

            <div className="relative grid h-full md:grid-cols-[1fr_1.08fr]">
              <div className="border-b border-[#C08C45]/35 p-4 md:border-b-0 md:border-r lg:p-5 xl:p-5">
                <div className="text-[0.68rem] font-bold tracking-[0.12em] text-[#C08C45]">
                  OUR ROASTING PHILOSOPHY
                </div>

                <p className="mt-2.5 max-w-[370px] font-serif text-[0.88rem] leading-[1.5] text-[#E6DCC8] xl:text-[0.93rem]">
                  Small batches. Roasted to order. Never sitting on a shelf
                  waiting for somebody to buy it.
                </p>

                <p className="mt-2 text-[0.76rem] leading-[1.45] text-[#AFA79B] xl:text-[0.8rem]">
                  The goal is simple: get the coffee to you when it tastes the
                  way it should.
                </p>
              </div>

              <div className="grid items-center gap-3 p-4 md:grid-cols-[1fr_124px] lg:p-5 xl:grid-cols-[1fr_132px] xl:p-5">
                <div>
                  <div className="text-[0.68rem] font-bold tracking-[0.12em] text-[#C08C45]">
                    ROAST GUIDE
                  </div>

                  <p className="mt-2.5 max-w-[265px] text-[0.78rem] leading-[1.45] text-[#E6DCC8] xl:text-[0.82rem]">
                    Not sure where to start? Explore the fleet and find the
                    roast that fits your cup.
                  </p>

                  <Link
                    to="/store"
                    className="mt-3.5 inline-flex items-center text-[0.68rem] font-bold tracking-[0.1em] text-[#C08C45] transition hover:text-[#E6C07F]"
                  >
                    EXPLORE ROASTS
                    <span className="ml-3">→</span>
                  </Link>
                </div>

                <div className="relative mx-auto hidden h-[116px] w-[116px] md:block xl:h-[124px] xl:w-[124px]">
                  <div className="absolute inset-[15px] rotate-45 border border-[#C08C45]/45" />
                  <div className="absolute inset-[27px] rounded-full border border-[#C08C45]/45" />

                  <div className="absolute left-1/2 top-1/2 h-[74px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#C08C45]/60" />
                  <div className="absolute left-1/2 top-1/2 h-px w-[74px] -translate-x-1/2 -translate-y-1/2 bg-[#C08C45]/60" />

                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C08C45] bg-[#061524]" />

                  <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[7px] font-bold text-[#E6DCC8]">
                    BOLD
                  </span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[7px] font-bold text-[#E6DCC8]">
                    DARK
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[7px] font-bold text-[#E6DCC8]">
                    SMOOTH
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] font-bold text-[#E6DCC8]">
                    LIGHT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {roasts.map((item) => (
            <article
              key={item.slug}
              className="group relative overflow-hidden border border-[#A68459]/35 bg-[#F7EFE2] shadow-[0_6px_18px_rgba(61,39,19,0.05)] transition duration-300 hover:-translate-y-[3px] hover:border-[#C08C45]/70 hover:shadow-[0_18px_36px_rgba(61,39,19,0.13)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(192,140,69,0.09),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative grid min-h-[255px] grid-cols-[45%_55%] sm:min-h-[265px] lg:min-h-[270px] xl:min-h-[278px]">
                {/* BAG */}
                <Link
                  to={`/roast/${item.slug}`}
                  className="relative flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute bottom-[8%] h-[30px] w-[64%] rounded-[50%] bg-black/15 blur-xl transition duration-300 group-hover:w-[70%]" />

                  <img
                    src={item.image}
                    alt={`${item.name} coffee bag`}
                    className="relative z-10 max-h-[260px] w-auto max-w-[98%] object-contain drop-shadow-[0_16px_11px_rgba(0,0,0,0.22)] transition duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.03] sm:max-h-[270px] lg:max-h-[280px] xl:max-h-[292px]"
                  />
                </Link>

                {/* DETAILS */}
                <div className="relative flex flex-col justify-center py-4 pr-5 xl:py-5 xl:pr-6">
                  <div className="text-[0.64rem] font-bold tracking-[0.14em] text-[#9C692C] xl:text-[0.68rem]">
                    {item.roast}
                  </div>

                  <Link to={`/roast/${item.slug}`}>
                    <h3
                      className="mt-1 text-[1.3rem] font-bold leading-[1.02] text-[#03111d] transition group-hover:text-[#895B26] lg:text-[1.4rem] xl:text-[1.48rem]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {item.name}
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-[0.76rem] leading-[1.45] text-[#47423C] xl:text-[0.8rem]">
                    {item.description}
                  </p>

                  <div className="mt-3 text-[0.66rem] leading-relaxed text-[#716658] xl:text-[0.7rem]">
                    {item.notes}
                  </div>

                  <div className="mt-3.5 flex items-center gap-3 border-t border-[#6D5333]/20 pt-3.5">
                    <Link
                      to="/roast/armada-sample-pack"
                      className="text-[0.58rem] font-bold tracking-[0.1em] text-[#03111d] transition hover:text-[#A36F2C]"
                    >
                      TRY A SAMPLE
                    </Link>

                    <Link
                      to={`/roast/${item.slug}`}
                      className="border border-[#C08C45]/70 px-3 py-1.5 text-[0.58rem] font-bold tracking-[0.1em] text-[#895B26] transition hover:bg-[#C08C45] hover:text-black"
                    >
                      VIEW ROAST
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-[3px] w-0 bg-[#C08C45] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
