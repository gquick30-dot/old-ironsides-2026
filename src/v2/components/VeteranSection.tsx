import { Link } from "react-router-dom";

export default function VeteranSection() {
  return (
    <section className="bg-[#F4EBDD] text-[#071421]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-9 md:px-8 lg:grid-cols-[47%_53%] lg:items-center lg:gap-12 lg:py-10">
        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden rounded-[14px] border border-[#C08C45]/35">
          <div className="relative aspect-[1.08/1]">
            <img
              src="/soliders-sunset.png"
              alt="Service members standing at sunset"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061524]/18 via-transparent to-transparent" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[650px]">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#A36F2C]">
            BUILT TO SERVE
          </div>

          <h2
            className="mt-3 text-[2.7rem] font-semibold leading-[0.98] text-[#071F35] sm:text-[3.1rem] lg:text-[3.25rem] xl:text-[3.5rem]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            VETERAN OWNED.
            <span className="mt-1 block text-[#B9833F]">
              BUILT TO GIVE BACK.
            </span>
          </h2>

          <p className="mt-5 max-w-[610px] font-serif text-[1.02rem] leading-[1.55] text-[#24384A]">
            Old Ironsides Coffee was built by a veteran. Supporting active duty,
            veterans, and first responders is part of the company from the
            start.
          </p>

          {/* DISCOUNT PANEL */}
          <div className="mt-6 border border-[#C08C45]/40 bg-[#F8F2E8] px-6 py-5 shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
            <div className="text-[0.68rem] font-bold tracking-[0.18em] text-[#A36F2C]">
              STANDING DISCOUNT
            </div>

            <h3
              className="mt-2 text-[1.35rem] text-[#071F35]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              $1 OFF EVERY BAG
            </h3>

            <p className="mt-3 max-w-[530px] text-[0.9rem] leading-[1.5] text-[#344454]">
              Active duty, veterans, and first responders receive $1 off every
              bag, every day. The discount also stacks with subscriptions.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex h-[46px] w-fit items-center justify-center bg-[#B57A31] px-7 text-[0.74rem] font-bold tracking-[0.1em] text-white transition hover:bg-[#C48A45]"
              >
                GET GOVX DISCOUNT
              </a>

              <div className="text-[0.72rem] leading-[1.4] text-[#5B6470]">
                Verified through GovX.
                <br />
                Applied at checkout.
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] font-semibold tracking-[0.08em] text-[#7A5A33]">
            <span>ACTIVE DUTY</span>
            <span>VETERANS</span>
            <span>FIRST RESPONDERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
