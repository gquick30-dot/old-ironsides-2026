import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const fmt = (value: any) => `$${Number(value || 0).toFixed(2)}`;
const formatDate = (value: string) => {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
const getDisplayName = (user: any) => user?.firstName || user?.first_name || user?.name || "";
function SectionTitle({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) {
  return <div><h1 className="font-serif text-3xl text-[#071F35] md:text-5xl">{title}</h1>{subtitle && <p className="mt-2 text-sm text-[#4F5A61]">{subtitle}</p>}</div>;
}
function BackButton({ size }: { size?: string }) {
  const navigate = useNavigate();
  return <button type="button" onClick={() => navigate(-1)} className="border border-[#C08C45] px-4 py-2 text-sm text-[#071F35] hover:bg-[#C08C45]/15">← Back</button>;
}
export default function AccountPage({
  initialTab = "overview",
}: {
  initialTab?: "overview" | "login";
}) {
  const [user, setUser] = useState<any>(() => {
    try {
      return JSON.parse(localStorage.getItem("oi_user") || "null");
    } catch {
      return null;
    }
  });
  const [addresses, setAddresses] = useState<any[]>([]);
  const [defaultAddressId, setDefaultAddressId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const SHOP_DOMAIN_RAW = (import.meta as any).env
    ?.VITE_SHOPIFY_STORE_DOMAIN as string;
  const SHOP_DOMAIN = (SHOP_DOMAIN_RAW || "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  const SEAL_LOGIN_URL = `https://${SHOP_DOMAIN}/account/login?return_url=/a/subscriptions`;
  const [showPassword, setShowPassword] = useState(false);
  // US-only shipping controls
  const US_STATES = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
    "DC",
  ] as const;
  // Undo default change (lightweight safety net)
  const [undoFromId, setUndoFromId] = useState<string | null>(null);
  const [undoToId, setUndoToId] = useState<string | null>(null);
  const [showUndo, setShowUndo] = useState(false);
  const undoTimerRef = useRef<number | null>(null);
  const [tab, setTab] = useState<
    "overview" | "login" | "subscriptions" | "orders" | "profile"
  >(initialTab ?? (user ? "overview" : "login"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [subs, setSubs] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [defaultAddress, setDefaultAddress] = useState<any>(null);
  useEffect(() => {
    if (tab !== "profile") return;
    const token = localStorage.getItem("oi_token");
    if (!token) return;
    fetch("/api/account/addresses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data.addresses || []);
        setDefaultAddressId(data.defaultId || null);
      })
      .catch(() => {
        // ignore for now
      });
  }, [tab]);
  useEffect(() => {
    const u: any = user;
    setDefaultAddress(u?.defaultAddress ?? null);
  }, [user]);
  useEffect(() => {
    if (!user) setTab("login");
  }, [user]);
  // On real backend: fetch customer, orders, subs, addresses here
  useEffect(() => {
    async function bootstrap() {
      if (!user) return;
      const token = localStorage.getItem("oi_token");
      if (!token) return;
      const resp = await fetch(
        `/api/account/overview?email=${encodeURIComponent(user.email)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!resp.ok) return;
      const data = await resp.json();
      setOrders(data.orders || []);
      setSubs(data.subscriptions || []);
    }
    bootstrap();
  }, [user]);
  // ---------- Auth ----------
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const password = String(fd.get("password") || "");
    try {
      if (!emailOk(email) || !password) {
        throw new Error("Check your email and password.");
      }
      const resp = await fetch("/api/account-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const text = await resp.text();
      console.log("[account-login] raw response:", text);
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Login server returned invalid response.");
      }
      if (!resp.ok) {
        throw new Error(data?.error || "Login failed.");
      }
      // data: { accessToken, user }
      localStorage.setItem("oi_user", JSON.stringify(data.user));
      localStorage.setItem("oi_token", data.accessToken);
      setUser(data.user);
      setTab("overview");
      window.dispatchEvent(
        new CustomEvent("flash", { detail: "Welcome back." })
      );
    } catch (err: any) {
      setError(err?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }
  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    try {
      if (!name || !emailOk(email)) {
        setError("Enter your name and a valid email.");
        return;
      }
      const resp = await fetch("/api/account/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const text = await resp.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {}
      if (!resp.ok) {
        setError(data?.error || "Account creation failed.");
        return;
      }
      window.dispatchEvent(
        new CustomEvent("flash", {
          detail: "Check your email to activate your account.",
        })
      );
      (e.target as HTMLFormElement)?.reset();
    } finally {
      setLoading(false);
    }
  }
  function handleLogout() {
    localStorage.removeItem("oi_user");
    localStorage.removeItem("oi_token");
    setUser(null);
    setTab("login");
  }
  // ---------- Subscription actions (wired later) ----------
  async function skipNextCharge(subId: string) {
    // REAL: POST /api/account/subscriptions/:id/skip or /undo
    setSubs((list) =>
      list.map((s) => {
        if (s.id !== subId) return s;
        // If already skipped, restore original date
        if (s.skipped) {
          return {
            ...s,
            skipped: false,
            nextCharge: s.originalNextCharge ?? s.nextCharge,
          };
        }
        // First time skipping: move date and mark as skipped
        return {
          ...s,
          skipped: true,
          originalNextCharge: s.originalNextCharge ?? s.nextCharge,
          nextCharge: "2025-11-10", // placeholder, real API will send this
        };
      })
    );
    window.dispatchEvent(
      new CustomEvent("flash", {
        detail: "Next delivery updated.",
      })
    );
  }
  async function pauseSub(subId: string) {
    // REAL: POST /api/account/subscriptions/:id/pause
    setSubs((list) =>
      list.map((s) => (s.id === subId ? { ...s, status: "paused" } : s))
    );
    window.dispatchEvent(
      new CustomEvent("flash", { detail: "Subscription paused." })
    );
  }
  async function resumeSub(subId: string) {
    // REAL: POST /api/account/subscriptions/:id/resume
    setSubs((list) =>
      list.map((s) => (s.id === subId ? { ...s, status: "active" } : s))
    );
    window.dispatchEvent(
      new CustomEvent("flash", { detail: "Subscription resumed." })
    );
  }
  async function cancelSub(subId: string) {
    // REAL: POST /api/account/subscriptions/:id/cancel
    setSubs((list) => list.filter((s) => s.id !== subId));
    window.dispatchEvent(
      new CustomEvent("flash", { detail: "Subscription canceled." })
    );
  }
  const TabBtn = ({ id, children }: any) => (
    <button
      onClick={() => setTab(id)}
      className={
        "px-3 py-2 text-sm " +
        (tab === id
          ? "bg-[#071F35] text-[#F3EBDD] font-semibold"
          : "border border-[#C08C45]/30 hover:border-[#C08C45] text-[#071F35]")
      }
    >
      {children}
    </button>
  );
  // ---------- Login / Register view ----------
  if (!user && tab === "login") {
    return (
      <main className="bg-[#F3EBDD] px-4 pb-12 pt-16 text-[#071F35] md:pb-16 md:pt-20">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="flex items-start justify-between">
            <SectionTitle
              title={
                <span className="font-cinzel text-3xl font-semibold text-[#071F35] md:text-5xl">
                  Account
                </span>
              }
              subtitle="Log in or create an account to manage your subscriptions and orders."
            />
            <div className="hidden md:block">
              <BackButton size="sm" />
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Login */}
            <form
              onSubmit={handleLogin}
              className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7"
            >
              <div className="text-lg font-semibold text-[#C08C45] mb-3">
                Log in
              </div>
              <div className="space-y-3">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                />
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] pr-10 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-2 flex items-center text-[#B8A994] hover:text-[#F3EBDD]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.402-3.221 1.125-4.575M6.223 6.223A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10 0 1.433-.3 2.797-.84 4.025M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {error && <div className="text-sm text-[#E6C07F]">{error}</div>}
                <button
                  disabled={loading}
                  className="w-full px-4 py-2  bg-[#F3EBDD] text-[#071F35] font-semibold hover:bg-[#E4D1B5]"
                >
                  {loading ? "Signing in..." : "Log in"}
                </button>
              </div>
              <div className="mt-3 text-xs text-neutral-500">
                Trouble signing in? Email{" "}
                <a
                  href="mailto:support@oldironsidescoffee.org"
                  className="text-[#C08C45]"
                >
                  support@oldironsidescoffee.org
                </a>
                .
              </div>
            </form>{" "}
            {/* Register */}
            <form
              onSubmit={handleRegister}
              className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7"
            >
              <div className="text-lg font-semibold text-[#C08C45] mb-3">
                JOIN THE FLEET & SAVE
              </div>
              <div className="space-y-3">
                <input
                  name="name"
                  placeholder="Full name"
                  className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                />
                <button
                  disabled={loading}
                  className="w-full px-4 py-2  bg-[#F3EBDD] text-[#071F35] font-semibold hover:bg-[#E4D1B5] disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Create account"}
                </button>
              </div>
              <div className="mt-3 text-xs text-neutral-500">
                Your account is used to view orders, manage subscriptions and
                update your shipping details.
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
  // ---------- Logged in view ----------
  return (
    <main className="bg-[#F3EBDD] px-4 pb-12 pt-16 text-[#071F35] md:pb-16 md:pt-20">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mt-0">
          <div className="flex items-start justify-between">
            <span className="text-[#071F35]">
              Welcome,{" "}
              <span className="text-[#C08C45] font-semibold">
                {getDisplayName(user) || user?.email}
              </span>
              . Manage your subscriptions, orders and shipping details here.
            </span>
            <div className="hidden md:block">
              <BackButton size="sm" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <TabBtn id="overview">Overview</TabBtn>
            <TabBtn id="subscriptions">Subscriptions</TabBtn>
            <TabBtn id="orders">Orders</TabBtn>
            <TabBtn id="profile">Profile</TabBtn>
            <div className="ml-auto">
              <button
                onClick={handleLogout}
                className="px-3 py-2 border border-[#C08C45]/30 hover:border-[#C08C45] text-[#071F35] text-sm"
              >
                Log out
              </button>
            </div>
          </div>
          {/* OVERVIEW */}
          {tab === "overview" && (
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {/* Next delivery / subscriptions summary */}
              <div className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-[#C08C45] font-semibold">
                    Subscriptions and upcoming deliveries:
                  </div>
                  <div className="mt-3 space-y-2 text-sm">
                    {subs.length === 0 ? (
                      <div className="text-[#B8A994]">
                        No active subscriptions.
                      </div>
                    ) : (
                      subs.slice(0, 4).map((s) => (
                        <div
                          key={s.id}
                          className="border-t border-[#C08C45]/25 pt-2 first:border-t-0 first:pt-0"
                        >
                          <div className="text-[#C08C45] font-semibold">
                            {s.product}
                          </div>
                          <div className="text-[#B8A994]">
                            {s.nextCharge
                              ? `Ships around ${s.nextCharge}`
                              : s.nextInDays != null
                              ? `Ships in ${s.nextInDays} days`
                              : "Next ship date unavailable"}{" "}
                            • {s.frequency || "—"} • {s.status || "active"}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  {subs.length > 4 && (
                    <div className="mt-2 text-xs text-[#B8A994]">
                      +{subs.length - 4} more subscriptions
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setTab("subscriptions")}
                  className="mt-4 text-[#C08C45] text-sm text-left"
                >
                  Manage subscriptions →
                </button>
              </div>
              {/* Recent orders */}
              <div className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-[#C08C45] font-semibold">
                    Recent orders
                  </div>
                  <div className="mt-3 space-y-2 text-sm">
                    {orders.length === 0 ? (
                      <div className="text-[#B8A994]">No orders yet.</div>
                    ) : (
                      orders.slice(0, 4).map((o) => {
                        const items = Array.isArray(o.items) ? o.items : [];
                        const first = items[0];
                        const moreCount = Math.max(0, items.length - 1);
                        const firstLine = first
                          ? `${first.title} × ${first.qty}`
                          : `${items.length} item${
                              items.length === 1 ? "" : "s"
                            }`;
                        return (
                          <div
                            key={o.id}
                            className="border-t border-[#C08C45]/25 pt-2 first:border-t-0 first:pt-0"
                          >
                            <div className="text-[#C08C45] font-semibold">
                              {o.id}
                            </div>
                            <div className="text-[#B8A994]">
                              {o.date} • {o.status} • {fmt(o.total)}
                            </div>
                            <div className="text-[#D5CEC4]">
                              {firstLine}
                              {moreCount > 0 ? ` + ${moreCount} more` : ""}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setTab("orders")}
                  className="mt-4 text-[#C08C45] text-sm text-left"
                >
                  View all orders →
                </button>
              </div>
              {/* Default shipping */}
              <div className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7">
                <div className="text-[#C08C45] font-semibold">
                  Default shipping address
                </div>
                {defaultAddress ? (
                  <div className="mt-2 text-[#D5CEC4] text-sm">
                    {defaultAddress.name && (
                      <>
                        {defaultAddress.name}
                        <br />
                      </>
                    )}
                    {defaultAddress.line1 && (
                      <>
                        {defaultAddress.line1}
                        <br />
                      </>
                    )}
                    {defaultAddress.line2 && (
                      <>
                        {defaultAddress.line2}
                        <br />
                      </>
                    )}
                    {(defaultAddress.city ||
                      defaultAddress.state ||
                      defaultAddress.zip) && (
                      <>
                        {defaultAddress.city && `${defaultAddress.city}, `}
                        {defaultAddress.state && `${defaultAddress.state} `}
                        {defaultAddress.zip}
                        <br />
                      </>
                    )}
                    {defaultAddress.country}
                  </div>
                ) : (
                  <div className="mt-2 text-[#B8A994] text-sm">
                    No default address on file yet. Update it in your Shopify
                    account.
                  </div>
                )}
                <button
                  onClick={() => setTab("profile")}
                  className="mt-3 px-3 py-2 border border-[#C08C45]/30 text-sm text-[#C08C45] hover:border-[#C08C45]/60 hover:bg-[#E4D1B5]/10"
                >
                  Manage addresses →
                </button>
              </div>
            </div>
          )}
          {/* SUBSCRIPTIONS */}
          {tab === "subscriptions" && (
            <div className="mt-6 space-y-4 max-w-3xl mx-auto">
              {subs.length === 0 && (
                <div className="text-[#B8A994]">
                  No active subscriptions. Add Subscribe & Save from the store
                  to start.
                </div>
              )}
              {subs.map((s) => (
                <div
                  key={s.id}
                  className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7 border-l-4 border-[#C08C45]/60"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="font-semibold text-[#C08C45]">
                      {s.product}
                    </div>
                    <div className="text-sm text-[#B8A994]">
                      • Next ship date:{" "}
                      {s.nextCharge
                        ? formatDate(s.nextCharge)
                        : s.nextInDays != null
                        ? `in ${s.nextInDays} days`
                        : "—"}{" "}
                      • {s.frequency}
                    </div>
                    <div className="text-xs ml-auto px-2 py-1 ring-1 ring-[#C08C45]/60 text-[#C08C45] uppercase tracking-wide">
                      {s.status}
                    </div>
                  </div>
                  <div className="mt-4 border-t border-[#C08C45]/25" />
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          SEAL_LOGIN_URL,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center justify-center px-4 py-2  bg-[#F3EBDD] text-[#071F35] text-sm font-semibold hover:bg-[#E4D1B5]"
                    >
                      Manage subscription
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* ORDERS */}
          {tab === "orders" && (
            <div className="mt-6 space-y-4 max-w-3xl mx-auto">
              {orders.length === 0 && (
                <div className="text-[#B8A994]">No orders yet.</div>
              )}
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7 border-l-4 border-[#C08C45]/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-semibold text-[#C08C45]">{o.id}</div>
                    <div className="flex items-center gap-2 text-sm text-[#B8A994]">
                      <span>{o.date}</span>
                      <span>•</span>
                      <span>{fmt(o.total)}</span>
                    </div>
                    <div className="ml-auto text-xs px-2 py-1 ring-1 ring-[#6D5333]/60 text-[#D5CEC4] uppercase tracking-wide">
                      {o.status}
                    </div>
                  </div>
                  <ul className="mt-3 text-sm text-[#D5CEC4] list-disc list-inside">
                    {o.items.map((it: any, i: number) => (
                      <li key={i}>
                        {it.title} × {it.qty}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 grid md:grid-cols-2 gap-4 text-xs text-[#B8A994]">
                    <div>
                      <div className="uppercase tracking-wide mb-1">
                        Help with this order
                      </div>
                      <div>
                        Email{" "}
                        <a
                          href="mailto:support@oldironsidescoffee.org"
                          className="text-[#C08C45]"
                        >
                          support@oldironsidescoffee.org
                        </a>{" "}
                        with your order number.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* PROFILE */}
          {tab === "profile" && (
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {/* Contact + address */}
              <div className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7">
                <div className="text-[#C08C45] font-semibold mb-3">
                  Contact and shipping
                </div>
                <div className="text-sm text-[#D5CEC4] space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#B8A994] mb-1">
                      Email
                    </div>
                    <div>{user?.email}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#B8A994] mb-1">
                      Default shipping address
                    </div>
                    <div className="space-y-0.5">
                      <div>{defaultAddress?.name}</div>
                      <div>{defaultAddress?.line1}</div>
                      {defaultAddress?.line2 && (
                        <div>{defaultAddress.line2}</div>
                      )}
                      <div>
                        {defaultAddress?.city}, {defaultAddress?.state}{" "}
                        {defaultAddress?.zip}
                      </div>
                      <div>{defaultAddress?.country}</div>
                    </div>
                  </div>
                </div>
                <form
                  className="mt-4 grid gap-3"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    setError("");
                    setLoading(true);
                    try {
                      const token = localStorage.getItem("oi_token");
                      if (!token) {
                        setError("Please log in again.");
                        return;
                      }
                      const fd = new FormData(
                        e.currentTarget as HTMLFormElement
                      );
                      const address = {
                        firstName: String(fd.get("firstName") || "").trim(),
                        lastName: String(fd.get("lastName") || "").trim(),
                        address1: String(fd.get("address1") || "").trim(),
                        address2: String(fd.get("address2") || "").trim(),
                        city: String(fd.get("city") || "").trim(),
                        province: String(fd.get("province") || "").trim(),
                        zip: String(fd.get("zip") || "").trim(),
                        country: "United States",
                        phone: String(fd.get("phone") || "").trim(),
                      };
                      if (
                        !address.address1 ||
                        !address.city ||
                        !address.province ||
                        !address.zip ||
                        !address.country
                      ) {
                        setError(
                          "Address, city, state, zip, and country are required."
                        );
                        return;
                      }
                      const endpoint = editingId
                        ? "/api/account/address-update"
                        : "/api/account/address-create";
                      const payload = editingId
                        ? { id: editingId, address }
                        : { address };
                      const resp = await fetch(endpoint, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(payload),
                      });
                      const text = await resp.text();
                      console.log("[address-create] raw response:", text);
                      let data: any = {};
                      try {
                        data = text ? JSON.parse(text) : {};
                      } catch {
                        setError("Address server returned invalid response.");
                        return;
                      }
                      if (!resp.ok) {
                        setError(data?.error || "Address update failed.");
                        return;
                      }
                      // Refresh addresses from Shopify so UI matches reality
                      try {
                        const r2 = await fetch("/api/account/addresses", {
                          headers: { Authorization: `Bearer ${token}` },
                        });
                        const d2 = await r2.json();
                        setAddresses(d2.addresses || []);
                        setDefaultAddressId(d2.defaultId || null);
                      } catch {}
                      // Update local UI immediately
                      const newDefault = {
                        name: [address.firstName, address.lastName]
                          .filter(Boolean)
                          .join(" ")
                          .trim(),
                        line1: address.address1,
                        line2: address.address2,
                        city: address.city,
                        state: address.province,
                        zip: address.zip,
                        country: address.country,
                      };
                      setDefaultAddress(newDefault);
                      setUser((u: any) => {
                        if (!u) return u;
                        const next = { ...u, defaultAddress: newDefault };
                        localStorage.setItem("oi_user", JSON.stringify(next));
                        return next;
                      });
                      window.dispatchEvent(
                        new CustomEvent("flash", {
                          detail: "Shipping address saved.",
                        })
                      );
                      setEditingId(null);
                      setDeleteId(null);
                      setConfirmDelete(false);
                      form.reset();
                    } catch (err: any) {
                      setError(err?.message || "Address update failed.");
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  {addresses.map((a) => {
                    const isDefault = a.id === defaultAddressId;
                    return (
                      <div
                        key={a.id}
                        className={[
                          "w-full text-left  border p-3 transition relative",
                          isDefault
                            ? "border-[#C08C45] bg-[#F3EBDD]/10"
                            : "border-neutral-700 hover:border-[#C08C45]/60",
                        ].join(" ")}
                      >
                        {/* Address display (no click-to-set-default) */}
                        <div className="block w-full text-left pr-24">
                          <div className="font-semibold text-[#E6DCC8]">
                            {a.firstName} {a.lastName}
                            {isDefault && (
                              <span className="ml-2 text-xs text-[#C08C45]">
                                (Default)
                              </span>
                            )}
                          </div>
                          <div>{a.address1}</div>
                          {a.address2 && <div>{a.address2}</div>}
                          <div>
                            {a.city}, {a.province} {a.zip}
                          </div>
                          <div>{a.country}</div>
                        </div>
                        {/* Actions (top-right) */}
                        <div className="absolute top-3 right-3 flex gap-2">
                          {!isDefault && (
                            <button
                              type="button"
                              disabled={loading}
                              onClick={async () => {
                                const token = localStorage.getItem("oi_token");
                                if (!token) return;
                                setLoading(true);
                                setError("");
                                try {
                                  const resp = await fetch(
                                    "/api/account/address-set-default",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${token}`,
                                      },
                                      body: JSON.stringify({ addressId: a.id }),
                                    }
                                  );
                                  const data = await resp.json();
                                  if (!resp.ok) {
                                    setError(
                                      data?.error ||
                                        "Failed to update default address."
                                    );
                                    return;
                                  }
                                  setDefaultAddressId(a.id);
                                  setDefaultAddress({
                                    name: [a.firstName, a.lastName]
                                      .filter(Boolean)
                                      .join(" "),
                                    line1: a.address1,
                                    line2: a.address2,
                                    city: a.city,
                                    state: a.province,
                                    zip: a.zip,
                                    country: a.country,
                                  });
                                  window.dispatchEvent(
                                    new CustomEvent("flash", {
                                      detail:
                                        "Default shipping address updated.",
                                    })
                                  );
                                } finally {
                                  setLoading(false);
                                }
                              }}
                              className="px-2 py-1 text-xs rounded border border-[#C08C45]/60 text-[#E6DCC8] hover:border-[#C08C45]/60 disabled:opacity-60"
                            >
                              Set default
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => {
                              setEditingId(a.id);
                              setDeleteId(null);
                              setConfirmDelete(false);
                              const f = document.querySelector(
                                'form[class*="mt-4"][class*="grid"][class*="gap-3"]'
                              ) as HTMLFormElement | null;
                              if (!f) return;
                              const setVal = (name: string, val: string) => {
                                const el = f.elements.namedItem(name) as
                                  | HTMLInputElement
                                  | HTMLSelectElement
                                  | null;
                                if (!el) return;
                                (el as any).value = val ?? "";
                              };
                              setVal("firstName", a.firstName);
                              setVal("lastName", a.lastName);
                              setVal("address1", a.address1);
                              setVal("address2", a.address2);
                              setVal("city", a.city);
                              setVal("province", a.province);
                              setVal("zip", a.zip);
                              setVal("country", a.country);
                              setVal("phone", a.phone);
                              window.dispatchEvent(
                                new CustomEvent("flash", {
                                  detail: "Editing address.",
                                })
                              );
                            }}
                            className="px-2 py-1 text-xs rounded border border-[#C08C45]/60 text-[#E6DCC8] hover:border-[#C08C45]/60"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingId(null);
                              setDeleteId(a.id);
                              setConfirmDelete(true);
                            }}
                            className="px-2 py-1 text-xs rounded border border-red-800 text-[#E6C07F] hover:border-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex items-center justify-between">
                    <div className="text-[#C08C45] font-semibold">
                      {editingId
                        ? "Edit shipping address"
                        : "Add shipping address"}
                    </div>
                    {editingId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setDeleteId(null);
                          setConfirmDelete(false);
                          (
                            document.querySelector(
                              'form[class*="mt-4"][class*="grid"][class*="gap-3"]'
                            ) as HTMLFormElement | null
                          )?.reset?.();
                          setError("");
                        }}
                        className="px-3 py-1 text-xs rounded border border-[#C08C45] text-[#C08C45] hover:bg-[#E4D1B5]/10 font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <input
                      name="firstName"
                      placeholder="First name"
                      className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                    />
                    <input
                      name="lastName"
                      placeholder="Last name"
                      className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                    />
                  </div>
                  <input
                    name="address1"
                    placeholder="Address line 1"
                    className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                  />
                  <input
                    name="address2"
                    placeholder="Address line 2 (optional)"
                    className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                  />
                  <div className="grid md:grid-cols-2 gap-3">
                    <input
                      name="city"
                      placeholder="City"
                      className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                    />
                    <select
                      name="province"
                      required
                      defaultValue=""
                      className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                    >
                      <option value="" disabled>
                        State
                      </option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <input
                      name="zip"
                      placeholder="ZIP / Postal code"
                      className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                    />
                    <div className="space-y-2">
                      <select
                        name="country"
                        required
                        defaultValue="United States"
                        disabled
                        className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm opacity-80"
                      >
                        <option value="United States">United States</option>
                      </select>
                      <div className="text-xs text-[#B8A994]">
                        International? Contact us:{" "}
                        <a
                          href="mailto:support@oldironsidescoffee.org"
                          className="text-[#C08C45] font-medium"
                        >
                          support@oldironsidescoffee.org
                        </a>
                      </div>
                    </div>
                  </div>
                  <input
                    name="phone"
                    placeholder="Phone (optional)"
                    className="w-full bg-[#F7F0E6] border border-[#C08C45]/30 px-3 py-3 text-[#071F35] placeholder:text-[#6B6D70] focus:outline-none focus:border-[#C08C45] text-sm"
                  />
                  {error && (
                    <div className="text-sm text-[#E6C07F]">{error}</div>
                  )}
                  {deleteId && confirmDelete && (
                    <div className="mt-4  border border-red-800 bg-red-900/30 p-4">
                      <div className="text-[#E6C07F] font-semibold mb-2">
                        Delete this address?
                      </div>
                      <div className="text-sm text-[#D5CEC4] mb-3">
                        This action cannot be undone.
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setConfirmDelete(false);
                            setDeleteId(null);
                          }}
                          className="px-3 py-2  border border-[#C08C45]/60 text-[#E6DCC8] hover:border-[#C08C45]/60"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          disabled={loading}
                          onClick={async () => {
                            const token = localStorage.getItem("oi_token");
                            if (!token || !deleteId) return;
                            setLoading(true);
                            setError("");
                            const deletingId = deleteId;
                            try {
                              const resp = await fetch(
                                "/api/account/address-delete",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                  },
                                  body: JSON.stringify({ id: deletingId }),
                                }
                              );
                              const data = await resp.json();
                              if (!resp.ok) {
                                setError(data?.error || "Delete failed.");
                                return;
                              }
                              // Compute remaining BEFORE state updates (so default promotion is correct)
                              const remaining = addresses.filter(
                                (x) => x.id !== deletingId
                              );
                              const nextDefault = remaining[0] || null;
                              // Update list UI
                              setAddresses(remaining);
                              // If we deleted the default, promote another one in Shopify
                              if (defaultAddressId === deletingId) {
                                if (nextDefault) {
                                  try {
                                    const resp2 = await fetch(
                                      "/api/account/address-set-default",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                          Authorization: `Bearer ${token}`,
                                        },
                                        body: JSON.stringify({
                                          addressId: nextDefault.id,
                                        }),
                                      }
                                    );
                                    const data2 = await resp2.json();
                                    if (!resp2.ok) {
                                      setError(
                                        data2?.error ||
                                          "Deleted default, but couldn't set a new default."
                                      );
                                      setDefaultAddressId(null);
                                      setDefaultAddress(null);
                                    } else {
                                      setDefaultAddressId(nextDefault.id);
                                      setDefaultAddress({
                                        name: [
                                          nextDefault.firstName,
                                          nextDefault.lastName,
                                        ]
                                          .filter(Boolean)
                                          .join(" "),
                                        line1: nextDefault.address1,
                                        line2: nextDefault.address2,
                                        city: nextDefault.city,
                                        state: nextDefault.province,
                                        zip: nextDefault.zip,
                                        country: nextDefault.country,
                                      });
                                    }
                                  } catch {
                                    setDefaultAddressId(null);
                                    setDefaultAddress(null);
                                  }
                                } else {
                                  setDefaultAddressId(null);
                                  setDefaultAddress(null);
                                }
                              }
                              // If you happened to be editing the same address, exit edit mode + clear form
                              if (editingId === deletingId) {
                                setEditingId(null);
                                (
                                  document.querySelector(
                                    'form[class*="mt-4"][class*="grid"][class*="gap-3"]'
                                  ) as HTMLFormElement | null
                                )?.reset?.();
                              }
                              setConfirmDelete(false);
                              setDeleteId(null);
                              window.dispatchEvent(
                                new CustomEvent("flash", {
                                  detail: "Address deleted.",
                                })
                              );
                            } finally {
                              setLoading(false);
                            }
                          }}
                          className="px-3 py-2  bg-red-600 text-white font-semibold hover:bg-red-500 disabled:opacity-60"
                        >
                          Confirm delete
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    disabled={loading}
                    className="px-3 py-2  bg-[#F3EBDD] text-[#071F35] text-sm font-semibold hover:bg-[#E4D1B5] disabled:opacity-60"
                  >
                    {loading ? "Saving..." : "Save address"}
                  </button>
                </form>
              </div>
              {/* Security */}
              <div className="border border-[#C08C45]/30 bg-[#071F35] p-5 text-[#F3EBDD] md:p-7">
                <div className="text-[#C08C45] font-semibold mb-3">
                  Security and password
                </div>
                <div className="text-sm text-[#D5CEC4] space-y-3">
                  <p>
                    You can change your password and update login details from
                    your secure account portal once connected.
                  </p>
                  <p className="text-[#B8A994] text-xs">
                    For now, email{" "}
                    <a
                      href="mailto:support@oldironsidescoffee.com"
                      className="text-[#C08C45]"
                    >
                      support@oldironsidescoffee.org
                    </a>{" "}
                    if you need help updating your login.
                  </p>
                </div>
                <button
                  // REAL: link to password reset flow
                  className="mt-4 px-3 py-2  bg-[#F3EBDD] text-[#071F35] text-sm font-semibold hover:bg-[#E4D1B5]"
                >
                  Request password reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
