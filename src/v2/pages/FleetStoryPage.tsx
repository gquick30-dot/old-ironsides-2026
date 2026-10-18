import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Story = {
  roast: string;
  heading: string;
  date: string;
  image: string;
  intro: string;
  chapterHeading: string;
  chapters: {
    label: string;
    title: string;
    text: string;
    image: string;
    caption: string;
  }[];
  full: string[];
};

const stories: Record<string, Story> = {
  flagship: {
    roast: "Flagship",
    heading: "A Navy for a Young Nation",
    date: "1794–1797",
    image: "/Flagship-web.jpg",
    intro:
      "America had won its independence, but its merchant ships remained vulnerable at sea. George Washington understood that a nation could not safeguard its future without a navy. His decision to authorize six new frigates helped bring USS Constitution into existence.",
    chapterHeading: "The Men Behind the Mission",
    chapters: [
      {
        label: "THE VISION",
        title: "George Washington",
        image: "/washington-cannon.jpg",
        caption: "President George Washington",
        text: "In 1794, Washington signed the Naval Act authorizing six frigates. Constitution would become one of the original six ships of the new American Navy.",
      },
      {
        label: "THE LEADERSHIP",
        title: "Commodore John Barry",
        image: "/barry-ship.jpg",
        caption: "Commodore John Barry",
        text: "A veteran naval commander and the first commissioned officer of the United States Navy, Barry helped establish the professional foundation of the new service.",
      },
    ],
    full: [
      "Following the Revolution, the United States faced a difficult reality. American merchant ships were exposed to foreign interference, and the young republic had limited naval power to defend its trade.",
      "President George Washington supported the Naval Act of 1794, which authorized the construction of six frigates, including USS Constitution. The ships represented a serious commitment to protecting American commerce and asserting independence at sea.",
      "Commodore John Barry brought the experience of the Revolutionary War to the new Navy. His leadership and standards helped shape the service in its earliest years.",
      "Constitution was launched in Boston in 1797. Her story began with the belief that American independence had to be defended beyond the shoreline.",
    ],
  },
  "baptism-by-fire": {
    roast: "Baptism by Fire",
    heading: "The Birth of Old Ironsides",
    date: "August 19, 1812",
    image: "/baptism-web.jpg",
    intro:
      "Off the coast of Nova Scotia, USS Constitution met the British frigate HMS Guerriere. The battle was short, violent, and decisive. Constitution's victory established her reputation and gave Americans a new name to celebrate: Old Ironsides.",
    chapterHeading: "The Clash at Sea",
    chapters: [
      {
        label: "THE AMERICAN CAPTAIN",
        title: "Isaac Hull",
        image: "/capt-hull.jpeg",
        caption: "Captain Isaac Hull",
        text: "Hull maneuvered Constitution into position to deliver powerful broadsides. His crew's performance turned an uncertain encounter into a memorable American victory.",
      },
      {
        label: "THE BRITISH CAPTAIN",
        title: "James Richard Dacres",
        image: "/james-surrender.jpeg",
        caption: "Dacres surrenders to Hull",
        text: "Dacres commanded Guerriere. After his ship was dismasted and could no longer fight effectively, he surrendered to Constitution.",
      },
    ],
    full: [
      "On August 19, 1812, USS Constitution engaged HMS Guerriere in the Atlantic off Nova Scotia. Captain Isaac Hull commanded Constitution, while Captain James Richard Dacres led Guerriere.",
      "The ships exchanged broadsides at close range. Constitution's heavy guns badly damaged Guerriere, and the British ship lost crucial masts and rigging.",
      "Guerriere surrendered after the engagement. Reports of enemy shot bouncing from Constitution's thick hull helped popularize the nickname Old Ironsides.",
      "The victory gave the young United States a much-needed morale boost during the War of 1812 and cemented Constitution's place in American naval history.",
    ],
  },
  "java-action": {
    roast: "The Java Action",
    heading: "Victory Off the Coast of Brazil",
    date: "December 29, 1812",
    image: "/java-web.jpg",
    intro:
      "Only months after defeating Guerriere, USS Constitution faced HMS Java off Brazil. Both ships suffered punishing damage, and Constitution's captain was wounded, but the American crew prevailed in another defining battle.",
    chapterHeading: "Two Captains, One Fierce Battle",
    chapters: [
      {
        label: "THE AMERICAN CAPTAIN",
        title: "William Bainbridge",
        image: "/bainbridge-java.jpg",
        caption: "Captain William Bainbridge",
        text: "Bainbridge continued directing Constitution despite being wounded during the action. His crew overcame damage to their ship and defeated Java.",
      },
      {
        label: "THE BRITISH CAPTAIN",
        title: "Henry Lambert",
        image: "/lambert-pic.jpg",
        caption: "Henry Lambert, representative image",
        text: "Lambert led Java through a fierce engagement and suffered a mortal wound. He died several days after the battle in Brazil.",
      },
    ],
    full: [
      "On December 29, 1812, USS Constitution fought HMS Java off the coast of Brazil. William Bainbridge commanded Constitution; Henry Lambert commanded Java.",
      "The ships traded heavy cannon fire. Constitution sustained serious damage, including to her steering, while Java lost masts and suffered extensive casualties.",
      "Bainbridge was wounded but maintained command. Java eventually surrendered after she was left unable to continue the fight.",
      "The Americans burned Java after the engagement. Constitution's second celebrated single-ship victory strengthened her reputation and American confidence at sea.",
    ],
  },
  "oak-and-copper": {
    roast: "Oak & Copper",
    heading: "Built to Endure",
    date: "1794 to the Present",
    image: "/ironship.jpg",
    intro:
      "USS Constitution was designed to be exceptionally strong without sacrificing speed. Dense live oak framed her hull, while copper sheathing protected her underwater surfaces. Generations later, the same spirit of craftsmanship helped preserve her.",
    chapterHeading: "Strength Above and Below",
    chapters: [
      {
        label: "THE STRUCTURE",
        title: "American Live Oak",
        image: "/ship-hull.jpg",
        caption: "USS Constitution, Philadelphia Navy Yard, c. 1875",
        text: "Naval architect Joshua Humphreys designed a powerful frigate. Tough live oak timbers helped give Constitution the strength that would become central to her legend.",
      },
      {
        label: "THE PROTECTION",
        title: "Copper Beneath the Water",
        image: "/ship-restore.jpeg",
        caption: "USS Constitution restoration, Boston Navy Yard, c. 1930",
        text: "Copper sheathing helped shield the underwater hull from marine growth and damage. Later restoration efforts sustained the ship through generations of changing times.",
      },
    ],
    full: [
      "Naval architect Joshua Humphreys envisioned frigates large enough to challenge comparable warships while fast enough to avoid stronger fleets.",
      "Constitution's structure included dense live oak, valued for its durability and strength. Copper sheathing below the waterline helped protect the hull from marine growth.",
      "Launched in Boston in 1797, Constitution served the United States for decades. Over time, changing technology and age threatened her future.",
      "Public affection and successive restoration campaigns helped preserve Old Ironsides. She remains a living connection to early American naval craftsmanship.",
    ],
  },
};

