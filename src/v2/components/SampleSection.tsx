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
    <section className="relative overflow-hidden bg-[#071421] px-4 py-8 md:px-6 md:py-9 lg:px-8">
      {/* SUBTLE BACKGROUND DEPTH */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(192,140,69,0.07),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(109,83,51,0.10),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-4 lg:grid-cols-[44%_56%]">
        {/* =====================================================
            LEFT PANEL
        ====================================================== */}
        <div className="relative overflow-hidden bg-[#F4EBDD] p-[7px] shadow-[0_12px_32px_rgba(0,0,0,0.20)]">
          <div className="pointer-events-none absolute inset-[3px] border border-[#C08C45]/65" />
          <div className="pointer-events-none absolute inset-[9px] border border-[#6D5333]/28" />

          <div className="relative z-10 px-7 py-7 md:px-8 md:py-8 xl:px-9">
            <div className="mb-2 text-[0.66rem] font-semibold tracking-[0.28em] text-[#A36F2C]">
              START SMALL. FIND YOUR ROAST.
            </div>

            <h2
              className="text-[2.1rem] font-bold leading-[1.01] tracking-[0.005em] text-[#03111d] md:text-[2.3rem] xl:text-[2.55rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              NEW TO OLD
              <br />
              IRONSIDES?

              <span className="mt-1 block text-[#8D5E27]">
                DISCOVER YOUR ROAST.
              </span>
            </h2>

            <p className="mt-4 max-w-[560px] text-[0.92rem] leading-[1.55] text-[#17202a]">
              Find your perfect roast before committing to a full bag. Each 2.5
              oz sample brews roughly 6–8 cups of coffee.
            </p>

            {/* ROAST OPTIONS */}
            <div className="mt-5 grid grid-cols-2 gap-2 xl:grid-cols-3">
              {roasts.map((roast) => (
                <Link
                  key={roast}
                  to="/roast/armada-sample-pack"
                  className="flex min-h-[40px] items-center justify-center border border-[#6D5333]/55 bg-white/18 px-3 py-2 text-center text-[0.68rem] font-bold tracking-[0.1em] text-[#03111d] transition hover:border-[#C08C45] hover:bg-[#E9D9C0]"
                >
                  {roast}
                </Link>
              ))}
            </div>

            {/* CTA ROW */}
            <div className="mt-5 flex flex-col gap-3 xl:flex-row xl:items-center">
              <Link
                to="/roast/armada-sample-pack"
                className="inline-flex h-[46px] items-center justify-center bg-[#C08C45] px-7 text-[0.78rem] font-bold tracking-[0.08em] text-black transition hover:bg-[#D7A95D]"
              >
                SHOP SAMPLES
                <span className="ml-4 text-lg">→</span>
              </Link>

              <div className="text-[0.72rem] font-semibold tracking-[0.1em] text-[#8A5B25]">
                SAMPLE BOX SHIPS FREE
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-4 inline-block border border-[#6D5333]/18 bg-white/18 px-4 py-2 text-[0.72rem] text-[#51483e]">
              Sample packs excluded from first-order and subscription discounts.
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT PRODUCT PANEL
        ====================================================== */}
        <div className="relative overflow-hidden border border-[#C08C45]/65 bg-[#081522] p-[10px] shadow-[0_12px_35px_rgba(0,0,0,0.28)]">
          <div className="relative h-full overflow-hidden border border-[#6D5333]/55 bg-[#06111b]">
            {/* DESKTOP IMAGE */}
            <div className="hidden h-full min-h-[355px] lg:block">
              <img
                src="/sample-pack2.jpg"
                alt="Old Ironsides Coffee sample pack"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* MOBILE / TABLET IMAGE */}
            <div className="aspect-[4/3] lg:hidden">
              <img
                src="/sample-pack2.jpg"
                alt="Old Ironsides Coffee sample pack"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* QUIET CORNER DETAILS */}
            <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-[#C08C45]/45" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#C08C45]/45" />
          </div>
        </div>
      </div>
    </section>
  );
}