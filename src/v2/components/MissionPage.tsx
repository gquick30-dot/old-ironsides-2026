import { useEffect } from "react";
import { Link } from "react-router-dom";

const legacyCards = [
  {
    eyebrow: "THE FOUNDERS",
    title: "Washington & Barry",
    body:
      "The vision of George Washington and the leadership of Commodore John Barry helped set the foundation for the Navy and the ship that would become Old Ironsides.",
    link: "/fleet-story/flagship",
    cta: "READ THEIR STORY",
  },
  {
    eyebrow: "THE LEGEND",
    title: "Guerriere & The Birth of Old Ironsides",
    body:
      "Under Captain Isaac Hull, Constitution's victory over HMS Guerriere gave the ship the name that would endure for centuries.",
    link: "/fleet-story/baptism-by-fire",
    cta: "READ THE BATTLE STORY",
  },
  {
    eyebrow: "THE JAVA ACTION",
    title: "Bainbridge vs Java",
    body:
      "Months later, Captain William Bainbridge led Constitution into another brutal engagement, defeating HMS Java off the coast of Brazil.",
    link: "/fleet-story/java-action",
    cta: "READ THE JAVA STORY",
  },
  {
    eyebrow: "THE SHIP",
    title: "Oak, Copper & Preservation",
    body:
      "From Joshua Humphreys' revolutionary design to the generations who later fought to preserve her, the ship herself has a story worth telling.",
    link: "/fleet-story/oak-and-copper",
    cta: "READ THE SHIP'S STORY",
  },
];

const missionPillars = [
  {
    title: "HERITAGE",
    body: "We do not use the name Old Ironsides as decoration. We use it because the history means something.",
  },
  {
    title: "DISCIPLINE",
    body: "The standard behind the brand is consistency, care, and doing things right even when nobody is watching.",
  },
  {
    title: "REMEMBRANCE",
    body: "Every roast is another chance to carry a story forward and keep important history from fading into the background.",
  },
];

