import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "ORDER",
    body: "Your order joins our upcoming small-batch roasting schedule.",
  },
  {
    number: "02",
    title: "ROAST",
    body: "Coffee is roasted every Monday and Thursday.",
  },
  {
    number: "03",
    title: "REST",
    body: "Freshly roasted beans are given time to develop before shipping.",
  },
  {
    number: "04",
    title: "PACK",
    body: "Coffee is carefully packaged and prepared for fulfillment.",
  },
  {
    number: "05",
    title: "SHIP",
    body: "Your coffee heads out fresh, without months of warehouse storage.",
  },
];

export default function RoastingProcessPage() {
  return (
    <main className="overflow-hidden bg-[#F3EBDD] text-[#071F35]">
      {/* ============================================
          HERO - REAL ROASTERY
      ============================================ */}
   <section className="grid lg:grid-cols-[43%_57%]">
        <div className="flex items-center bg-[#F3EBDD] px-6 py-10 sm:px-10 lg:px-12 xl:px-16 xl:py-16">
          <div className="max-w-[560px]">
            <div className="text-[0.65rem] font-bold tracking-[0.24em] text-[#A36F2C]">
              INSIDE THE ROASTERY
            </div>

            <div className="mt-3 h-[2px] w-12 bg-[#C08C45]" />

            <h1
              className="mt-5 text-[2.45rem] leading-[1.06] text-[#071F35] sm:text-[3rem] xl:text-[3.8rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              REAL COFFEE.
              <span className="mt-1 block text-[#A36F2C]">
                REAL ROAST DAYS.
              </span>
            </h1>

            <p className="mt-5 max-w-[490px] font-serif text-[1rem] leading-[1.65] text-[#44413D] md:text-[1.1rem]">
              Every Monday and Thursday, our coffee is roasted in small batches
              with a focus on freshness, consistency, and the quality of every
              cup.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#C08C45]/40 pt-5">
              <div>
                <div className="text-[0.68rem] font-bold tracking-[0.16em] text-[#9C692C]">
                  MONDAY
                </div>
                <div className="mt-1 text-[0.82rem] text-[#071F35]">
                  Roast Day
                </div>
              </div>

              <div>
                <div className="text-[0.68rem] font-bold tracking-[0.16em] text-[#9C692C]">
                  THURSDAY
                </div>
                <div className="mt-1 text-[0.82rem] text-[#071F35]">
                  Roast Day
                </div>
              </div>

              <div>
                <div className="text-[0.68rem] font-bold tracking-[0.16em] text-[#9C692C]">
                  SMALL BATCHES
                </div>
                <div className="mt-1 text-[0.82rem] text-[#071F35]">
                  Roasted to Order
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[290px] overflow-hidden bg-[#D9CCB8] sm:h-[380px] lg:h-auto lg:min-h-[440px]">
          <img
            src="/roaster-site2.jpg"
            alt="Actual coffee roasting facility with commercial Probat roaster and American flag"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061524]/75 to-transparent px-5 pb-5 pt-14 text-[#F4EBDD] sm:px-8">
            <div className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#E6C07F]">
              THE ROASTERY
            </div>
            <div className="mt-1 font-serif text-[0.86rem]">
              Where your coffee begins.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          COMPACT PROCESS TIMELINE
      ============================================ */}
      <section className="bg-[#061524] px-5 py-8 text-[#F0E7D5] md:px-8 md:py-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#C08C45]">
                THE PROCESS
              </div>

              <h2
                className="mt-2 text-[1.8rem] leading-[1.1] sm:text-[2.2rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                FROM ROASTER TO CUP.
              </h2>
            </div>

            <div className="font-serif text-[0.85rem] text-[#C9C1B4]">
              Five steps. One purpose. Fresh coffee.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#C08C45]/35 pt-6 md:grid-cols-5 md:gap-5">
            {steps.map((step) => (
              <div key={step.number} className="min-w-0">
                <div className="text-[0.65rem] font-bold tracking-[0.18em] text-[#C08C45]">
                  {step.number}
                </div>

                <h3
                  className="mt-2 text-[1rem] text-[#F4EBDD]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[220px] text-[0.76rem] leading-[1.55] text-[#C7C5C1]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          AUTHENTIC PACKAGING FEATURE
      ============================================ */}
      <section className="px-5 py-9 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-7 lg:grid-cols-[48%_52%] lg:gap-12">
          <div className="relative overflow-hidden">
            <img
              src="/stacked-bags1.jpeg"
              alt="Old Ironsides Coffee bags lined up during packaging at the roastery"
              loading="lazy"
              className="h-[250px] w-full object-cover object-center sm:h-[335px] lg:h-[390px]"
            />
          </div>

          <div className="min-w-0 lg:pr-6">
            <div className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-[#A36F2C]">
              BEYOND THE ROAST
            </div>

            <h2
              className="mt-3 text-[2rem] leading-[1.08] text-[#071F35] sm:text-[2.5rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              FROM FRESH BEANS
              <span className="block text-[#A36F2C]">TO FINISHED BAGS.</span>
            </h2>

            <p className="mt-4 max-w-[560px] font-serif text-[0.96rem] leading-[1.65] text-[#46423C]">
              Roasting is only part of the process. Once the coffee is ready,
              each batch moves through weighing, packaging, and preparation for
              shipment.
            </p>
            <p className="mt-3 max-w-[560px] font-serif text-[0.96rem] leading-[1.65] text-[#46423C]">
  Each finished bag reflects the care taken throughout the
  roasting and packaging process.
</p>

            <div className="mt-5 border-l-[3px] border-[#C08C45] pl-4">
              <p className="font-serif text-[1.02rem] italic leading-[1.5] text-[#102942]">
                The same attention that goes into roasting should carry through
                to the package that arrives at your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PACKED AND READY TO SHIP
      ============================================ */}
      <section className="bg-[#EAE0D0] px-5 py-9 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-7 lg:grid-cols-[45%_55%] lg:gap-12">
          <div className="min-w-0 lg:pl-5">
            <div className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-[#A36F2C]">
              THE FINAL STEP
            </div>

            <h2
              className="mt-3 text-[2rem] leading-[1.08] text-[#071F35] sm:text-[2.5rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              PACKED WITH CARE.
              <span className="block text-[#A36F2C]">READY FOR YOUR DOOR.</span>
            </h2>

            <p className="mt-4 max-w-[530px] font-serif text-[0.96rem] leading-[1.65] text-[#46423C]">
              After roasting and packing, the coffee is prepared for
              fulfillment. Orders are assembled, boxed, and sent to customers
              with the finished Old Ironsides packaging.
            </p>

            <p className="mt-3 max-w-[530px] font-serif text-[0.96rem] leading-[1.65] text-[#46423C]">
              From the roasting equipment to the shipping box, these photographs
              show the real process behind the coffee.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/store"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#B57A31] px-6 text-[0.72rem] font-bold tracking-[0.08em] text-white transition hover:bg-[#C48A45]"
              >
                SHOP THE FLEET
                <span className="ml-3">→</span>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden lg:order-last">
            <img
              src="/boxed-bags1.jpg"
              alt="Actual Old Ironsides Coffee order packed with coffee bags and branded insert"
              loading="lazy"
              className="h-[290px] w-full object-contain object-center sm:h-[360px] lg:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          FRESHNESS AND FINAL CALL TO ACTION
      ============================================ */}
      <section className="bg-[#061524] px-5 py-9 text-[#F0E7D5] md:px-8 md:py-11">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[700px]">
            <div className="text-[0.63rem] font-bold uppercase tracking-[0.22em] text-[#C08C45]">
              FRESHNESS IS THE STANDARD
            </div>

            <h2
              className="mt-2 text-[1.85rem] leading-[1.12] sm:text-[2.25rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              ROASTED TWICE WEEKLY.
              <span className="block text-[#C08C45]">ENJOYED AT HOME.</span>
            </h2>

            <p className="mt-3 max-w-[630px] text-[0.87rem] leading-[1.6] text-[#CDC7BC]">
              Our Monday and Thursday roasting schedule helps keep the time
              between roasting and delivery short, so you can enjoy fresh coffee
              without months of shelf storage.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
            <Link
              to="/store"
              className="inline-flex min-h-[45px] items-center justify-center bg-[#B57A31] px-6 text-[0.7rem] font-bold tracking-[0.08em] text-white transition hover:bg-[#C48A45]"
            >
              SHOP FRESH COFFEE
            </Link>

            <Link
              to="/roast/armada-sample-pack"
              className="inline-flex min-h-[45px] items-center justify-center border border-[#C08C45] px-6 text-[0.7rem] font-bold tracking-[0.08em] text-[#E6C07F] transition hover:bg-[#C08C45] hover:text-black"
            >
              START WITH A SAMPLE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
