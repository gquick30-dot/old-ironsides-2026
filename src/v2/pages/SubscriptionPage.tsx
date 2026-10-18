import { Link } from "react-router-dom";

export type SubscriptionRoast = {
  slug: string;
  title: string;
  subTitle?: string;
  note?: string;
  img?: string;
  canBuy?: boolean;
};

type Props = {
  roasts: SubscriptionRoast[];
};

const schedules = [
  ["01", "CHOOSE YOUR COFFEE", "Pick your favorite roast from the fleet."],
  ["02", "SET YOUR SCHEDULE", "Fresh coffee every 14, 30, or 60 days."],
  ["03", "STAY IN COMMAND", "Manage deliveries, skip, or cancel anytime."],
];

const questions = [
  [
    "Can I change my schedule?",
    "Choose 14, 30, or 60 days when subscribing. Manage future deliveries through your account.",
  ],
  [
    "Can I skip a shipment?",
    "Yes. Manage upcoming deliveries through your subscription account.",
  ],
  [
    "Can I cancel?",
    "Yes. Cancel anytime through your subscription management portal.",
  ],
  [
    "Do discounts stack?",
    "No. Subscribe & Save cannot be combined with first-order promotions.",
  ],
];

export default function SubscriptionPage({ roasts }: Props) {
  const eligibleRoasts = roasts.filter((r) =>
    [
      "flagship",
      "baptism-by-fire",
      "java-action",
      "black-salvo",
      "brass-monkey",
      "oak-and-copper",
    ].includes(r.slug)
  );

  return (
    <main className="bg-[#F3EBDD] text-[#071F35]">
      {/* INTRODUCTION */}
      <section className="border-b border-[#D8C6A9] px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-[#A36F2C]">
            THE OLD IRONSIDES FLEET
          </p>
          <div className="mt-4 grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h1 className="font-['Cinzel'] text-[2.2rem] leading-[1.12] sm:text-[3rem] lg:text-[3.6rem]">
                COFFEE SUBSCRIPTIONS.
                <span className="block text-[#A36F2C]">MADE SIMPLE.</span>
              </h1>
              <p className="mt-5 max-w-[650px] font-serif text-[1.05rem] leading-relaxed text-[#34485B]">
                Your favorite coffee, roasted fresh and delivered on your
                schedule. Save 15% on every eligible recurring order.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#choose-subscription"
                className="inline-flex min-h-[46px] items-center justify-center bg-[#B9873E] px-6 text-center text-[0.73rem] font-bold tracking-[0.08em] text-[#071F35] transition hover:bg-[#D1A058]"
              >
                CHOOSE YOUR COFFEE
              </a>
              <Link
                to="/account"
                className="inline-flex min-h-[46px] items-center justify-center border border-[#071F35] px-6 text-center text-[0.73rem] font-bold tracking-[0.08em] text-[#071F35] transition hover:bg-[#E7DAC7]"
              >
                MANAGE SUBSCRIPTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="border-b border-[#D8C6A9] px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1240px] gap-6 md:grid-cols-3 md:gap-8">
          {schedules.map(([number, heading, detail]) => (
            <div key={number} className="flex items-start gap-4">
              <span className="font-['Cinzel'] text-[1.5rem] text-[#A36F2C]">
                {number}
              </span>
              <div>
                <h2 className="text-[0.76rem] font-bold tracking-[0.09em]">
                  {heading}
                </h2>
                <p className="mt-1 text-[0.82rem] leading-relaxed text-[#625B53]">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION COFFEE */}
      <section
        id="choose-subscription"
        className="scroll-mt-28 bg-[#071F35] px-5 py-12 text-[#F3EBDD] md:px-8 md:py-16"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#C08C45]">
              SUBSCRIBE & SAVE 15%
            </p>
            <h2 className="mt-2 font-['Cinzel'] text-[2rem] leading-tight md:text-[2.7rem]">
              CHOOSE YOUR ROAST.
            </h2>
            <p className="mt-3 text-[0.88rem] text-[#D4CCBF]">
              Select a roast to customize your coffee, preparation, and delivery
              schedule.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {eligibleRoasts.map((roast) => {
              const image = roast.img
                ? roast.img.startsWith("/") || roast.img.startsWith("http")
                  ? roast.img
                  : `/${roast.img}`
                : "/bag.png";

              return (
                <Link
                  key={roast.slug}
                  to={`/roast/${roast.slug}?purchase=sub`}
                  className="group flex min-w-0 flex-col border border-[#B18B54]/35 bg-[#0D2A40] transition hover:border-[#C08C45] hover:bg-[#12334B]"
                >
                  <div className="flex min-h-[165px] items-center justify-center bg-[#F5EDE0] p-4">
                    <img
                      src={image}
                      alt={roast.title}
                      loading="lazy"
                      className="h-[165px] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#C08C45]">
                      {roast.subTitle || "OLD IRONSIDES COFFEE"}
                    </p>
                    <h3 className="mt-2 font-['Cinzel'] text-[1.25rem] leading-tight text-[#F3EBDD]">
                      {roast.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.8rem] leading-relaxed text-[#C8C1B5]">
                      {roast.note ||
                        "Freshly roasted coffee, delivered on your schedule."}
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#B18B54]/30 pt-4">
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#D2BC9C]">
                          {roast.slug === "oak-and-copper"
                            ? "PREMIUM RELEASE • NO DISCOUNT"
                            : "SUBSCRIBE & SAVE 15%"}
                        </p>
                        <p className="mt-1 text-[1.2rem] font-bold text-[#F3EBDD]">
                          {roast.slug === "oak-and-copper"
                            ? "$24.99"
                            : "$18.70"}
                          <span className="text-[0.7rem] font-normal text-[#C8C1B5]">
                            {" "}
                            / 12 oz
                          </span>
                        </p>
                      </div>
                      <span className="text-[0.65rem] font-bold tracking-[0.06em] text-[#D2A45B]">
                        SELECT ROAST →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="mt-5 text-[0.72rem] text-[#B9B0A3]">
            Subscription offer applies to eligible 12 oz coffees only. Oak &
            Copper and sample packs are excluded.
          </p>
        </div>
      </section>

      {/* ACCOUNT AND FAQs */}
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#A36F2C]">
              ALREADY ABOARD?
            </p>
            <h2 className="mt-3 font-['Cinzel'] text-[1.85rem] leading-tight md:text-[2.3rem]">
              YOUR COFFEE.
              <span className="block text-[#A36F2C]">YOUR COMMAND.</span>
            </h2>
            <p className="mt-4 max-w-[430px] text-[0.87rem] leading-relaxed text-[#514D46]">
              Access your account to manage your subscription, review orders,
              and update delivery information.
            </p>
            <Link
              to="/account"
              className="mt-6 inline-flex min-h-[46px] items-center justify-center bg-[#071F35] px-7 text-[0.72rem] font-bold tracking-[0.08em] text-[#F3EBDD] transition hover:bg-[#123B55]"
            >
              MANAGE MY ACCOUNT
            </Link>
          </div>
          <div>
            <h2 className="border-b border-[#C9B99F] pb-3 font-['Cinzel'] text-[1.5rem]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="divide-y divide-[#D6C7B2]">
              {questions.map(([question, answer]) => (
                <details key={question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.86rem] font-bold text-[#071F35] [&::-webkit-details-marker]:hidden">
                    {question}
                    <span className="shrink-0 text-[1.3rem] font-normal text-[#A36F2C] group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[590px] text-[0.83rem] leading-relaxed text-[#625B53]">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-5 text-[0.78rem] text-[#625B53]">
              Need assistance?{" "}
              <a
                className="font-semibold text-[#8A5B25] underline"
                href="mailto:HQ@oldironsidescoffee.org"
              >
                Contact the crew
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
