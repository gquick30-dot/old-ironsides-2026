import { Link } from "react-router-dom";

export default function SampleSection() {
  return (
    <section className="overflow-hidden bg-[#071421] text-[#F4EBDD]">
      <div className="mx-auto grid max-w-[1320px] items-center gap-5 px-5 py-7 sm:px-7 lg:grid-cols-[43%_57%] lg:gap-10 lg:px-10 lg:py-10">
        {/* SAMPLE OFFER */}
        <div className="min-w-0">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.23em] text-[#C08C45]">
            DISCOVER YOUR ROAST
          </p>

          <h2
            className="mt-3 text-[1.8rem] leading-[1.08] sm:text-[2.25rem] lg:text-[2.6rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            START SMALL.
            <span className="mt-1 block text-[#C08C45]">
              FIND YOUR FAVORITE.
            </span>
          </h2>

          <p className="mt-3 max-w-[440px] font-serif text-[0.85rem] leading-[1.45] text-[#DDD3C5] sm:text-[0.94rem] lg:mt-4">
            Six signature coffees. Six 2.5 oz samples. Find your favorite before
            buying a full bag.
          </p>

          {/* DESKTOP CTA */}
          <div className="mt-5 hidden flex-wrap items-center gap-x-5 gap-y-3 lg:flex">
            <Link
              to="/roast/armada-sample-pack"
              className="inline-flex min-h-[44px] items-center justify-center bg-[#B98238] px-6 text-[0.76rem] font-bold uppercase tracking-[0.08em] text-[#071421] transition hover:bg-[#D7A95D]"
            >
              SHOP THE SAMPLE PACK
              <span className="ml-3 text-lg">→</span>
            </Link>

            <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#E6C07F]">
              FREE SHIPPING
            </span>
          </div>

          <p className="mt-4 hidden text-[0.65rem] leading-[1.4] text-[#AFA99F] lg:block">
            Sample packs excluded from first-order and subscription discounts.
          </p>
        </div>

        {/* SAMPLE PACK PHOTOGRAPH */}
        <div className="min-w-0">
          <img
            src="/sample-pack2.jpg"
            alt="Six Old Ironsides Coffee sample bags displayed on roasted coffee beans"
            className="block h-auto w-full"
            loading="lazy"
          />
        </div>

        {/* MOBILE CTA */}
        <div className="lg:hidden">
          <Link
            to="/roast/armada-sample-pack"
            className="flex min-h-[46px] w-full items-center justify-center bg-[#B98238] px-5 text-center text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[#071421] shadow-[0_4px_0_#795021] transition active:translate-y-0.5 active:shadow-[0_2px_0_#795021]"
          >
            SHOP THE SAMPLE PACK
            <span className="ml-3 text-lg">→</span>
          </Link>

          <p className="mt-3 text-center text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#E6C07F]">
            FREE SHIPPING
          </p>

          <p className="mt-3 text-center text-[0.62rem] leading-[1.4] text-[#AFA99F]">
            Sample packs excluded from first-order and subscription discounts.
          </p>
        </div>
      </div>
    </section>
  );
}
