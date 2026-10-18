import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* CLOSE MOBILE MENU AFTER NAVIGATION */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search, location.hash]);

  /* LOCK PAGE SCROLL WHILE MENU IS OPEN */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.touchAction = mobileOpen ? "none" : "";

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9999] bg-[#06243A] text-white shadow-sm">
        {/* =========================================================
            MOBILE HEADER
        ========================================================== */}

        <div className="lg:hidden">
          {/* TRUST BAR */}
          <div
            className={`overflow-hidden border-b border-[#6D5333] bg-[#051D30] transition-all duration-300 ${
              shrunk ? "h-0 opacity-0" : "h-[30px] opacity-100"
            }`}
          >
            <div className="flex h-[30px] items-center justify-center px-2 text-center text-[0.64rem] font-semibold tracking-[0.025em] text-[#E6DCC8]">
              Roasted To Order • Free Shipping on 3+ Bags
            </div>
          </div>

          {/* COMPACT MOBILE NAV */}
          <div className="flex h-[60px] items-center justify-between gap-3 px-4">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-10 shrink-0 flex-col justify-center gap-[5px]"
            >
              <span className="block h-[2px] w-6 bg-[#F3EBDD]" />
              <span className="block h-[2px] w-6 bg-[#F3EBDD]" />
              <span className="block h-[2px] w-6 bg-[#F3EBDD]" />
            </button>

            <Link
              to="/"
              aria-label="Old Ironsides Coffee Home"
              className="min-w-0 flex-1 text-center"
            >
              <span
                className="block whitespace-nowrap text-[0.77rem] font-bold tracking-[0.075em] text-[#E6DCC8] min-[390px]:text-[0.91rem] sm:text-[1.1rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                OLD IRONSIDES COFFEE
              </span>
            </Link>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("open-cart-drawer"))
              }
              aria-label="Shopping cart"
              className="relative flex h-10 w-11 shrink-0 items-center justify-center border border-[#F3EBDD] text-[#F3EBDD]"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.4 12.4a2 2 0 0 0 2 1.6H20a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C08C45] px-1 text-[11px] font-bold text-[#071F35]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* =========================================================
            DESKTOP HEADER
        ========================================================== */}
        <div className="hidden lg:block">
          {/* TOP TRUST BAR */}
          <div
            className={`overflow-hidden border-b border-[#6D5333] transition-all duration-300 ${
              shrunk ? "h-0 opacity-0" : "h-10 opacity-100"
            }`}
          >
            <div className="flex h-10 items-center justify-center text-xs tracking-wide text-[#E6DCC8]">
              <span>Roasted To Order Every Monday & Thursday</span>

              <span className="mx-4 text-[#F3EBDD]">|</span>

              <Link
                to="/legal/shipping"
                className="transition hover:text-[#F3EBDD]"
              >
                Free Shipping on 3+ Bags
              </Link>
            </div>
          </div>

          {/* MAIN DESKTOP HEADER */}
          <div
            className={`mx-auto flex max-w-[1500px] items-center justify-between px-8 transition-all duration-300 ${
              shrunk ? "py-3" : "py-6"
            }`}
          >
            {/* BRAND */}
            <div className="flex min-w-0 items-center gap-5">
              <Link to="/" className="shrink-0">
                <img
                  src="/emblem-cream.png"
                  alt="Old Ironsides Coffee emblem"
                  className={`w-auto object-contain opacity-[0.82] transition-all duration-300 ${
                    shrunk ? "h-[64px]" : "h-[92px]"
                  }`}
                  style={{
                    filter: "grayscale(1) brightness(1.55) contrast(0.92)",
                  }}
                />
              </Link>

              <div className="min-w-0">
                <Link
                  to="/"
                  className={`block whitespace-nowrap tracking-[0.14em] text-[#E6DCC8] transition-all duration-300 ${
                    shrunk ? "text-[1.65rem]" : "text-[2rem]"
                  }`}
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  OLD IRONSIDES COFFEE
                </Link>

                <div className="mt-1 flex items-center gap-2 whitespace-nowrap text-sm tracking-[0.18em] text-[#F3EBDD]">
                  <span>VETERAN OWNED • VETERAN ROASTED</span>

                  <img
                    src="/stars-stripes.png"
                    alt="American flag"
                    className="h-4 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* NAV */}
            <nav className="ml-8 flex shrink-0 items-center gap-8 text-[0.78rem] font-semibold tracking-[0.05em]">
              <Link to="/store" className="transition hover:text-[#F3EBDD]">
                SHOP COFFEE
              </Link>

              <div className="group relative" key={location.pathname}>
                <Link
                  to="/fleet-history"
                  className="flex items-center gap-2 py-3 transition hover:text-[#F3EBDD]"
                >
                  ORIGINS AND VOYAGES <span className="text-[#C08C45]">▾</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-[230px] border border-[#C08C45]/30 bg-[#071F35] py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {[
                    ["Roast Process", "/roasting-process"],
                    ["Harvest", "/sourcing"],
                    ["Fleet History", "/fleet-history"],
                    ["Our Story", "/mission"],
                  ].map(([label, path]) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-5 py-3 text-xs font-semibold tracking-wide text-[#F3EBDD] transition hover:bg-[#123852] hover:text-[#E6C07F]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="transition hover:text-[#F3EBDD]">
                CONTACT
              </Link>

              <Link to="/account" className="transition hover:text-[#F3EBDD]">
                ACCOUNT
              </Link>

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("open-cart-drawer"))
                }
                className="relative border border-[#F3EBDD] px-5 py-3 text-[#F3EBDD] transition hover:bg-[#F3EBDD] hover:text-[#06243A]"
              >
                CHEST
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C08C45] px-1 text-[11px] font-bold text-[#071F35]">
                    {cartCount}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU DRAWER
      ========================================================== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[10000] flex lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          {/* DRAWER */}
          <div
            className="flex h-full w-[82%] max-w-[355px] flex-col bg-[#051521] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* DRAWER HEADER */}
            <div className="flex items-start justify-between border-b border-[#6D5333]/55 px-5 py-5">
              <div>
                <div
                  className="text-[0.96rem] font-bold tracking-[0.13em] text-[#E6DCC8]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  OLD IRONSIDES COFFEE
                </div>

                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#F3EBDD]">
                  Veteran Owned
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="px-2 text-2xl leading-none text-[#F3EBDD]"
              >
                ×
              </button>
            </div>

            {/* MENU BODY */}
            <div className="flex-1 overflow-y-auto pb-8">
              {/* SHOP */}
              <div className="px-5 pb-2 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#F3EBDD]">
                Shop Coffee
              </div>

              <Link
                to="/store"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                All Coffee
              </Link>

              <Link
                to="/roast/armada-sample-pack"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Sample Packs
              </Link>

              <Link
                to="/subscriptions"
                onClick={() => setMobileOpen(false)}
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Subscriptions
              </Link>

              {/* ORIGINS */}
              <div className="px-5 pb-2 pt-6 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#F3EBDD]">
                Origins & Voyages
              </div>

              <Link
                to="/roasting-process"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Roast Process
              </Link>

              <Link
                to="/sourcing"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Harvest
              </Link>

              <Link
                to="/fleet-history"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Fleet History
              </Link>

              <Link
                to="/mission"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Our Story
              </Link>

              {/* COMPANY */}
              <div className="px-5 pb-2 pt-6 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#F3EBDD]">
                Company
              </div>

              <Link
                to="/contact"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Contact
              </Link>

              <Link
                to="/sdvosb"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Government / SDVOSB
              </Link>

              <Link
                to="/account"
                className="block px-5 py-4 text-[0.95rem] font-semibold text-[#F3EBDD]"
              >
                Sign In / Account
              </Link>
            </div>
          </div>

          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="flex-1 bg-black/70"
          />
        </div>
      )}
    </>
  );
}
