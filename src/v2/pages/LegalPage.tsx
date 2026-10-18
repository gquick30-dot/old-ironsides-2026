import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DateTime } from "luxon";

export default function LegalPage() {
  const { slug } = useParams();
  const titles: Record<string, string> = {
    returns: "Returns & Freshness Policy",
    shipping: "Roast & Shipping",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
  };
  const title = titles[slug ?? ""] || "Store Policies";
  const [dateLabel, setDateLabel] = useState("");
  useEffect(() => {
    const STORE_TZ = "America/New_York";
    const compute = () => {
      const now = DateTime.now().setZone(STORE_TZ);
      const cutoffThisSunday = now.set({
        weekday: 7,
        hour: 17,
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      const cutoff =
        now <= cutoffThisSunday
          ? cutoffThisSunday
          : cutoffThisSunday.plus({ weeks: 1 });
      const nextRoast = cutoff.plus({ days: 1 }).startOf("day");
      setDateLabel(nextRoast.toFormat("EEEE, LLL d"));
    };
    compute();
    const id = setInterval(compute, 60000);
    return () => clearInterval(id);
  }, []);
  const sectionWrap = "mt-6 text-[#071F35]";
  const proseWrap = "max-w-[72ch] leading-relaxed";
  const stack = "space-y-6";
  const h3 = "text-[#071F35] font-semibold text-lg";
  const p = "mt-1 text-[#364655]";
  const pTight = "text-[#364655]";
  const ul = "mt-1 list-disc list-outside pl-5 space-y-1 text-[#364655]";
  const ulT2 = "mt-2 list-disc list-outside pl-5 space-y-1 text-[#364655]";
  const ol = "mt-1 list-decimal list-outside pl-5 space-y-1 text-[#364655]";
  const link =
    "text-[#8D5A25] hover:text-[#071F35] underline underline-offset-2";
  return (
    <main className="bg-[#F3EBDD] text-[#071F35]">
      <div className="border-b border-[#C08C45]/20 bg-[#0A263D] px-5 pb-9 pt-9 text-[#F3EBDD] md:px-5 md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#A66C2C]">
            OLD IRONSIDES COFFEE · POLICIES
          </p>
          <h1
            className="mt-3 font-semibold text-3xl md:text-4xl"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {title}
          </h1>
          <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-[#D5CEC4]">
            {slug === "shipping"
              ? "Roast schedule, shipping timing, and free-shipping details."
              : slug === "returns"
              ? "Freshness, replacements, and reporting an order issue."
              : slug === "privacy"
              ? "How we collect, use, and protect information."
              : "Terms governing purchases and use of our website."}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] px-5 py-7 md:px-8 md:py-10">
        <nav
          aria-label="Policies"
          className="mb-8 flex flex-wrap gap-x-5 gap-y-2 border-b border-[#C08C45]/30 pb-5 text-xs font-bold uppercase tracking-[0.09em]"
        >
          {Object.entries(titles).map(([key, label]) => (
            <Link
              key={key}
              to={`/legal/${key}`}
              aria-current={slug === key ? "page" : undefined}
              className={
                slug === key
                  ? "text-[#9A6428] underline underline-offset-8"
                  : "text-[#071F35] hover:text-[#9A6428]"
              }
            >
              {label as string}
            </Link>
          ))}
        </nav>
        {slug === "shipping" && (
          <div className="mb-7 border border-[#C08C45]/35 bg-[#FFF9F0] p-5 md:p-7">
            <div className="text-sm md:text-base text-[#364655]">
              <p>We roast on Monday and Tuesday and ship on Wednesday.</p>
              <p className="mt-2">
                Your next eligible roast date is{" "}
                <span className="font-semibold text-[#98642A]">
                  {dateLabel}
                </span>
                .
              </p>
              <p className="mt-2">
                Orders placed before <strong>Sunday 5 p.m. ET</strong> are
                roasted that week. Orders placed after roll to the following
                week.
              </p>
              <p className="mt-2">
                We roast to order. It will not arrive overnight like Amazon. It
                will arrive fresh.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-[#A66C2C]">Free Shipping</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Mix and match any roasts.</li>
                  <li>
                    <strong>3 or more bags</strong> ship free{" "}
                    <strong>within the continental United States only</strong>.
                  </li>
                  <li>
                    Free shipping applies to standard ground service only (UPS
                    or equivalent carrier).
                  </li>
                  <li>
                    International orders and non-continental U.S. destinations
                    (including Alaska and Hawaii) do not qualify for free
                    shipping.
                  </li>
                </ul>
                <p className="mt-2">
                  Orders of 1 or 2 bags, and all non-qualifying destinations,
                  ship at the carrier rates shown at checkout.
                </p>
              </div>
              <p className="mt-4 text-[#98642A]">
                Missed the cutoff time? Leave a note at checkout or reply to
                your confirmation email. We will do our best to accommodate.
              </p>
            </div>
          </div>
        )}
        {slug === "returns" && (
          <section className={sectionWrap}>
            <div className={proseWrap}>
              <div className={stack}>
                <div>
                  <h3 className={h3}>Short version</h3>
                  <p className={p}>
                    Our coffee is roasted to your order and sails out fresh. We
                    cannot accept returns on roasted coffee. If there is
                    something wrong with your order, please contact us.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>Why no returns on coffee</h3>
                  <p className={p}>
                    Once beans are roasted and ship out, they’re like a frigate
                    leaving port. We cannot resell opened or returned coffee,
                    and we do not restock roasted bags.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>Customer's Satisfaction</h3>
                  <p className={p}>
                    If your package is damaged, the coffee is defective in any
                    way, or we made a mistake, contact us. We won't leave you at
                    the harbor.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>If you're unhappy with your purchase</h3>
                  <p className={p}>
                    Email us and we will not leave you at the harbor. We can
                    recommend a better roast to your liking or find another fix.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>How to report an issue (quick steps)</h3>
                  <ol className={ol}>
                    <li>Contact us within 5 days of delivery.</li>
                    <li>
                      Include your order number, a brief note on the issue, and
                      photos if the package or bag is damaged.
                    </li>
                    <li>We’ll reply quickly with our resolution</li>
                  </ol>
                </div>
                <div>
                  <h3 className={h3}>What this covers</h3>
                  <ul className={ul}>
                    <li>Damaged in transit</li>
                    <li>Wrong item received</li>
                    <li>
                      Defective product (seal issues, off roast, quality
                      problems)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>What this doesn’t cover</h3>
                  <ul className={ul}>
                    <li>
                      Returns or exchanges on roasted coffee that was correctly
                      fulfilled
                    </li>
                    <li>
                      Taste preferences after correct fulfillment
                      <span className="text-[#63717D]">
                        {" "}
                        (still contact us and we’ll carefully review your case)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>Contact</h3>
                  <p className={p}>
                    <a
                      href="mailto:Support@oldironsidescoffee.org"
                      className={link}
                    >
                      Support@oldironsidescoffee.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {slug === "terms" && (
          <section className="mt-3 text-[#071F35]">
            <div className={proseWrap}>
              <div className={stack}>
                <div>
                  <h3 className={h3}>Effective Date</h3>
                  <p className={p}>October 11, 2025</p>
                </div>
                <div>
                  <h3 className={h3}>Overview</h3>
                  <p className={p}>
                    These Terms of Service govern your access to and use of the
                    websites, online stores, and services operated by Liberty
                    Lighthouse Supply Co., dba Old Ironsides Coffee (“Company,”
                    “we,” “us,” or “our”). By visiting our site, placing an
                    order, creating an account, or subscribing to any product,
                    you agree to these Terms and to our Privacy Policy
                    (incorporated by reference). If you do not agree, do not use
                    our site or services.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>1. Eligibility and Accounts</h3>
                  <ul className={ul}>
                    <li>
                      You must be at least 18 years old and able to enter a
                      binding contract.
                    </li>
                    <li>
                      You are responsible for your account and for safeguarding
                      your credentials.
                    </li>
                    <li>
                      You agree to provide accurate information and keep it
                      updated.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>
                    2. Orders, Acceptance, and Right to Refuse Service
                  </h3>
                  <ul className={ul}>
                    <li>
                      Your order is an offer to buy. We may accept, reject, or
                      cancel any order at our discretion.
                    </li>
                    <li>
                      We may refuse service, cancel orders, or terminate
                      subscriptions for any reason.
                    </li>
                    <li>
                      We may limit or cancel quantities per person, household,
                      account, payment card, or order.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>3. Pricing, Availability, and Errors</h3>
                  <ul className={ul}>
                    <li>
                      Prices, descriptions, and availability may change without
                      notice.
                    </li>
                    <li>
                      We may correct errors or cancel orders placed with
                      incorrect information, even after submission.
                    </li>
                    <li>
                      Applicable taxes, shipping, and handling appear at
                      checkout and are your responsibility unless stated
                      otherwise.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>4. Payment</h3>
                  <ul className={ul}>
                    <li>
                      You authorize us and our processors to charge your
                      selected payment method for all amounts due.
                    </li>
                    <li>
                      If payment fails, you remain responsible; we may suspend
                      or cancel shipments or subscriptions until resolved.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>5. Subscriptions and Auto-Renewal</h3>
                  <ul className={ul}>
                    <li>
                      Subscriptions renew automatically at the stated interval
                      until you cancel.
                    </li>
                    <li>
                      Cancel any time before the renewal cutoff shown in your
                      account or emails.
                    </li>
                    <li>
                      We may change subscription pricing or terms with notice.
                    </li>
                    <li>
                      We may pause or cancel a subscription for any reason.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>
                    5A. Limited Releases and Discount Exclusions
                  </h3>
                  <ul className={ul}>
                    <li>
                      Certain products are excluded from subscription discounts,
                      first-order promotions, and site-wide offers unless
                      expressly stated otherwise.
                    </li>
                    <li>
                      <strong>Oak & Copper</strong> is a specialty,
                      limited-release coffee and is{" "}
                      <strong>not eligible</strong> for the 15% Subscribe & Save
                      discount.
                    </li>
                    <li>
                      <strong>Oak & Copper</strong> is{" "}
                      <strong>not eligible</strong> for the 20% first-order
                      discount or any automatic promotional discount.
                    </li>
                    <li>
                      The only approved discount for Oak & Copper:{" "}
                      <strong>
                        $1 per bag discount for verified GOVX members
                      </strong>
                      , when applicable.
                    </li>
                    <li>
                      We reserve the right to limit quantities, suspend
                      discounts, or remove any promotion for limited releases at
                      any time.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>
                    6. Shipping, Risk of Loss, and Delivery
                  </h3>
                  <ul className={ul}>
                    <li>
                      We ship to the address you provide. Title and risk of loss
                      pass when the carrier accepts the shipment.
                    </li>
                    <li>
                      Delivery dates are estimates. We are not liable for delays
                      outside our control.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>
                    7. Returns, Replacements, and Freshness Policy
                  </h3>
                  <p className={p}>
                    To avoid any conflict, this section mirrors our Returns &
                    Freshness Policy and controls if inconsistent elsewhere.
                  </p>
                  <ul className={ulT2}>
                    <li>
                      No returns on roasted coffee that was correctly fulfilled.
                    </li>
                    <li>
                      If damaged, defective, or if we made a mistake, contact us
                      and we’ll replace or refund.
                    </li>
                    <li>
                      Not happy? Email us. We can recommend a better fit, or
                      find a solution.
                    </li>
                    <li>Report issues within 7 days of delivery.</li>
                    <li>
                      Covers: damaged in transit, wrong item, defective product.
                    </li>
                    <li>
                      Doesn’t cover: correctly fulfilled roasted coffee or pure
                      taste preferences.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>
                    8. Promotions, Discounts, and Gift Cards
                  </h3>
                  <ul className={ul}>
                    <li>
                      Promotions, coupons, and discounts are subject to their
                      own rules.
                    </li>
                    <li>
                      Discounts do not apply to limited-release or specialty
                      products unless expressly stated.
                    </li>
                    <li>
                      <strong>Oak & Copper</strong> is excluded from the 15%
                      Subscribe & Save discount and the 20% first-order
                      discount.
                    </li>
                    <li>
                      Gift cards are not reloadable, refundable, or redeemable
                      for cash unless required by law.
                    </li>
                    <li>
                      Free shipping applies only to qualifying orders shipped
                      within the continental United States.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>Launch Mug Offer</h3>
                  <p className={p}>
                    The launch mug offer is available to the first 200 active
                    subscribers only. To qualify, customers must place a
                    subscription order and successfully complete a second
                    subscription shipment. One mug per customer.
                  </p>
                  <p className={p}>
                    The mug ships separately from coffee orders and may arrive
                    in a separate package. Offer is non-transferable, not
                    redeemable for cash, and may not be combined with other
                    promotions or discounts.
                  </p>
                  <p className={p}>
                    This offer ends automatically once 200 qualifying
                    subscribers have been fulfilled or supplies are exhausted.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>10. User Content and Reviews</h3>
                  <ul className={ul}>
                    <li>
                      You grant us a worldwide, royalty-free, perpetual license
                      to use your content.
                    </li>
                    <li>
                      You represent your content is accurate, lawful, and
                      non-infringing.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>11. Acceptable Use</h3>
                  <p className={p}>
                    You agree not to violate law or third-party rights;
                    interfere with or disrupt the site; bypass security
                    measures; or scrape/harvest data except as allowed by
                    robots.txt or our written permission.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>12. Intellectual Property</h3>
                  <p className={p}>
                    The site, products, logos, graphics, text, and other
                    materials are owned by us or our licensors.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>13. Health and Safety</h3>
                  <p className={p}>
                    Coffee contains caffeine. We do not provide medical advice.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>14. Third-Party Services and Links</h3>
                  <p className={p}>
                    We are not responsible for third-party websites, apps, or
                    services that may be linked or integrated.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>
                    15. SMS, Email, and Electronic Communications
                  </h3>
                  <p className={p}>
                    By providing a phone number or email, you consent to receive
                    transactional and marketing messages, subject to our Privacy
                    Policy.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>16. Disclaimers</h3>
                  <ul className={ul}>
                    <li>
                      The site and all products/services are provided “as is”
                      and “as available.”
                    </li>
                    <li>
                      We disclaim all warranties to the fullest extent allowed
                      by law.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={h3}>17. Limitation of Liability</h3>
                  <p className={p}>
                    To the fullest extent allowed by law, we and our suppliers
                    are not liable for indirect, incidental, special,
                    consequential, or punitive damages.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>18. Indemnification</h3>
                  <p className={p}>
                    You agree to defend, indemnify, and hold harmless the
                    Company and our officers, directors, employees, agents, and
                    affiliates from claims related to your use of the site.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>
                    19. Dispute Resolution, Arbitration, and Class Action Waiver
                  </h3>
                  <p className={p}>
                    You and the Company agree to resolve disputes through
                    binding arbitration administered by the American Arbitration
                    Association. You may opt out by sending written notice to{" "}
                    <a
                      href="mailto:Support@oldironsidescoffee.org"
                      className={link}
                    >
                      Support@oldironsidescoffee.org
                    </a>{" "}
                    within 30 days of your first use of our services.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>20. Governing Law</h3>
                  <p className={p}>
                    These Terms are governed by the laws of the State of Utah.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>21. Termination</h3>
                  <p className={p}>
                    We may suspend or terminate your access at any time and for
                    any reason.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>22. Force Majeure</h3>
                  <p className={p}>
                    We are not liable for delays or failures caused by events
                    outside our reasonable control.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>23. Changes to the Services or Terms</h3>
                  <p className={p}>
                    We may update these Terms at any time. Your continued use
                    after changes means you accept the updated Terms.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>24. Assignment</h3>
                  <p className={p}>
                    You may not assign or transfer your rights without our prior
                    written consent.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>25. Severability and Waiver</h3>
                  <p className={p}>
                    If any provision is found unenforceable, the remaining
                    provisions remain in full force.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>26. Entire Agreement</h3>
                  <p className={p}>
                    These Terms, together with the Privacy Policy and order or
                    subscription details, are the entire agreement between you
                    and us.
                  </p>
                </div>
                <div>
                  <h3 className={h3}>27. Contact</h3>
                  <p className={p}>
                    Liberty Lighthouse Supply Co., dba Old Ironsides Coffee
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:Support@oldironsidescoffee.org"
                      className={link}
                    >
                      Support@oldironsidescoffee.org
                    </a>
                    <br />
                    Address: 6 Liberty Square #2564, Boston, MA 02109
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {slug === "privacy" && (
          <section className="mt-3 text-[#071F35]">
            <div className="max-w-[68ch] leading-relaxed space-y-8">
              <div className="space-y-2">
                <h3 className={h3}>Effective date</h3>
                <div className={pTight}>October 11, 2025</div>
              </div>
              <p className={pTight}>
                This Privacy Policy explains how Liberty Lighthouse Supply Co.,
                dba Old Ironsides Coffee (“Company,” “we,” “us,” or “our”)
                collects, uses, shares, and protects personal information when
                you visit our websites, make a purchase, create an account,
                subscribe, or otherwise interact with us.
              </p>
              <p className={pTight}>
                Liberty Lighthouse Supply Co. is the data controller for
                purposes of applicable privacy laws.
              </p>
              <div className="space-y-2">
                <h3 className={h3}>
                  Contact for privacy questions and requests
                </h3>
                <p className={pTight}>
                  Email:{" "}
                  <a
                    href="mailto:Support@oldironsidescoffee.org"
                    className={link}
                  >
                    Support@oldironsidescoffee.org
                  </a>
                  <br />
                  Address: 6 Liberty Square #2564, Boston, MA 02109
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>1. Information we collect</h3>
                <p className={pTight}>
                  We collect information depending on how you interact with us.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>
                    <span className="font-semibold">Identifiers:</span> name,
                    email address, billing and shipping addresses, phone number,
                    account username, IP address, device identifiers.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Commercial information:
                    </span>{" "}
                    products viewed or purchased, order history, subscription
                    selections, discount code usage, customer service
                    interactions.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Internet or network activity:
                    </span>{" "}
                    pages viewed, links clicked, timestamps, approximate
                    location derived from IP, cookie identifiers, analytics
                    events.
                  </li>
                  <li>
                    <span className="font-semibold">Payment information:</span>{" "}
                    limited payment details from payment processors. We do not
                    store full card numbers.
                  </li>
                  <li>
                    <span className="font-semibold">User content:</span> product
                    reviews, ratings, photos, messages you send to us.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Inferences and preferences:
                    </span>{" "}
                    roast and product preferences, marketing segment membership,
                    subscription cadence.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Sensitive information:
                    </span>{" "}
                    we do not intentionally collect sensitive personal
                    information.
                  </li>
                </ul>
                <p className={pTight}>
                  We obtain personal information from you directly, your
                  devices, service providers, and marketing and analytics
                  partners.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>2. Why we use your information</h3>
                <p className={pTight}>
                  For users in the EEA and UK, legal bases appear in
                  parentheses.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>
                    <span className="font-semibold">Provide the services:</span>{" "}
                    process and fulfill orders, manage subscriptions, deliver
                    products, provide support.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Payments and fraud prevention:
                    </span>{" "}
                    process payments, verify identity, prevent abuse.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Customer communications:
                    </span>{" "}
                    send transactional emails and SMS.
                  </li>
                  <li>
                    <span className="font-semibold">Marketing:</span> send
                    promotional emails and SMS where permitted.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Analytics and improvement:
                    </span>{" "}
                    understand site performance and improve services.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Security and compliance:
                    </span>{" "}
                    enforce terms and comply with legal obligations.
                  </li>
                  <li>
                    <span className="font-semibold">Financial incentives:</span>{" "}
                    operate opt-in programs like subscribe-and-save discounts.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>3. Cookies and similar technologies</h3>
                <p className={pTight}>
                  We use cookies, pixels, tags, and similar technologies to
                  enable site functionality, analytics, and marketing.
                </p>
                <h4 className={h3}>Your choices</h4>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>Control cookies in your browser settings.</li>
                  <li>
                    Opt out through the cookie banner or device settings where
                    available.
                  </li>
                  <li>
                    Where required, we will treat Global Privacy Control as a
                    valid request.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>4. How we share information</h3>
                <p className={pTight}>
                  We do not sell personal information for money. We may share
                  limited information with advertising and analytics partners.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>
                    <span className="font-semibold">
                      Service providers and processors:
                    </span>{" "}
                    ecommerce platforms, payment processors, email and SMS
                    platforms, analytics providers, shipping partners.
                  </li>
                  <li>
                    <span className="font-semibold">Business partners:</span>{" "}
                    only where you have explicitly opted in.
                  </li>
                  <li>
                    <span className="font-semibold">Legal and safety:</span> to
                    comply with law or protect rights.
                  </li>
                  <li>
                    <span className="font-semibold">Business transfers:</span>{" "}
                    in connection with a merger, acquisition, financing, or sale
                    of assets.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Aggregated or de-identified data:
                    </span>{" "}
                    information that cannot reasonably be linked to you.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>5. Your choices about marketing</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>
                    <span className="font-semibold">Email:</span> use the
                    unsubscribe link or email{" "}
                    <a
                      href="mailto:Support@oldironsidescoffee.org"
                      className={link}
                    >
                      Support@oldironsidescoffee.org
                    </a>
                    .
                  </li>
                  <li>
                    <span className="font-semibold">SMS:</span> reply STOP to
                    opt out of marketing texts.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>6. Your privacy rights</h3>
                <p className={pTight}>
                  Your rights depend on your location. We will honor requests as
                  required by law.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>
                    know and access categories and specific pieces of personal
                    information,
                  </li>
                  <li>correct inaccurate information,</li>
                  <li>delete information,</li>
                  <li>opt out of sale or sharing for targeted advertising,</li>
                  <li>limit use and disclosure of sensitive information,</li>
                  <li>non-discrimination for exercising these rights.</li>
                </ul>
                <p className={pTight}>
                  <span className="font-semibold">
                    How to submit a request:
                  </span>{" "}
                  email{" "}
                  <a
                    href="mailto:Support@oldironsidescoffee.org"
                    className={link}
                  >
                    Support@oldironsidescoffee.org
                  </a>{" "}
                  with your name, email, request type, and state of residence.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>7. California disclosures</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>
                    <span className="font-semibold">Categories collected:</span>{" "}
                    identifiers, commercial information, internet activity,
                    approximate geolocation, user content, inferences.
                  </li>
                  <li>
                    <span className="font-semibold">Sources:</span> directly
                    from you, your devices, service providers, analytics and
                    marketing partners.
                  </li>
                  <li>
                    <span className="font-semibold">Purposes:</span> as listed
                    in Section 2.
                  </li>
                  <li>
                    <span className="font-semibold">Disclosures:</span> service
                    providers, shipping carriers, analytics vendors, support
                    tools.
                  </li>
                  <li>
                    <span className="font-semibold">Sale or sharing:</span> we
                    do not sell personal information for money.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Sensitive personal information:
                    </span>{" "}
                    we do not use or disclose it for purposes requiring a right
                    to limit.
                  </li>
                  <li>
                    <span className="font-semibold">Non-discrimination:</span>{" "}
                    we will not discriminate against you for exercising your
                    rights.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>8. Children’s privacy</h3>
                <p className={pTight}>
                  Our services are not intended for children under 13.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>9. Data retention</h3>
                <p className={pTight}>
                  We keep personal information only as long as necessary.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#364655]">
                  <li>orders and tax records: up to 7 years,</li>
                  <li>
                    customer support records: up to 3 years after resolution,
                  </li>
                  <li>
                    marketing contact data: until you unsubscribe or become
                    inactive,
                  </li>
                  <li>
                    analytics data: per vendor defaults or a reasonable period.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>10. Security</h3>
                <p className={pTight}>
                  We use safeguards designed to protect personal information. No
                  method of transmission or storage is completely secure.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>11. International users</h3>
                <p className={pTight}>
                  We are based in the United States. Your information may be
                  transferred to, stored in, or processed in the United States.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>12. Third party sites and services</h3>
                <p className={pTight}>
                  Third-party privacy practices are governed by their own
                  policies.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>13. Do Not Track</h3>
                <p className={pTight}>
                  Our services do not respond to Do Not Track signals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>14. Changes to this Policy</h3>
                <p className={pTight}>
                  We may update this Policy from time to time.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={h3}>15. How to contact us</h3>
                <p className={pTight}>
                  Liberty Lighthouse Supply Co., dba Old Ironsides Coffee
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:Support@oldironsidescoffee.org"
                    className={link}
                  >
                    Support@oldironsidescoffee.org
                  </a>
                  <br />
                  Address: 6 Liberty Square #2564, Boston, MA 02109
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
