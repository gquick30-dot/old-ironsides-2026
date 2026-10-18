import { Link } from "react-router-dom";
const Instagram = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Facebook = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C08C45]/25 bg-[#061524] text-[#F3EBDD]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(192,140,69,0.05),transparent_35%)]" />
      <div className="relative mx-auto max-w-[1280px] px-6 pb-6 pt-10 md:px-8 md:pt-12">
        <div className="grid grid-cols-1 gap-9 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.4fr_0.85fr_1.1fr] lg:gap-14">
          <div>
            <h2
              className="text-xl font-semibold tracking-[0.12em] text-[#F3EBDD] md:text-2xl"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              OLD IRONSIDES COFFEE
            </h2>
            <p className="mt-2 text-sm tracking-[0.08em] text-[#D5CEC4]">
              VETERAN OWNED · VETERAN ROASTED
            </p>
            <img
              src="/stars-stripes.png"
              alt="American flag"
              className="mx-auto mt-5 h-auto w-40 opacity-90 sm:mx-0"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C08C45]">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm text-[#D5CEC4]">
              <li>
                <Link
                  to="/legal/shipping"
                  className="transition hover:text-[#F3EBDD]"
                >
                  Roast &amp; Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/returns"
                  className="transition hover:text-[#F3EBDD]"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/terms"
                  className="transition hover:text-[#F3EBDD]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/privacy"
                  className="transition hover:text-[#F3EBDD]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => (window as any).showCookieBanner?.()}
                  className="transition hover:text-[#F3EBDD]"
                >
                  Cookie Settings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => (window as any).showDoNotSell?.()}
                  className="transition hover:text-[#F3EBDD]"
                >
                  Do Not Sell or Share
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C08C45]">
              DISPATCH
            </h3>
            <a
              href="mailto:HQ@oldironsidescoffee.org"
              className="break-all text-sm text-[#D5CEC4] transition hover:text-[#F3EBDD]"
            >
              HQ@oldironsidescoffee.org
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[#B8A994]">
              6 Liberty Square #2564
              <br />
              Boston, MA 02109
            </p>
            <div className="mt-6 flex justify-center gap-5 sm:justify-start">
              <a
                href="https://instagram.com/oldironsidescoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Old Ironsides Coffee on Instagram"
                className="inline-flex items-center gap-2 text-sm text-[#C08C45] transition hover:text-[#F3EBDD]"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="https://facebook.com/oldironsidescoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Old Ironsides Coffee on Facebook"
                className="inline-flex items-center gap-2 text-sm text-[#C08C45] transition hover:text-[#F3EBDD]"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#C08C45]/20 pt-6 text-center text-xs text-[#B8A994] md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Old Ironsides Coffee. All rights
            reserved.
          </p>
          <p className="tracking-[0.05em] text-[#B5976D]">
            Boston Rooted · Veteran Owned · Small-Batch Roasted
          </p>
        </div>
      </div>
    </footer>
  );
}
