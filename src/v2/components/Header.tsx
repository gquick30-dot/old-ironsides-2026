import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
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
              shrunk ? "h-0 opacity-0" : "h-[34px] opacity-100"
            }`}
          >
            <div className="flex h-[34px] items-center justify-center px-3 text-center text-[0.67rem] font-semibold tracking-[0.04em] text-[#E6DCC8]">
              Roasted To Order • Free Shipping on 3+ Bags
            </div>
          </div>

          {/* BRAND */}
          <div className="border-b border-[#C08C45]/25 px-4 py-2.5 text-center">
            <Link to="/" aria-label="Old Ironsides Coffee Home">
              <div
                className="text-[1rem] font-bold tracking-[0.16em] text-[#E6DCC8] sm:text-[1.12rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                OLD IRONSIDES COFFEE
              </div>
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex h-[48px] items-center justify-between px-4">
            {/* HAMBURGER */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-11 flex-col justify-center gap-[5px]"
            >
              <span className="block h-[2px] w-7 bg-[#C08C45]" />
              <span className="block h-[2px] w-7 bg-[#C08C45]" />
              <span className="block h-[2px] w-7 bg-[#C08C45]" />
            </button>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-5">
              <Link
                to="/account"
                className="text-[0.67rem] font-semibold tracking-[0.11em] text-[#C08C45]"
              >
                ACCOUNT
              </Link>

              <Link
                to="/cart"
                className="border border-[#C08C45] px-3.5 py-2 text-[0.67rem] font-semibold tracking-[0.11em] text-[#C08C45]"
              >
                CHEST
              </Link>
            </div>
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

              <span className="mx-4 text-[#C08C45]">|</span>

              <Link
                to="/legal/shipping"
                className="transition hover:text-[#C08C45]"
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
                  src="/emblem-black.png"
                  alt="Old Ironsides Coffee emblem"
                  className={`w-auto object-contain transition-all duration-300 ${
                    shrunk ? "h-[64px]" : "h-[92px]"
                  }`}
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

                <div className="mt-1 flex items-center gap-2 whitespace-nowrap text-sm tracking-[0.18em] text-[#C08C45]">
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
              <Link to="/store" className="transition hover:text-[#C08C45]">
                SHOP COFFEE
              </Link>

              <Link
                to="/fleet-history"
                className="transition hover:text-[#C08C45]"
              >
                ORIGINS AND VOYAGES
              </Link>

              <Link to="/contact" className="transition hover:text-[#C08C45]">
                CONTACT
              </Link>

              <Link to="/account" className="transition hover:text-[#C08C45]">
                ACCOUNT
              </Link>

              <Link
                to="/cart"
                className="border border-[#C08C45] px-5 py-3 text-[#C08C45] transition hover:bg-[#C08C45] hover:text-[#06243A]"
              >
                CHEST
              </Link>
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

                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#C08C45]">
                  Veteran Owned
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="px-2 text-2xl leading-none text-[#C08C45]"
              >
                ×
              </button>
            </div>

            {/* MENU BODY */}
            <div className="flex-1 overflow-y-auto pb-8">
              {/* SHOP */}
              <div className="px-5 pb-2 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#C08C45]">
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
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Subscriptions
              </Link>

              {/* ORIGINS */}
              <div className="px-5 pb-2 pt-6 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#C08C45]">
                Origins & Voyages
              </div>

              <Link
                to="/roasting-process"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Roast Process
              </Link>

              <Link
                to="/#origins-sourcing"
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
                to="/#origins-about"
                className="block border-b border-white/10 px-5 py-3.5 text-[0.95rem] text-[#E6DCC8]"
              >
                Our Story
              </Link>

              {/* COMPANY */}
              <div className="px-5 pb-2 pt-6 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#C08C45]">
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
                className="block px-5 py-4 text-[0.95rem] font-semibold text-[#C08C45]"
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
