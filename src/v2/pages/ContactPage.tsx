import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

type ContactPageProps = { onSubmitPromo: (email: string) => Promise<boolean> };

export default function ContactPage({ onSubmitPromo }: ContactPageProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ringing, setRinging] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const ringTimeout = useRef<number | null>(null);
  function ringBell() {
    setRinging(false);
    requestAnimationFrame(() => setRinging(true));
    if (ringTimeout.current !== null) window.clearTimeout(ringTimeout.current);
    ringTimeout.current = window.setTimeout(() => setRinging(false), 800);
    try {
      const a = new Audio("/ship-bell.mp3");
      a.preload = "auto";
      a.currentTime = 0;
      a.play().catch(() => {});
    } catch {}
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const ok = await onSubmitPromo(email.trim());
      setStatus(ok ? "success" : "error");
      if (ok) ringBell();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#F3EBDD] text-[#071F35]">
      <style>{`@keyframes oi-contact-bell {0%,100%{transform:rotate(0deg)}15%{transform:rotate(14deg)}35%{transform:rotate(-12deg)}55%{transform:rotate(9deg)}75%{transform:rotate(-5deg)}}`}</style>
      <section className="border-b border-[#C08C45]/20 bg-[#09263C] px-5 pb-8 pt-10 text-[#F3EBDD] md:pb-10 md:pt-14">
        <div className="mx-auto max-w-[1160px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#C08C45]">THE QUARTERDECK</p>
          <h1 className="mt-2 font-serif text-4xl uppercase leading-tight tracking-[0.02em] md:text-5xl">Hail the Quarterdeck.</h1>
          <p className="mt-3 max-w-[600px] text-sm leading-relaxed text-[#D5CEC4] md:text-base">Questions about your order, our coffee, or working together? Send a dispatch. We're here to help.</p>
        </div>
      </section>
      <section className="px-5 py-9 md:py-12">
        <div className="mx-auto grid max-w-[1160px] gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="border-t-[3px] border-[#C08C45] bg-[#FFF9F0] px-6 py-7 shadow-[0_12px_30px_rgba(7,31,53,0.05)] md:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#966B36]">CONTACT & DISPATCH</p>
            <h2 className="mt-2 font-serif text-2xl uppercase text-[#071F35]">Get in Touch</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#415061]">Whether it is an order question, press inquiry, or general feedback, you can reach our crew directly.</p>
            <div className="mt-6 border-t border-[#C08C45]/20 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#966B36]">EMAIL HEADQUARTERS</p>
              <a href="mailto:HQ@oldironsidescoffee.org" className="mt-2 block break-all text-base font-semibold text-[#071F35] underline decoration-[#C08C45]/60 underline-offset-4 hover:text-[#966B36]">HQ@oldironsidescoffee.org</a>
            </div>
            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#966B36]">MAILING ADDRESS</p>
              <address className="mt-2 not-italic text-sm leading-6 text-[#415061]">6 Liberty Square #2564<br />Boston, MA 02109</address>
            </div>
            <div className="mt-6 border-t border-[#C08C45]/20 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#966B36]">FOLLOW THE FLEET</p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                <a href="https://instagram.com/oldironsidescoffee" target="_blank" rel="noopener noreferrer" className="text-[#071F35] hover:text-[#966B36]">Instagram ↗</a>
                <a href="https://facebook.com/oldironsidescoffee" target="_blank" rel="noopener noreferrer" className="text-[#071F35] hover:text-[#966B36]">Facebook ↗</a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-[#071F35] px-6 py-7 text-[#F3EBDD] md:px-10 md:py-9">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#C08C45]/15" />
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <button type="button" onClick={ringBell} aria-label="Ring the bell" title="Ring the bell" className="group flex h-20 w-20 items-center justify-center rounded-full border border-[#C08C45]/60 bg-[#112E44] text-[#C08C45] transition hover:bg-[#173A55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C08C45]">
                  <svg style={{ transformOrigin: "50% 18%", animation: ringing ? "oi-contact-bell 750ms ease-in-out" : "none" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-11 w-11" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/><path d="M12 2v1"/></svg>
                </button>
                <span className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#B8A994]">Tap the bell</span>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C08C45]">JOIN THE FLEET</p>
                <h2 className="mt-2 font-serif text-3xl uppercase md:text-4xl">Ring That Bell.</h2>
                <p className="mt-3 max-w-[440px] text-sm leading-relaxed text-[#D5CEC4] md:text-base">Get <strong className="text-[#F3EBDD]">20% off your first eligible coffee order</strong> with code <strong className="text-[#E4BC78]">IRONSIDES20</strong>. Subscribe & Save gives you <strong className="text-[#F3EBDD]">15% off eligible recurring coffee orders</strong>.</p>
                <form onSubmit={submit} className="mt-6 flex w-full max-w-[480px] flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="contact-promo-email">Email address</label>
                  <input id="contact-promo-email" name="email" type="email" required autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} placeholder="Enter your email address" className="min-w-0 flex-1 border border-[#D5CEC4] bg-[#F3EBDD] px-4 py-3 text-sm text-[#071F35] placeholder:text-[#56616D] focus:outline-2 focus:outline-offset-2 focus:outline-[#C08C45]" />
                  <button type="submit" disabled={status === "loading" || status === "success"} className="shrink-0 bg-[#C08C45] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#071F35] transition hover:bg-[#E2B16C] disabled:cursor-not-allowed disabled:opacity-70">{status === "loading" ? "SUBMITTING…" : status === "success" ? "YOU'RE ABOARD" : "JOIN & SAVE 20%"}</button>
                </form>
                <div aria-live="polite" className="mt-3 min-h-[20px] text-sm">
                  {status === "success" ? <p className="text-[#E4BC78]">Welcome aboard. Use code IRONSIDES20 at checkout on an eligible first order.</p> : status === "error" ? <p className="text-[#F4B2A2]">We couldn't subscribe that address. Please try again.</p> : <p className="text-xs text-[#B8A994]">First-order and subscription discounts do not stack. Exclusions apply.</p>}
                </div>
                <p className="mt-4 text-xs text-[#B8A994]">Already a member? <Link to="/account/login" className="font-semibold text-[#E4BC78] underline underline-offset-2 hover:text-[#F3EBDD]">Sign in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
