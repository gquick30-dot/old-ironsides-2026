import { Link } from "react-router-dom";

export default function SampleSection() {
  return (
    <section className="relative overflow-hidden bg-[#071421] px-4 py-7 md:px-6 md:py-9 lg:px-8">
      {/* SUBTLE BACKGROUND DEPTH */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(192,140,69,0.06),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(109,83,51,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden bg-[#F4EBDD] p-[7px] shadow-[0_12px_32px_rgba(0,0,0,0.20)]">
          <div className="pointer-events-none absolute inset-[3px] border border-[#C08C45]/65" />
          <div className="pointer-events-none absolute inset-[9px] border border-[#6D5333]/28" />

          <div className="relative z-10 px-6 py-8 text-center sm:px-8 md:px-12 md:py-10">
            <div className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#A36F2C]">
              START SMALL
            </div>

            <h2
              className="mx-auto mt-3 max-w-[760px] text-[2rem] font-bold leading-[1.02] text-[#03111d] sm:text-[2.35rem] md:text-[2.7rem]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              NEW TO OLD IRONSIDES?
              <span className="mt-1 block text-[#8D5E27]">
                START WITH A SAMPLE.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[0.94rem] leading-[1.55] text-[#17202a] sm:text-[1rem]">
              Try the lineup before committing to a full bag. Each 2.5 oz sample
              brews roughly 6 to 8 cups of coffee.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/roast/armada-sample-pack"
                className="inline-flex h-[48px] w-full items-center justify-center bg-[#C08C45] px-8 text-[0.78rem] font-bold tracking-[0.1em] text-black transition hover:bg-[#D7A95D] sm:w-auto"
              >
                TRY A SAMPLE PACK
                <span className="ml-4 text-lg">→</span>
              </Link>

              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#8A5B25]">
                Sample Box Ships Free
              </div>
            </div>

            <div className="mx-auto mt-4 max-w-[520px] text-[0.68rem] leading-[1.45] text-[#665B4F]">
              Sample packs excluded from first-order and subscription discounts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}