export default function MissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F4EBDD] text-[#03111d]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061524] text-[#E6DCC8]">
        <div className="absolute inset-0 bg-[#061524]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061524]/96 via-[#061524]/88 to-[#061524]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/12 via-transparent to-[#061524]/18" />

        <div className="relative mx-auto grid max-w-[1500px] items-stretch lg:grid-cols-[0.92fr_1.08fr]">
          {/* MOBILE IMAGE */}
          <div className="relative order-1 block min-h-[280px] overflow-hidden lg:hidden">
            <img
              src="/hero-ship.png"
              alt="USS Constitution in Boston Harbor"
              className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/88 via-[#061524]/38 to-[#061524]/12" />
          </div>

          {/* LEFT COPY */}
          <div className="relative order-2 flex items-center px-5 py-10 sm:px-7 sm:py-12 md:px-8 lg:order-1 lg:py-16 xl:py-20">
            <div className="max-w-[650px]">
              <div className="text-[0.68rem] font-bold tracking-[0.28em] text-[#C08C45]">
                OUR MISSION
              </div>

              <div className="mt-3 h-[2px] w-12 bg-[#C08C45]" />

              <h1
                className="mt-5 text-[2.5rem] font-semibold leading-[0.95] text-[#F3EBDD] sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.7rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                KEEP THE STORY
                <span className="mt-1 block text-[#C08C45]">
                  SAILING FORWARD.
                </span>
              </h1>

              <p
                className="mt-5 max-w-[580px] text-[1.15rem] italic leading-[1.42] text-[#D8BE93] sm:text-[1.22rem] lg:text-[1.28rem]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Coffee built to honor heritage, service, and the enduring legacy
                of Old Ironsides.
              </p>

              <p className="mt-5 max-w-[610px] text-[0.96rem] leading-[1.7] text-[#E6DCC8] sm:text-[1rem]">
                Old Ironsides Coffee exists to do more than sell coffee. It
                exists to carry forward the history, character, and fighting
                spirit of USS Constitution through a brand built on discipline,
                purpose, and respect for the story behind the name.
              </p>

              <p className="mt-4 max-w-[610px] text-[0.92rem] leading-[1.7] text-[#CFC3B4]">
                The names on our bags come from real ships, real battles, real
                captains, and real moments that helped shape the young United
                States.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/fleet-history"
                  className="inline-flex items-center justify-center bg-[#C08C45] px-6 py-3 text-[0.76rem] font-bold tracking-[0.1em] text-black transition hover:bg-[#D7A95D]"
                >
                  EXPLORE THE HISTORY
                </Link>

                <Link
                  to="/store"
                  className="inline-flex items-center justify-center border border-[#C08C45]/70 px-6 py-3 text-[0.76rem] font-bold tracking-[0.1em] text-[#E6DCC8] transition hover:bg-[#C08C45] hover:text-black"
                >
                  SHOP THE FLEET
                </Link>
              </div>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="relative order-1 hidden min-h-[520px] overflow-hidden lg:block xl:min-h-[590px]">
            <img
              src="/hero-ship.png"
              alt="USS Constitution in Boston Harbor"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#061524]/70" />
          </div>
        </div>
      </section>

      {/* WHY OLD IRONSIDES */}
      <section className="px-5 py-10 md:px-8 md:py-12 xl:py-14">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <div className="text-[0.68rem] font-bold tracking-[0.24em] text-[#A36F2C]">
              MORE THAN A NAME
            </div>

            <h2
              className="mt-2 text-[2.2rem] font-semibold leading-[0.98] text-[#03111d] sm:text-[2.6rem] lg:text-[3rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              WHY OLD IRONSIDES?
            </h2>

            <p className="mt-4 max-w-[560px] text-[0.96rem] leading-[1.7] text-[#24303B]">
              USS Constitution represents endurance, craftsmanship, courage, and
              a refusal to disappear into history. She survived battle, weather,
              neglect, and repeated threats to her existence, yet she remains
              with us.
            </p>

            <p className="mt-4 max-w-[560px] text-[0.96rem] leading-[1.7] text-[#24303B]">
              That is the spirit behind the brand. We use coffee as the vehicle,
              but the larger mission is remembrance. Every roast gives us
              another opportunity to tell a piece of the story and keep the
              legacy alive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            {missionPillars.map((item, index) => (
              <div
                key={item.title}
                className={`border border-[#C08C45]/30 bg-[#F8F0E5] p-5 ${
                  index > 0 ? "sm:border-l-0" : ""
                }`}
              >
                <div className="text-[0.7rem] font-bold tracking-[0.18em] text-[#A36F2C]">
                  {item.title}
                </div>

                <p className="mt-3 text-[0.88rem] leading-[1.6] text-[#3A3F43]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="relative overflow-hidden bg-[#050302] text-[#E6DCC8]">
        <img
          src="/iraq-moon.JPG"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-center opacity-40 md:block"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/35" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-10 md:px-8 md:py-14 xl:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center xl:gap-12">
            {/* TEXT */}
            <div>
              <div className="text-[0.68rem] font-bold tracking-[0.28em] text-[#B5976D]">
                FOUNDER STORY
              </div>

              <div className="mt-3 h-[2px] w-12 bg-[#C08C45]" />

              <h2
                className="mt-5 text-[2.35rem] font-semibold leading-[0.95] text-[#F3EBDD] sm:text-[2.8rem] lg:text-[3.2rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                FROM THE SAND
                <span className="mt-1 block text-[#C08C45]">TO THE SEA.</span>
              </h2>

              <p
                className="mt-5 max-w-[540px] text-[1.05rem] italic leading-[1.45] text-[#D8BE93]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A different kind of service. Same standard.
              </p>

              <p className="mt-5 max-w-[620px] text-[0.95rem] leading-[1.72] text-[#D8D0C4]">
                My service was in the sand, not on the deck. But the code was
                the same: discipline, loyalty, pressure, and the refusal to
                quit.
              </p>

              <p className="mt-4 max-w-[620px] text-[0.95rem] leading-[1.72] text-[#D8D0C4]">
                Old Ironsides Coffee was built from that standard. Not as a
                gimmick. As a way to make coffee with care, consistency, and
                something worth standing behind.
              </p>

              <div className="mt-6 border-l-2 border-[#C08C45] bg-[#130E08]/70 px-5 py-4">
                <div className="text-[0.68rem] font-bold tracking-[0.2em] text-[#E6C07F]">
                  THE STANDARD
                </div>

                <p className="mt-3 text-[0.92rem] leading-[1.7] text-[#E1D7C8]">
                  Serve with purpose. Build with discipline. Deliver something
                  worth standing behind.
                </p>
              </div>
            </div>

            {/* PHOTO COLLAGE */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden border border-[#6D5333]/55 bg-black shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:translate-y-6">
                <img
                  src="/humvee-turret.jpg"
                  alt="Service photo"
                  className="h-[250px] w-full object-cover object-center sm:h-[290px]"
                />
              </div>

              <div className="overflow-hidden border border-[#C08C45]/65 bg-black shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
                <img
                  src="/iraq-self1.JPG"
                  alt="Founder during military service"
                  className="h-[250px] w-full object-cover object-center sm:h-[290px]"
                />
              </div>

              <div className="overflow-hidden border border-[#6D5333]/55 bg-black shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:col-span-2">
                <img
                  src="/iraq-kids.JPG"
                  alt="Founder during service overseas"
                  className="h-[220px] w-full object-cover object-center sm:h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY CARDS */}
      <section className="bg-[#F4EBDD] px-5 py-10 md:px-8 md:py-12 xl:py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[760px]">
            <div className="text-[0.68rem] font-bold tracking-[0.24em] text-[#A36F2C]">
              EXPLORE THE LEGACY
            </div>

            <h2
              className="mt-2 text-[2.2rem] font-semibold leading-[0.98] text-[#03111d] sm:text-[2.7rem] lg:text-[3rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              HISTORY WORTH CARRYING FORWARD.
            </h2>

            <p className="mt-4 max-w-[640px] text-[0.96rem] leading-[1.7] text-[#3E403F]">
              If you want the deeper story, this is where to go. Learn about the
              ship, the people behind her, and the moments that turned Old
              Ironsides into a legend.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:gap-5">
  {legacyCards.map((card) => (
    <Link
      key={card.title}
      to={card.link}
      className="group flex min-h-[230px] flex-col border border-[#C08C45]/35 bg-[#F8F0E5] p-6 shadow-[0_10px_24px_rgba(61,39,19,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C08C45] hover:shadow-[0_16px_32px_rgba(61,39,19,0.10)] md:p-7"
    >
      <div className="text-[0.66rem] font-bold tracking-[0.18em] text-[#A36F2C]">
        {card.eyebrow}
      </div>

      <h3
        className="mt-3 text-[1.5rem] font-semibold leading-[1.05] text-[#03111d] transition group-hover:text-[#8A5B25] md:text-[1.65rem]"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {card.title}
      </h3>

      <p className="mt-4 max-w-[580px] flex-1 text-[0.9rem] leading-[1.65] text-[#43443F]">
        {card.body}
      </p>

      <div className="mt-5 border-t border-[#6D5333]/20 pt-4 text-[0.68rem] font-bold tracking-[0.1em] text-[#8A5B25] transition group-hover:text-[#C08C45]">
        {card.cta}
        <span className="ml-3">→</span>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#061524] px-5 py-10 text-[#E6DCC8] md:px-8 md:py-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 border border-[#C08C45]/35 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[760px]">
            <div className="text-[0.68rem] font-bold tracking-[0.24em] text-[#C08C45]">
              CARRY THE STORY
            </div>

            <h2
              className="mt-2 text-[2rem] font-semibold leading-[1] text-[#F3EBDD] sm:text-[2.4rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              HISTORY IN THE NAME.
              <span className="mt-1 block text-[#C08C45]">
                PURPOSE IN THE BRAND.
              </span>
            </h2>

            <p className="mt-4 text-[0.95rem] leading-[1.7] text-[#D4C8B8]">
              Explore the history if you want the full story. Shop the fleet if
              you are ready to carry a piece of it home.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/fleet-history"
              className="inline-flex items-center justify-center border border-[#C08C45] px-6 py-3 text-[0.76rem] font-bold tracking-[0.1em] text-[#E6C07F] transition hover:bg-[#C08C45] hover:text-black"
            >
              VIEW ALL STORIES
            </Link>

            <Link
              to="/store"
              className="inline-flex items-center justify-center bg-[#C08C45] px-6 py-3 text-[0.76rem] font-bold tracking-[0.1em] text-black transition hover:bg-[#D7A95D]"
            >
              SHOP COFFEE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
