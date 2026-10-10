import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [shrunk, setShrunk] = useState(false);

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#06243A] text-white transition-all duration-300">
      {/* TOP TRUST BAR */}
      <div
        className={`overflow-hidden border-b border-[#6D5333] transition-all duration-300 ${
          shrunk ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="flex h-10 items-center justify-center text-xs tracking-wide text-[#E6DCC8]">
          <span>Roasted To Order Every Monday & Thursday</span>

          <span className="mx-4 text-[#C08C45]">|</span>

          <Link to="/legal/shipping">Free Shipping on 3+ Bags</Link>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-8 transition-all duration-300 ${
          shrunk ? "py-3" : "py-6"
        }`}
      >
        {/* BRAND */}
        <div className="flex items-center gap-5">
          <Link to="/">
            <img
              src="/emblem-black.png"
              alt="Old Ironsides Coffee emblem"
              className={`w-auto object-contain transition-all duration-300 ${
                shrunk ? "h-[64px]" : "h-[92px]"
              }`}
            />
          </Link>

          <div>
            <Link
              to="/"
              className={`block font-serif tracking-[0.14em] text-[#E6DCC8] transition-all duration-300 ${
                shrunk ? "text-[1.65rem]" : "text-[2rem]"
              }`}
            >
              OLD IRONSIDES COFFEE
            </Link>

            <div className="mt-1 flex items-center gap-2 text-sm tracking-[0.18em] text-[#C08C45]">
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
        <nav className="flex items-center gap-10 text-sm">
          <Link to="/store">SHOP COFFEE</Link>

          <Link to="/fleet-history">ORIGINS AND VOYAGES</Link>

          <Link to="/contact">CONTACT</Link>

          <Link
            to="/cart"
            className="border border-[#C08C45] px-5 py-3 text-[#C08C45]"
          >
            CHEST
          </Link>
        </nav>
      </div>
    </header>
  );
}
