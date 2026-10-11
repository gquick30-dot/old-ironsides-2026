import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const stories = [
    {
      slug: "flagship",
      number: "01",
      eyebrow: "THE FOUNDING",
      title: "A NAVY FOR A YOUNG NATION",
      subtitle: "George Washington & Commodore John Barry",
      description:
        "The political vision, naval leadership, and national need that helped bring USS Constitution and the early United States Navy into existence.",
      image: "/Flagship-web.jpg",
    },
    {
      slug: "baptism-by-fire",
      number: "02",
      eyebrow: "AUGUST 19, 1812",
      title: "THE BIRTH OF OLD IRONSIDES",
      subtitle: "USS Constitution vs HMS Guerriere",
      description:
        "The battle that gave Constitution her legendary nickname and proved the young American Navy could stand against Britain at sea.",
      image: "/baptism-web.jpg",
    },
    {
      slug: "java-action",
      number: "03",
      eyebrow: "DECEMBER 29, 1812",
      title: "THE JAVA ACTION",
      subtitle: "USS Constitution vs HMS Java",
      description:
        "Captain William Bainbridge and his crew fought another brutal engagement off Brazil, further cementing Constitution's growing legend.",
      image: "/java-web.jpg",
    },
    {
      slug: "oak-and-copper",
      number: "04",
      eyebrow: "THE SHIP",
      title: "BUILT TO ENDURE",
      subtitle: "Oak, Copper & The Fight To Preserve Her",
      description:
        "The design, materials, craftsmanship, and generations of Americans who ensured that Old Ironsides would survive long after her fighting days.",
      image: "/ironship.jpg",
    },
  ];

export default function FleetHistoryPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const next = ((index % stories.length) + stories.length) % stories.length;
    const element = cardRefs.current[next];

    element?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActive(next);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    let closest = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((element, index) => {
      if (!element) return;

      const distance = Math.abs(
        element.offsetLeft -
          container.scrollLeft -
          (container.clientWidth - element.clientWidth) / 2
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActive(closest);
  };

  return (
    <main className="overflow-hidden bg-[#F3EBDD] text-[#03111d]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#061524] text-[#E6DCC8]">
        <img
          src="/maps-books.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.13]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/30 via-[#061524]/72 to-[#061524]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-10 text-center md:px-8 md:py-14">
          <div className="text-[0.65rem] font-bold tracking-[0.3em] text-[#C08C45]">
            OLD IRONSIDES HISTORY
          </div>

          <div className="mx-auto mt-3 h-[2px] w-12 bg-[#C08C45]" />

          <h1
            className="mx-auto mt-5 max-w-[900px] text-[2.45rem] font-semibold leading-[0.97] text-[#F0E7D6] sm:text-[3.2rem] lg:text-[4rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            THE HISTORY BEHIND
            <span className="mt-1 block text-[#C08C45]">THE FLEET.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[650px] text-[0.95rem] leading-[1.65] text-[#CEC6BA]">
            Four stories from the history of USS Constitution. The people,
            battles, craftsmanship, and determination behind the names carried
            by our historical roasts.
          </p>
        </div>
      </section>

      {/* =====================================================
          HISTORY CARDS
      ====================================================== */}
      <section className="px-5 py-9 md:px-8 md:py-12 xl:py-14">
        <div className="mx-auto max-w-[1500px]">
          {/* MOBILE */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden"
          >
            {stories.map((story, index) => (
              <Link
                key={story.slug}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                to={`/fleet-story/${story.slug}`}
                className="min-w-[86%] snap-center overflow-hidden border border-[#C08C45]/40 bg-[#F8F0E5]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#061524]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/85 via-[#061524]/20 to-transparent" />

                  <div
                    className="absolute bottom-3 right-4 text-[3.6rem] leading-none text-white/20"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {story.number}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[0.58rem] font-bold tracking-[0.22em] text-[#A36F2C]">
                    {story.eyebrow}
                  </div>

                  <h2
                    className="mt-2 text-[1.45rem] font-semibold leading-[1.05] text-[#071F35]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {story.title}
                  </h2>

                  <div
                    className="mt-2 text-[0.9rem] italic leading-[1.4] text-[#9A692F]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {story.subtitle}
                  </div>

                  <p className="mt-4 text-[0.82rem] leading-[1.6] text-[#4A4742]">
                    {story.description}
                  </p>

                  <div className="mt-5 border-t border-[#6D5333]/20 pt-4 text-[0.6rem] font-bold tracking-[0.12em] text-[#A36F2C]">
                    READ THE STORY →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-5 md:hidden">
            <button
              type="button"
              onClick={() => scrollTo(active - 1)}
              className="border border-[#A36F2C] px-4 py-2 text-[#A36F2C]"
            >
              ←
            </button>

            <div className="text-[0.62rem] font-bold tracking-[0.2em] text-[#756959]">
              {active + 1} / {stories.length}
            </div>

            <button
              type="button"
              onClick={() => scrollTo(active + 1)}
              className="border border-[#A36F2C] px-4 py-2 text-[#A36F2C]"
            >
              →
            </button>
          </div>

          {/* DESKTOP */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
            {stories.map((story) => (
              <Link
                key={story.slug}
                to={`/fleet-story/${story.slug}`}
                className="group overflow-hidden border border-[#A68459]/35 bg-[#F8F0E5] transition duration-300 hover:-translate-y-1 hover:border-[#C08C45]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#061524]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061524] via-[#061524]/30 to-transparent" />

                  <div
                    className="absolute right-4 top-3 text-[4rem] leading-none text-white/20"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {story.number}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-[0.58rem] font-bold tracking-[0.22em] text-[#C08C45]">
                      {story.eyebrow}
                    </div>

                    <h2
                      className="mt-2 text-[1.35rem] font-semibold leading-[1.04] text-[#F0E7D6]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {story.title}
                    </h2>

                    <div
                      className="mt-2 text-[0.82rem] italic leading-[1.4] text-[#D2AE75]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {story.subtitle}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[0.8rem] leading-[1.6] text-[#4A4742]">
                    {story.description}
                  </p>

                  <div className="mt-4 border-t border-[#6D5333]/20 pt-4 text-[0.6rem] font-bold tracking-[0.12em] text-[#A36F2C]">
                    READ THE STORY →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ====================================================== */}
      <section className="bg-[#071421] px-5 py-9 text-[#E6DCC8] md:px-8 md:py-11">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <div className="text-[0.62rem] font-bold tracking-[0.26em] text-[#C08C45]">
            THE STORY CONTINUES
          </div>

          <h2
            className="mt-3 text-[1.9rem] font-semibold leading-[1.04] sm:text-[2.35rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            HISTORY BEHIND THE NAME.
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[0.88rem] leading-[1.6] text-[#C9C2B7]">
            These stories are the reason the names on the bags matter. Explore
            the history, then see how each one carries forward into the coffee.
          </p>

          <Link
            to="/store"
            className="mt-6 inline-flex h-[46px] items-center justify-center bg-[#C08C45] px-7 text-[0.68rem] font-bold tracking-[0.11em] text-black transition hover:bg-[#D7A95D]"
          >
            SHOP THE FLEET
          </Link>
        </div>
      </section>
    </main>
  );
}