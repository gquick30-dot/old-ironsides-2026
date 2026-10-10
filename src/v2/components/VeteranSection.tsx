export default function VeteranSection() {
  return (
    <section className="bg-[#F4EBDD] text-[#071421]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-8 md:px-8 lg:grid-cols-[47%_53%] lg:items-center lg:gap-11 lg:py-9">
        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden rounded-[12px] border border-[#C08C45]/30">
          <div className="relative aspect-[1.08/1]">
            <img
              src="/sailors.jpg"
              alt="United States Navy sailors walking toward an aircraft carrier"
              className="absolute inset-0 h-full w-full object-cover object-[48%_center]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3B2614]/10 via-transparent to-transparent" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[650px]">
          <div className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#A36F2C]">
            BUILT TO SERVE
          </div>

          <h2
            className="mt-3 text-[2.65rem] font-semibold leading-[0.98] text-[#071F35] sm:text-[3rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            VETERAN OWNED.
            <span className="mt-1 block text-[#B9833F]">
              BUILT TO GIVE BACK.
            </span>
          </h2>

          <p className="mt-5 max-w-[610px] font-serif text-[1rem] leading-[1.55] text-[#24384A]">
            Old Ironsides Coffee was built by a veteran. Supporting active duty,
            veterans, and first responders is part of how we operate, not a
            seasonal campaign.
          </p>

          {/* GOVX DISCOUNT */}
          <div className="mt-6 border border-[#C08C45]/35 bg-[#F8F2E8] px-6 py-5">
            <div className="text-[0.65rem] font-bold tracking-[0.18em] text-[#A36F2C]">
              GOVX DISCOUNT
            </div>

            <h3
              className="mt-2 text-[1.25rem] text-[#071F35]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              10% OFF + $1 EXTRA PER BAG
            </h3>

            <p className="mt-2.5 max-w-[535px] text-[0.87rem] leading-[1.5] text-[#344454]">
              Veterans and first responders receive 10% off coffee and merch,
              plus an additional $1 off every bag of coffee through GovX.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://auth.govx.com/shopify/verify?shop=81ub0m-s7.myshopify.com&utm_source=shopify&utm_medium=govxid&utm_campaign=custom_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] min-w-[220px] items-center justify-center bg-[#B57A31] px-7 text-[0.72rem] font-bold tracking-[0.11em] text-white transition hover:bg-[#C48A45]"
              >
                GET GOVX DISCOUNT
              </a>

              <div className="text-[0.7rem] leading-[1.4] text-[#5B6470]">
                Verified through GovX.
                <br />
                Discount code provided after verification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
