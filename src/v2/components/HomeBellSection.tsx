import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
type Props = { onSubscribe: (email: string) => Promise<boolean> };
export default function HomeBellSection({ onSubscribe }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [ringing, setRinging] = useState(false);
  const ringTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (ringTimeout.current) clearTimeout(ringTimeout.current);
    },
    []
  );

  function ringBell() {
    setRinging(false);
    requestAnimationFrame(() => setRinging(true));
    if (ringTimeout.current) clearTimeout(ringTimeout.current);
    ringTimeout.current = setTimeout(() => setRinging(false), 800);
    try {
      const audio = new Audio("/ship-bell.mp3");
      audio.play().catch(() => {});
    } catch {}
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting || submitted) return;
    setError("");
    setSubmitting(true);
    try {
      const ok = await onSubscribe(email.trim());
      if (ok) {
        setSubmitted(true);
        ringBell();
      } else setError("Please try again.");
    } catch {
      setError("Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="border-y border-[#B9873E]/40 bg-[#071F35] px-4 py-4 text-[#F3EBDD] sm:px-6 lg:py-5">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-7">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={ringBell}
            aria-label="Ring the ship bell"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C08C45] transition hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              width="33"
              height="33"
              fill="none"
              stroke="#C08C45"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={ringing ? "animate-[bellSwing_0.8s_ease-in-out]" : ""}
              aria-hidden="true"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>
          </button>
          <div>
            <h2 className="font-serif text-[1.15rem] leading-tight sm:text-[1.35rem]">
              RING THAT BELL. <span className="text-[#D0A05A]">SAVE 20%.</span>
            </h2>
            <p className="mt-1 text-[0.72rem] leading-snug text-[#D8D1C7] sm:text-[0.8rem]">
              Join the fleet for 20% off your first eligible coffee order.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[490px] lg:w-[43%]">
          {submitted ? (
            <p role="status" className="text-center text-sm text-[#E6C07F]">
              Welcome aboard! Use code IRONSIDES20 on your first eligible order.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 border border-[#B8A78E] bg-[#F3EBDD] px-4 py-2.5 text-sm text-[#071F35] outline-none focus:border-[#C08C45]"
              />
              <button
                type="submit"
                disabled={submitting}
                className="min-h-[42px] shrink-0 bg-[#B9873E] px-5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#071F35] hover:bg-[#D1A058] disabled:opacity-60"
              >
                {submitting ? "JOINING..." : "JOIN THE FLEET"}
              </button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-1 text-xs text-[#FFB6A8]">
              {error}
            </p>
          )}
          <p className="mt-1.5 text-center text-[0.65rem] text-[#C5B8A4]">
            <Link
              to="/subscriptions"
              className="font-semibold text-[#E6C07F] underline underline-offset-2 transition hover:text-white"
            >
              Subscribe & Save 15% →
            </Link>{" "}
            on eligible recurring orders. Discounts do not stack.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes bellSwing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(18deg); }
          40% { transform: rotate(-14deg); }
          60% { transform: rotate(9deg); }
          80% { transform: rotate(-5deg); }
        }
      `}</style>
    </section>
  );
}