export default function FleetStoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? stories[slug] : undefined;
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setExpanded(false);
  }, [slug]);
  if (!story)
    return (
      <main className="min-h-[60vh] bg-[#F3EBDD] px-6 py-24 text-center text-[#071F35]">
        <h1 className="font-cinzel text-3xl">Story not found</h1>
        <Link to="/fleet-history" className="mt-6 inline-block underline">
          Return to fleet history
        </Link>
      </main>
    );

  return (
    <main className="bg-[#F3EBDD] pt-10 text-[#071F35] md:pt-14">
      <section className="border-b border-[#C08C45]/25 bg-[#F3EBDD]">
        <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-7 md:px-8 md:pb-14 md:pt-10">
          <Link
            to="/fleet-history"
            className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#94672F] hover:text-[#071F35]"
          >
            ← All Historical Stories
          </Link>
          <div className="mt-6 grid items-center gap-7 md:grid-cols-[0.88fr_1.12fr] md:gap-12">
            <div className="mx-auto w-full max-w-[420px]">
              <img
                src={story.image}
                alt={`Historical ship artwork for ${story.roast}`}
                className="block h-auto w-full"
              />
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#9D6B31]">
                The History Behind the Roast
              </p>
              <div className="mt-3 h-px w-11 bg-[#C08C45]" />
              <h1 className="mt-5 font-cinzel text-[2.1rem] font-semibold leading-[1.08] sm:text-[2.7rem] lg:text-[3.15rem]">
                {story.heading}
              </h1>
              <p className="mt-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-[#9D6B31]">
                {story.date}
              </p>
              <p className="mt-5 max-w-[570px] text-[0.98rem] leading-[1.8] text-[#423D37]">
                {story.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#the-story"
                  className="inline-flex min-h-[44px] items-center justify-center bg-[#071F35] px-6 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#F3EBDD] hover:bg-[#14354C]"
                >
                  Explore the Story ↓
                </a>
                <Link
                  to={`/roast/${slug}`}
                  className="inline-flex min-h-[44px] items-center justify-center border border-[#071F35] px-6 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#071F35] hover:bg-[#E8DCCB]"
                >
                  Discover the Coffee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="the-story"
        className="bg-[#071F35] px-5 py-10 text-[#F3EBDD] md:px-8 md:py-12"
      >
        <div className="mx-auto max-w-[1120px]">
          <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.23em] text-[#C08C45]">
            A Closer Look
          </p>
          <h2 className="mt-3 text-center font-cinzel text-2xl font-semibold md:text-3xl">
            {story.chapterHeading}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {story.chapters.map((chapter) => (
              <article
                key={chapter.title}
                className="border-t border-[#C08C45]/50 bg-[#102D44] p-4 sm:p-5"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <figure className="w-[100px] shrink-0 sm:w-[125px]">
                    <img
                      src={chapter.image}
                      alt={chapter.caption}
                      loading="lazy"
                      className="block aspect-[4/5] w-full object-cover"
                    />
                    <figcaption className="mt-1.5 text-[0.59rem] leading-snug text-[#B8A994]">
                      {chapter.caption}
                    </figcaption>
                  </figure>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#C08C45]">
                      {chapter.label}
                    </p>
                    <h3 className="mt-2 font-cinzel text-lg text-[#F3EBDD] sm:text-xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-[1.65] text-[#D5CEC4]">
                      {chapter.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded(!expanded)}
              className="border-b border-[#C08C45] pb-1 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#E6C07F] hover:text-white"
            >
              {expanded ? "Close the Full Story ↑" : "Read the Full Story ↓"}
            </button>
          </div>
          {expanded && (
            <div className="mx-auto mt-7 max-w-[800px] space-y-4 border-t border-[#C08C45]/25 pt-7 text-[0.94rem] leading-[1.85] text-[#E6DCC8]">
              {story.full.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#F3EBDD] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1080px] items-center gap-8 border-y border-[#C08C45]/30 py-9 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.23em] text-[#94672F]">
              From History to Coffee
            </p>
            <h2 className="mt-3 font-cinzel text-2xl font-semibold md:text-3xl">
              The {story.roast} Roast
            </h2>
            <p className="mt-3 max-w-[650px] text-[0.93rem] leading-[1.75] text-[#49413A]">
              Every roast in this collection carries a chapter of USS
              Constitution's history. Discover the coffee behind this story.
            </p>
          </div>
          <Link
            to={`/roast/${slug}`}
            className="inline-flex min-h-[48px] items-center justify-center bg-[#071F35] px-8 text-[0.73rem] font-bold uppercase tracking-[0.11em] text-[#F3EBDD] hover:bg-[#14354C]"
          >
            Shop {story.roast} →
          </Link>
        </div>
        <div className="mt-7 text-center">
          <Link
            to="/fleet-history"
            className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#94672F] hover:text-[#071F35]"
          >
            ← Explore All Four Stories
          </Link>
        </div>
      </section>
    </main>
  );
}
