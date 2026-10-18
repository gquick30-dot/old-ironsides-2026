import { useState } from "react";
import { Link } from "react-router-dom";

type RoastProfile = "smooth" | "bold" | "flavored" | "premium";

type Roast = {
  name: string;
  roast: string;
  notes: string;
  slug: string;
  image: string;
  profile: RoastProfile;
  price: number;
  subscription: boolean;
};

const roasts: Roast[] = [
  {
    name: "FLAGSHIP",
    roast: "MEDIUM ROAST",
    notes: "Hazelnut • Warm Spice • Cream",
    slug: "flagship",
    image: "/Flagship Transparent Mockup.png",
    profile: "smooth",
    price: 22,
    subscription: true,
  },
  {
    name: "BAPTISM BY FIRE",
    roast: "DARK ROAST",
    notes: "Chocolate • Molasses • Smoke",
    slug: "baptism-by-fire",
    image: "/Baptism By Fire Transparent .png",
    profile: "bold",
    price: 22,
    subscription: true,
  },
  {
    name: "THE JAVA ACTION",
    roast: "MEDIUM ROAST",
    notes: "Hazelnut • Caramel • Red Apple",
    slug: "java-action",
    image: "/Java Action Transparent.png",
    profile: "smooth",
    price: 22,
    subscription: true,
  },
  {
    name: "BLACK SALVO",
    roast: "COFFEE BLEND",
    notes: "Vanilla • Cocoa • Almond",
    slug: "black-salvo",
    image: "/black-salvo-emblem.png",
    profile: "smooth",
    price: 22,
    subscription: true,
  },
  {
    name: "OAK & COPPER",
    roast: "BOURBON BARREL AGED",
    notes: "Vanilla • Caramel • Oak",
    slug: "oak-and-copper",
    image: "/Oak&Copper Bag Transparent.png",
    profile: "premium",
    price: 24.99,
    subscription: false,
  },
  {
    name: "BRASS MONKEY",
    roast: "FLAVORED ROAST",
    notes: "Pecan • Brown Sugar • Spice",
    slug: "brass-monkey",
    image: "/Brass Monkey Transparent Bag.png",
    profile: "flavored",
    price: 22,
    subscription: true,
  },
];

const compassPoints: {
  id: RoastProfile;
  label: string;
  position: "north" | "south" | "east" | "west";
}[] = [
  { id: "bold", label: "DARK & BOLD", position: "north" },
  { id: "smooth", label: "SMOOTH & BALANCED", position: "south" },
  { id: "flavored", label: "SWEET & FLAVORED", position: "east" },
  { id: "premium", label: "PREMIUM SELECTION", position: "west" },
];

function CompassRose() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#C08C45"
        strokeWidth="0.8"
        opacity="0.75"
      />

      <circle
        cx="50"
        cy="50"
        r="32"
        stroke="#C08C45"
        strokeWidth="0.6"
        opacity="0.35"
      />

      <path
        d="M50 4V16 M50 84V96 M4 50H16 M84 50H96"
        stroke="#D7B376"
        strokeWidth="1.3"
      />

      <path d="M50 10L57 43L50 50L43 43Z" fill="#E6C07F" />
      <path d="M50 90L57 57L50 50L43 57Z" fill="#956627" />
      <path d="M90 50L57 43L50 50L57 57Z" fill="#C08C45" />
      <path d="M10 50L43 43L50 50L43 57Z" fill="#E6C07F" />

      <path
        d="M50 50L72 28L57 50Z
           M50 50L28 28L43 50Z
           M50 50L72 72L57 50Z
           M50 50L28 72L43 50Z"
        fill="#A5783C"
        opacity="0.6"
      />

      <circle
        cx="50"
        cy="50"
        r="6"
        fill="#071F35"
        stroke="#E6C07F"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="2" fill="#E6C07F" />
    </svg>
  );
}

