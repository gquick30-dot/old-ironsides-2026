import { useState } from "react";
import { Link } from "react-router-dom";

const stories = [
  {
    slug: "flagship",
    title: "Flagship",
    chapter: "THE BIRTH OF A LEGEND",
    date: "October 21, 1797",
    subtitle: "The Founding of USS Constitution",
    image: "/Flagship-web.jpg",
    roast: "Medium Roast",
    teaser:
      "Built for a young nation's defense. Destined to become an American legend.",
    story:
      "A young nation needed a navy capable of defending its freedom. Under President George Washington, six frigates were authorized, including USS Constitution. Launched in Boston in 1797, she would become one of the most celebrated warships in American history.",
  },
  {
    slug: "baptism-by-fire",
    title: "Baptism by Fire",
    chapter: "THE FIRST GREAT VICTORY",
    date: "August 19, 1812",
    subtitle: "USS Constitution vs HMS Guerriere",
    image: "/baptism-web.jpg",
    roast: "Dark Roast",
    teaser:
      "When British cannonballs struck her hull, a legend earned its name.",
    story:
      "Off the Atlantic coast, Captain Isaac Hull brought Constitution into battle against HMS Guerriere. British cannonballs reportedly bounced from her sturdy oak hull, inspiring the name Old Ironsides. The American victory stunned the Royal Navy and lifted the spirits of a young nation.",
  },
  {
    slug: "java-action",
    title: "The Java Action",
    chapter: "VICTORY ON THE OPEN SEA",
    date: "December 29, 1812",
    subtitle: "USS Constitution vs HMS Java",
    image: "/java-web.jpg",
    roast: "Medium Roast",
    teaser:
      "Off the coast of Brazil, Old Ironsides claimed another decisive victory.",
    story:
      "Off the coast of Brazil, Constitution met the British frigate HMS Java in a fierce engagement. Under Captain William Bainbridge, her crew endured heavy fire before leaving Java dismasted and defeated. Another victory had secured Old Ironsides a lasting place in naval history.",
  },
  {
    slug: "oak-and-copper",
    title: "Oak & Copper",
    chapter: "BUILT TO ENDURE",
    date: "1794–1797",
    subtitle: "The Making of USS Constitution",
    image: "/ironship.jpg",
    roast: "Bourbon Barrel Aged",
    teaser:
      "American oak. Copper sheathing. Built to withstand the test of time.",
    story:
      "Built with an exceptionally strong oak framework and protected below the waterline with copper sheathing, Constitution represented the ambition and craftsmanship of a new American navy. Her construction helped create a warship whose remarkable service continues more than two centuries later.",
  },
];

