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

type Story = (typeof stories)[number];

function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      to={`/fleet-story/${story.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-[#C08C45]/30 bg-[#F3EBDD] transition duration-300 hover:border-[#C08C45]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08C45]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#071F35]">
        <img
          src={story.image}
          alt={story.subtitle}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/65 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 text-[0.63rem] font-bold tracking-[0.2em] text-[#F3EBDD]">
          {story.eyebrow}
        </span>
        <span
          className="absolute right-3 top-2 text-[2.3rem] font-bold leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {story.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-3">
        <h2
          className="text-[1rem] font-semibold leading-[1.15] text-[#071F35] lg:text-[1.08rem]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {story.title}
        </h2>
        <p
          className="mt-1 text-[0.73rem] italic leading-[1.3] text-[#805C32]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {story.subtitle}
        </p>
        <p className="mt-2 flex-1 text-[0.76rem] leading-[1.45] text-[#514B43] line-clamp-2">
          {story.description}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-[#071F35]/15 pt-2 text-[0.6rem] font-bold tracking-[0.11em] text-[#071F35]">
          EXPLORE THE STORY
          <span className="text-base text-[#A87838] transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FleetHistoryPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const next = ((index % stories.length) + stories.length) % stories.length;
    cardRefs.current[next]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(next);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;
    let nearest = 0;
    let distance = Infinity;
    cardRefs.current.forEach((element, index) => {
      if (!element) return;
      const cardCenter = element.offsetLeft + element.clientWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < distance) {
        nearest = index;
        distance = diff;
      }
    });
    setActive(nearest);
  };

  return (
    <main className="min-h-screen bg-[#071F35] pt-4 text-[#F3EBDD] md:pt-5">
      {" "}
      <section className="relative overflow-hidden border-b border-[#C08C45]/20">
        <img
          src="/maps-books.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F35]/65 to-[#071F35]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-3 pt-3 text-center md:px-8 md:pb-4 md:pt-3">
          <p className="text-[0.59rem] font-bold tracking-[0.25em] text-[#C08C45]">
            OLD IRONSIDES HISTORY
          </p>
          <h1
            className="mx-auto mt-1.5 max-w-[1100px] text-[1.8rem] font-semibold leading-[1.12] text-[#F3EBDD] sm:text-[2.2rem] lg:text-[2.55rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            THE HISTORY BEHIND THE FLEET
          </h1>
          <div className="mx-auto mt-2 h-px w-12 bg-[#C08C45]/75" />
          <p className="mx-auto mt-2 max-w-[900px] text-[0.8rem] leading-[1.4] text-[#D5CEC4] sm:text-[0.86rem]">
            Four stories behind the roasts. Discover the people, battles, and
            craftsmanship that made Old Ironsides legendary.
          </p>
        </div>
      </section>
      <section className="relative bg-[#F3EBDD] px-5 pb-8 pt-6 text-[#071F35] md:px-8 md:pb-10 md:pt-7">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-3 flex items-center justify-between border-b border-[#071F35]/20 pb-2">
            <p className="text-[0.62rem] font-bold tracking-[0.18em] text-[#94672F]">
              FOUR CHAPTERS
            </p>
            <p className="text-[0.65rem] tracking-[0.08em] text-[#071F35]/65">
              SELECT A STORY TO EXPLORE
            </p>
          </div>

          <div className="hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 md:hidden"
          >
            {stories.map((story, index) => (
              <div
                key={story.slug}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="w-[82%] max-w-[360px] shrink-0 snap-center sm:w-[54%]"
              >
                <StoryCard story={story} />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-5 md:hidden">
            <button
              type="button"
              aria-label="Previous story"
              onClick={() => scrollTo(active - 1)}
              className="border border-[#071F35]/40 bg-[#071F35] px-4 py-2 text-[#F3EBDD] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08C45]"
            >
              ←
            </button>
            <span className="text-[0.7rem] tracking-[0.18em] text-[#D5CEC4]">
              {active + 1} / {stories.length}
            </span>
            <button
              type="button"
              aria-label="Next story"
              onClick={() => scrollTo(active + 1)}
              className="border border-[#071F35]/40 bg-[#071F35] px-4 py-2 text-[#F3EBDD] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08C45]"
            >
              →
            </button>
          </div>
        </div>
      </section>
      <section className="border-t border-[#C08C45]/20 bg-[#061524] px-5 py-5 text-center md:px-8 md:py-6">
        <div className="mx-auto max-w-[800px]">
          <p className="text-[0.58rem] font-bold tracking-[0.2em] text-[#C08C45]">
            THE STORY CONTINUES
          </p>
          <h2
            className="mt-1.5 text-[1.4rem] font-semibold text-[#F3EBDD] md:text-[1.7rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            HISTORY BEHIND THE NAME.
          </h2>
          <p className="mx-auto mt-2 max-w-[580px] text-[0.82rem] leading-[1.45] text-[#D5CEC4]">
            These stories are why the names on our bags matter. Discover the
            history, then experience the coffee.
          </p>
          <Link
            to="/store"
            className="mt-3 inline-flex min-h-[42px] items-center justify-center bg-[#F3EBDD] px-7 text-[0.7rem] font-bold tracking-[0.12em] text-[#071F35] transition hover:bg-[#E6DCC8]"
          >
            SHOP THE FLEET
          </Link>
        </div>
      </section>
    </main>
  );
}