export default function FleetSection() {
  const [selectedProfile, setSelectedProfile] = useState<RoastProfile | null>(
    null
  );

  const displayedRoasts = selectedProfile
    ? [
        ...roasts.filter((item) => item.profile === selectedProfile),
        ...roasts.filter((item) => item.profile !== selectedProfile),
      ]
    : roasts;

  const matchCount = selectedProfile
    ? roasts.filter((item) => item.profile === selectedProfile).length
    : 0;

  const activeLabel = compassPoints.find(
    (point) => point.id === selectedProfile
  )?.label;

  function selectProfile(profile: RoastProfile) {
    setSelectedProfile((current) => (current === profile ? null : profile));
  }

  return (
    <section className="overflow-hidden bg-[#F1E8DA] px-4 py-7 text-[#102942] sm:px-6 md:py-9 xl:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* INTRO AND COMPASS */}
        <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-6">
          {/* SECTION INTRO */}
          <div className="min-w-0">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#A36F2C]">
              THE OLD IRONSIDES FLEET
            </p>

            <h2
              className="mt-2 text-[2rem] leading-[1.08] text-[#102942] sm:text-[2.6rem] xl:text-[2.9rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              FIND YOUR ROAST.
            </h2>

            {/* MOBILE DESCRIPTION ONLY */}
            <p className="mt-3 max-w-[450px] font-serif text-[0.9rem] leading-[1.45] text-[#625D56] sm:text-[1rem] lg:hidden">
              Follow the compass to your perfect cup.
            </p>
          </div>

          {/* INTERACTIVE NAVAL COMPASS */}
          <div className="relative min-w-0 overflow-hidden border border-[#A4773A] bg-[#071F35] shadow-[0_4px_0_#C9B99E,0_9px_18px_rgba(16,35,51,0.10)]">
            {/* SUBTLE BACKGROUND LIGHTING */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_65%_50%,rgba(46,78,103,0.28),transparent_72%)]" />

            {/* DESKTOP GUIDE INFORMATION */}
            <div className="absolute inset-y-0 left-0 z-10 hidden w-[30%] translate-x-[15%] flex-col justify-center border-r border-[#C08C45]/35 px-5 lg:flex xl:px-7">
              <p className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-[#C08C45]">
                THE ROAST GUIDE
              </p>

              <div className="mt-3 h-px w-12 bg-[#C08C45]/65" />

              <p className="mt-3 max-w-[230px] font-serif text-[0.88rem] leading-[1.45] text-[#F0E7D5] xl:text-[1rem]">
                Follow the compass to your perfect cup.
              </p>
            </div>

            {/* COMPASS INTERACTION AREA */}
            <div className="relative mx-auto h-[166px] w-full max-w-[640px] sm:h-[178px] lg:ml-auto lg:mr-0 lg:h-[175px] lg:w-[70%] lg:max-w-none">
              {/* COMPASS ROSE */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 sm:h-[108px] sm:w-[108px] lg:h-[112px] lg:w-[112px]">
                <CompassRose />
              </div>

              {/* FOUR INTERACTIVE DIRECTIONS */}
              {compassPoints.map((point) => {
                const selected = selectedProfile === point.id;

                const positions = {
                  north: "left-1/2 top-1.5 w-[43%] -translate-x-1/2",
                  south: "bottom-1.5 left-1/2 w-[46%] -translate-x-1/2",
                  west: "right-[calc(50%+56px)] top-1/2 w-[24%] -translate-y-1/2 sm:right-[calc(50%+68px)] sm:w-[23%]",
                  east: "left-[calc(50%+56px)] top-1/2 w-[24%] -translate-y-1/2 sm:left-[calc(50%+68px)] sm:w-[23%]",
                };

                return (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => selectProfile(point.id)}
                    aria-pressed={selected}
                    aria-label={`Find ${point.label.toLowerCase()} coffees`}
                    className={`absolute z-10 flex min-h-[44px] items-center justify-center px-1 py-1 text-center text-[0.57rem] font-bold leading-[1.25] tracking-[0.02em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C07F] sm:px-2 sm:text-[0.66rem] ${
                      positions[point.position]
                    } ${
                      selected
                        ? "bg-[#EAD9BB] text-[#102942] shadow-[0_3px_0_#A8732C]"
                        : "bg-transparent text-[#F0E7D5] hover:bg-[#183B54] hover:text-[#E6C07F]"
                    }`}
                  >
                    <span
                      className={`border-b pb-1 transition-colors ${
                        selected ? "border-[#A8732C]" : "border-transparent"
                      }`}
                    >
                      {point.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SELECTED MATCH STATUS ONLY */}
        {selectedProfile && (
          <div
            aria-live="polite"
            className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#C7B79D] pb-3"
          >
            <div>
              <p className="text-[0.59rem] font-bold uppercase tracking-[0.14em] text-[#956525]">
                YOUR ROAST MATCHES
              </p>

              <p className="mt-1 font-serif text-[0.85rem] text-[#344253]">
                {matchCount} {matchCount === 1 ? "coffee" : "coffees"} matching{" "}
                {activeLabel?.toLowerCase()}.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProfile(null)}
              className="text-[0.64rem] font-bold uppercase tracking-[0.06em] text-[#956525] underline underline-offset-4 hover:text-[#102942]"
            >
              VIEW ALL ROASTS ↗
            </button>
          </div>
        )}

        {/* ROAST PRODUCT CARDS */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-5">
          {displayedRoasts.map((item) => {
            const matched =
              selectedProfile !== null && item.profile === selectedProfile;

            const subscriptionPrice = item.price * 0.85;

            return (
              <Link
                key={item.slug}
                to={`/roast/${item.slug}`}
                className={`group relative block min-w-0 overflow-hidden border transition-all duration-300 hover:-translate-y-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A36F2C] ${
                  matched
                    ? "border-[#C08C45] bg-[#092940] shadow-[0_5px_0_#A8732C,0_12px_24px_rgba(16,35,51,0.17)]"
                    : "border-[#CCBCA6] bg-[#FBF7F0] shadow-[0_4px_0_#D6C7B4,0_7px_17px_rgba(40,27,16,0.06)] hover:border-[#B98238] hover:shadow-[0_6px_0_#C5AA82,0_13px_25px_rgba(40,27,16,0.12)]"
                }`}
              >
                {matched && (
                  <div className="absolute inset-y-0 left-0 z-10 w-[3px] bg-[#C08C45]" />
                )}

                <div className="grid min-h-[140px] grid-cols-[108px_minmax(0,1fr)] sm:grid-cols-[140px_minmax(0,1fr)] md:min-h-[220px] md:grid-cols-[43%_57%]">
                  {/* BAG IMAGE */}
                  <div className="relative flex min-w-0 items-center justify-center overflow-hidden p-2">
                    <div
                      className={`pointer-events-none absolute inset-4 rounded-full blur-2xl ${
                        matched ? "bg-[#F0D6A8]/20" : "bg-[#CDB99E]/18"
                      }`}
                    />

                    <img
                      src={item.image}
                      alt={`${item.name} coffee bag`}
                      loading="lazy"
                      className="relative z-10 max-h-[128px] max-w-full object-contain drop-shadow-[0_10px_9px_rgba(0,0,0,0.20)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.025] sm:max-h-[150px] md:max-h-[218px]"
                    />
                  </div>

                  {/* ROAST DETAILS */}
                  <div className="flex min-w-0 flex-col justify-center py-3 pl-1 pr-3 md:py-4 md:pl-0 md:pr-5">
                    {matched && (
                      <p className="mb-1.5 text-[0.55rem] font-bold uppercase tracking-[0.11em] text-[#E6C07F]">
                        YOUR MATCH
                      </p>
                    )}

                    <p
                      className={`text-[0.56rem] font-bold uppercase tracking-[0.12em] ${
                        matched ? "text-[#D6B884]" : "text-[#9C692C]"
                      }`}
                    >
                      {item.roast}
                    </p>

                    <h3
                      className={`mt-1 text-[1.1rem] font-bold leading-[1.1] md:text-[1.2rem] xl:text-[1.3rem] ${
                        matched ? "text-[#F0E7D5]" : "text-[#102942]"
                      }`}
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {item.name}
                    </h3>

                    <p
                      className={`mt-2 text-[0.74rem] leading-[1.4] md:text-[0.7rem] ${
                        matched ? "text-[#DDD0BE]" : "text-[#716658]"
                      }`}
                    >
                      {item.notes}
                    </p>

                    {/* PRICING */}
                    <div
                      className={`mt-3 border-t pt-2.5 ${
                        matched ? "border-[#C08C45]/40" : "border-[#6D5333]/20"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                        <div>
                          <span
                            className={`text-[0.95rem] font-bold md:text-[1.05rem] ${
                              matched ? "text-[#F0E7D5]" : "text-[#102942]"
                            }`}
                          >
                            ${item.price.toFixed(2)}
                          </span>

                          <span
                            className={`ml-1.5 text-[0.62rem] uppercase tracking-[0.05em] md:text-[0.53rem] ${
                              matched ? "text-[#C5BAA9]" : "text-[#807567]"
                            }`}
                          >
                            ONE-TIME
                          </span>
                        </div>

                        <span
                          className={`text-[0.59rem] font-bold uppercase tracking-[0.04em] md:text-[0.62rem] ${
                            matched ? "text-[#E6C07F]" : "text-[#956525]"
                          }`}
                        >
                          VIEW ROAST →
                        </span>
                      </div>

                      {/* SUBSCRIPTION PRICE */}
                      {item.subscription ? (
                        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span
                            className={`text-[0.7rem] font-bold uppercase tracking-[0.02em] md:text-[0.66rem] ${
                              matched ? "text-[#E6C07F]" : "text-[#A36F2C]"
                            }`}
                          >
                            SUBSCRIBE & SAVE 15%
                          </span>

                          <span
                            className={`text-[0.94rem] font-bold leading-tight md:text-[0.9rem] ${
                              matched ? "text-[#F0E7D5]" : "text-[#102942]"
                            }`}
                          >
                            ${subscriptionPrice.toFixed(2)} / BAG
                          </span>
                        </div>
                      ) : (
                        <p
                          className={`mt-2 text-[0.63rem] font-bold uppercase tracking-[0.045em] ${
                            matched ? "text-[#E6C07F]" : "text-[#956525]"
                          }`}
                        >
                          LIMITED RELEASE • NO DISCOUNTS
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* SHOP LINK */}
        <div className="mt-6 text-center">
          <Link
            to="/store"
            className="inline-flex min-h-[42px] items-center justify-center border-b-2 border-[#A36F2C] px-4 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#102942] transition hover:text-[#A36F2C]"
          >
            SHOP THE COMPLETE FLEET
            <span className="ml-3">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
