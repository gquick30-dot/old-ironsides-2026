import { Link } from "react-router-dom";

const roasts = [
  "FLAGSHIP",
  "BAPTISM BY FIRE",
  "THE JAVA ACTION",
  "BLACK SALVO",
  "OAK & COPPER",
  "BRASS MONKEY",
];

export default function SampleSection() {
  return (
    <section className="relative overflow-hidden bg-[#071421] px-5 py-14 md:px-8 md:py-16">
      {/* BACKGROUND DEPTH */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(192,140,69,0.10),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(109,83,51,0.15),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-[1600px] gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT FEATURE PANEL */}
        <div className="relative bg-[#F4EBDD] p-[10px] shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
          <div className="absolute inset-[3px] border border-[#C08C45]/75" />
          <div className="absolute inset-[11px] border border-[#6D5333]/35" />

          <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 xl:px-14 xl:py-14">
            <div className="mb-3 text-[0.76rem] font-semibold tracking-[0.28em] text-[#A36F2C]">
              START SMALL. FIND YOUR ROAST.
            </div>

            <h2
              className="max-w-[700px] text-[2.7rem] font-bold leading-[1.02] tracking-[0.01em] text-[#03111d] md:text-[3.2rem] xl:text-[3.6rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              NEW TO OLD IRONSIDES?
              <span className="block text-[#8D5E27]">DISCOVER YOUR ROAST.</span>
            </h2>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px w-24 bg-[#C08C45]" />
              <span className="text-[#C08C45]">✦</span>
              <div className="h-px w-14 bg-[#C08C45]/55" />
            </div>

            <p className="mt-6 max-w-[620px] text-[1.08rem] leading-relaxed text-[#17202a]">
              Find your perfect roast before committing to a full bag. Each 2.5
              oz sample brews roughly 6–8 cups of coffee.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-3">
              {roasts.map((roast) => (
                <Link
                  key={roast}
                  to="/roast/armada-sample-pack"
                  className="border border-[#6D5333]/65 bg-white/20 px-4 py-3 text-center text-[0.78rem] font-bold tracking-[0.12em] text-[#03111d] transition duration-200 hover:-translate-y-[1px] hover:border-[#C08C45] hover:bg-[#E5D3B7]"
                >
                  {roast}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-center">
              <Link
                to="/roast/armada-sample-pack"
                className="inline-flex items-center justify-center bg-[#C08C45] px-9 py-4 font-bold tracking-[0.08em] text-black shadow-[0_8px_20px_rgba(192,140,69,0.22)] transition hover:-translate-y-[1px] hover:bg-[#D7A95D]"
              >
                SHOP SAMPLES
                <span className="ml-5 text-xl">→</span>
              </Link>

              <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.1em] text-[#8A5B25]">
                <span className="text-xl">◈</span>
                SAMPLE BOX SHIPS FREE
              </div>
            </div>

            <div className="mt-7 inline-block border border-[#6D5333]/20 bg-white/20 px-5 py-3 text-sm text-[#4b4238]">
              Sample packs excluded from first-order and subscription discounts.
            </div>
          </div>
        </div>

        {/* RIGHT PRODUCT PANEL */}
        <div className="relative overflow-hidden border border-[#C08C45]/75 bg-[#081522] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,140,69,0.18),transparent_58%)]" />

          <div className="relative h-full min-h-[610px] border border-[#6D5333]/60 bg-[#06111b]">
            <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#C08C45]/65" />
            <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#C08C45]/65" />

            <img
              src="/sample-pack2.jpg"
              alt="Old Ironsides Coffee sample pack"
              className="absolute inset-0 h-full w-full scale-[1.06] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