export default function CoffeeRitualSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const active = stories[activeIndex];

  function selectStory(index: number) {
    setActiveIndex(index);
    setExpanded(false);
  }

  return (
    <section className="bg-[#EDE4D5] text-[#102942]">
      {/* MOBILE HISTORY */}
      <div className="mx-auto max-w-[1150px] px-4 py-7 text-[#102942] sm:px-6 lg:hidden">
        <div className="mb-5">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#A36F2C]">
            THE HISTORY BEHIND THE COFFEE
          </p>

          <h2
            className="mt-2 text-[1.55rem] leading-[1.15] sm:text-[2rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            EVERY ROAST HAS{" "}
            <span className="text-[#A36F2C]">A STORY TO TELL.</span>
          </h2>
        </div>

        <div className="grid grid-cols-[110px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
          <div className="min-w-0">
            <img
              key={active.slug}
              src={active.image}
              alt={`Historical artwork representing ${active.title}`}
              className="block h-auto w-full"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-[#A36F2C] sm:text-[0.64rem]">
              {active.date}
            </p>

            <h3
              className="mt-2 text-[1.2rem] leading-[1.15] sm:text-[1.6rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {active.title}
            </h3>

            <p className="mt-2 font-serif text-[0.79rem] leading-[1.45] text-[#344253] sm:text-[0.9rem]">
              {active.teaser}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls="mobile-expanded-history"
              className="mt-2.5 inline-block text-[0.62rem] font-bold uppercase tracking-[0.07em] text-[#956525] underline underline-offset-4"
            >
              {expanded ? "SHOW LESS ↑" : "READ MORE ↓"}
            </button>
          </div>
        </div>

        {expanded && (
          <div
            id="mobile-expanded-history"
            className="mt-4 border-l-2 border-[#C08C45] pl-4"
          >
            <p className="font-serif text-[0.85rem] leading-[1.6] text-[#344253]">
              {active.story}
            </p>
          </div>
        )}

        <div className="mt-4 border-t border-[#BAAA94] pt-3">
          <p className="font-serif text-[0.8rem] text-[#8C5B26]">
            {active.title} | {active.roast}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              to={`/roast/${active.slug}`}
              className="flex min-h-[42px] items-center justify-center bg-[#102942] px-2 text-center font-serif text-[0.67rem] font-bold text-[#F0E7D5] shadow-[0_3px_0_#8C6334]"
            >
              SHOP THIS ROAST
            </Link>

            <Link
              to={`/fleet-story/${active.slug}`}
              className="flex min-h-[42px] items-center justify-center border border-[#8C6334] bg-[#F8F2E8] px-2 text-center font-serif text-[0.67rem] font-bold text-[#102942] shadow-[0_3px_0_#C5B59C]"
            >
              FULL STORY →
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-[#BAAA94] pt-4">
          <p className="mb-3 text-[0.59rem] font-bold uppercase tracking-[0.17em] text-[#8C5B26]">
            CHOOSE A STORY
          </p>

          <div className="grid grid-cols-2 gap-2">
            {stories.map((story, index) => {
              const selected = activeIndex === index;

              return (
                <button
                  key={story.slug}
                  type="button"
                  onClick={() => selectStory(index)}
                  aria-pressed={selected}
                  className={`min-w-0 border px-3 py-2.5 text-left transition-all hover:-translate-y-0.5 ${
                    selected
                      ? "border-[#A8732C] bg-[#102942] shadow-[0_3px_0_#A8732C]"
                      : "border-[#C9BAA5] bg-[#F8F2E8] shadow-[0_3px_0_#C5B59C]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[0.55rem] font-bold tracking-[0.12em] ${
                        selected ? "text-[#E6C07F]" : "text-[#956525]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={selected ? "text-[#E6C07F]" : "text-[#956525]"}
                    >
                      {selected ? "●" : "↗"}
                    </span>
                  </div>

                  <div
                    className={`mt-1 text-[0.76rem] leading-[1.2] sm:text-[0.88rem] ${
                      selected ? "text-[#F0E7D5]" : "text-[#102942]"
                    }`}
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {story.title}
                  </div>

                  <div
                    className={`mt-1 text-[0.59rem] ${
                      selected ? "text-[#D3C4AE]" : "text-[#625D56]"
                    }`}
                  >
                    {story.date}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION: NEW DESIGN */}
      <div className="mx-auto hidden max-w-[1320px] px-8 py-6 lg:block xl:px-12">
        {/* EDITORIAL HEADING */}
        <div className="mb-4 flex items-end justify-between gap-8">
          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.24em] text-[#A36F2C]">
              THE HISTORY BEHIND THE COFFEE
            </p>

            <h2
              className="mt-2 text-[2.2rem] leading-[1.12] text-[#102942] xl:text-[2.45rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              EVERY ROAST HAS{" "}
              <span className="text-[#A36F2C]">A STORY TO TELL.</span>
            </h2>
          </div>
        </div>

        {/* TWO DISTINCT CONTENT AREAS */}
        <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center gap-10 xl:gap-14">
          {/* LEFT: HISTORICAL ARTWORK AND STORY */}
          <div className="grid min-w-0 grid-cols-[205px_minmax(0,1fr)] items-center gap-6 xl:grid-cols-[225px_minmax(0,1fr)] xl:gap-8">
            {/* ARTWORK */}
            <div className="min-w-0">
              <img
                key={active.slug}
                src={active.image}
                alt={`Historical artwork representing ${active.title}`}
                className="block h-auto w-full shadow-[0_8px_18px_rgba(16,41,66,0.14)]"
              />
            </div>

            {/* HISTORY CONTENT */}
            <div className="min-w-0">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.17em] text-[#A36F2C]">
                {active.date}
              </p>

              <h3
                className="mt-2 text-[1.65rem] leading-[1.12] text-[#102942] xl:text-[1.9rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {active.title}
              </h3>

              <p className="mt-3 font-serif text-[0.94rem] leading-[1.5] text-[#344253]">
                {active.teaser}
              </p>

              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                aria-controls="desktop-expanded-history"
                className="mt-3 text-left text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#9B6525] underline underline-offset-4 transition hover:text-[#102942]"
              >
                {expanded ? "SHOW LESS ↑" : "READ MORE ↓"}
              </button>

              {expanded && (
                <div
                  id="desktop-expanded-history"
                  className="mt-3 border-l-2 border-[#B57A31] pl-3"
                >
                  <p className="font-serif text-[0.82rem] leading-[1.5] text-[#43505B]">
                    {active.story}
                  </p>
                </div>
              )}

              <div className="mt-4 border-t border-[#BAAA94] pt-3">
                <p className="font-serif text-[0.84rem] text-[#8C5B26]">
                  {active.title} | {active.roast}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    to={`/roast/${active.slug}`}
                    className="inline-flex min-h-[39px] items-center justify-center bg-[#A8732C] px-4 font-serif text-[0.69rem] font-bold text-white transition hover:bg-[#8E5D24]"
                  >
                    SHOP THIS ROAST
                  </Link>

                  <Link
                    to={`/fleet-story/${active.slug}`}
                    className="inline-flex min-h-[39px] items-center justify-center border border-[#A8732C] px-4 font-serif text-[0.69rem] font-bold text-[#8C5B26] transition hover:bg-[#E0D2BC]"
                  >
                    FULL STORY →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE STORY SELECTION */}
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-3">
              <p className="whitespace-nowrap text-[0.65rem] font-bold uppercase tracking-[0.17em] text-[#8C5B26]">
                EXPLORE THE STORIES
              </p>
              <div className="h-px flex-1 bg-[#C5AD8A]" />
            </div>

            <div className="grid grid-cols-2 gap-3 xl:gap-4">
              {stories.map((story, index) => {
                const selected = activeIndex === index;

                return (
                  <button
                    key={story.slug}
                    type="button"
                    onClick={() => selectStory(index)}
                    aria-pressed={selected}
                    className={`group relative flex min-h-[112px] min-w-0 flex-col justify-between border px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8732C] xl:min-h-[125px] xl:px-5 ${
                      selected
                        ? "border-[#A8732C] bg-[#102942] shadow-[0_5px_0_#A8732C]"
                        : "border-[#C9BAA5] bg-[#F8F2E8] shadow-[0_4px_0_#C5B59C] hover:border-[#A8732C] hover:bg-white hover:shadow-[0_7px_0_#B89C75]"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`text-[0.61rem] font-bold tracking-[0.15em] ${
                          selected ? "text-[#E6C07F]" : "text-[#A36F2C]"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-[0.8rem] ${
                          selected ? "text-[#E6C07F]" : "text-[#A36F2C]"
                        }`}
                      >
                        {selected ? "●" : "↗"}
                      </span>
                    </div>

                    <div className="mt-2">
                      <h4
                        className={`text-[0.92rem] leading-[1.2] xl:text-[1.02rem] ${
                          selected ? "text-[#F0E7D5]" : "text-[#102942]"
                        }`}
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {story.title}
                      </h4>

                      <p
                        className={`mt-2 text-[0.65rem] ${
                          selected ? "text-[#D3C4AE]" : "text-[#756A5C]"
                        }`}
                      >
                        {story.date}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-[0.72rem] italic text-[#756752]">
              Select a chapter to discover the history behind the roast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
