import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductByHandle, ensureCart, cartLinesAdd } from "../../lib/shopify";

type Sample = { title: string; slug: string; price: number; description: string; variants: string[] };
type Props = { onAddToLocalCart: (item: Record<string, unknown>, quantity: number) => void };
const samples: Sample[] = [
  { title: "The Sample Box", slug: "armada-sample-pack", price: 25, description: "Explore all six roasts. One sample on us, plus free standard shipping.", variants: ["Armada Sample Pack", "Sample Box", "The Sample Box"] },
  { title: "Flagship", slug: "flagship", price: 5, description: "Balanced, rich, and smooth. Your everyday medium roast.", variants: ["Flagship"] },
  { title: "The Java Action", slug: "java-action", price: 5, description: "Hazelnut, caramel, red apple, and a creamy finish.", variants: ["The Java Action", "Java Action"] },
  { title: "Baptism By Fire", slug: "baptism-by-fire", price: 5, description: "Deep, full-bodied dark roast with a smooth finish.", variants: ["Baptism By Fire", "Baptism by Fire"] },
  { title: "Black Salvo", slug: "black-salvo", price: 5, description: "An espresso-style blend with vanilla, cocoa, and toasted almond.", variants: ["Black Salvo"] },
  { title: "Oak & Copper", slug: "oak-and-copper", price: 6, description: "Bourbon barrel-aged character with oak, caramel, and warm spice.", variants: ["Oak & Copper", "Oak and Copper"] },
  { title: "Brass Monkey", slug: "brass-monkey", price: 5, description: "Southern pecan with toasted nuts, brown sugar, and spice.", variants: ["Brass Monkey"] },
];
const money = (value: number) => `$${value.toFixed(2)}`;
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

export default function ArmadaSamplePage({ onAddToLocalCart }: Props) {
  const [product, setProduct] = useState<any>(null);
  const [selectedSlug, setSelectedSlug] = useState("armada-sample-pack");
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");
  const selected = samples.find((option) => option.slug === selectedSlug) ?? samples[0];
  useEffect(() => {
    let active = true;
    getProductByHandle("sample-packs")
      .then((result) => { if (active) setProduct(result ?? null); })
      .catch((error) => { console.error("[Shopify] Sample product load failed", error); if (active) setProduct(null); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  async function addToChest() {
    if (adding) return;
    setNotice("");
    if (!product) { setNotice("Samples are unavailable right now. Please try again shortly."); return; }
    const variants = product?.variants?.edges ?? [];
    const match = variants.find((entry: any) => {
      const title = normalize(String(entry?.node?.title ?? ""));
      return selected.variants.some((variant) => title.includes(normalize(variant)));
    });
    const merchandiseId = match?.node?.id;
    if (!merchandiseId) { setNotice("This sample is not currently available in Shopify."); return; }
    const count = Math.max(1, Math.min(99, Math.trunc(quantity)));
    setAdding(true);
    try {
      const cart = await ensureCart();
      await cartLinesAdd({ cartId: cart.id, merchandiseId, quantity: count, attributes: { sampleChoice: selected.title, purchaseMode: "sample" } });
      onAddToLocalCart({
        id: `sample-pack-${selected.slug}`, sku: `sample-pack-${selected.slug}`, slug: selected.slug,
        title: selected.title, price: selected.price, basePrice: selected.price,
        img: "/sample-pack.jpg", detailImg: "/sample-pack2.jpg", merchandiseId, purchaseMode: "sample",
      }, count);
      (window as any).fbq?.("track", "AddToCart", { content_name: selected.title, content_ids: [selected.slug], content_type: "product", value: selected.price * count, currency: "USD" });
      window.dispatchEvent(new CustomEvent("flash", { detail: `${count} × ${selected.title} added to Chest` }));
      setNotice(`${count} × ${selected.title} added to your Chest.`);
    } catch (error) {
      console.error("[Shopify] Failed to add sample", error);
      setNotice("We couldn't add that sample. Please try again.");
    } finally {
      setAdding(false);
    }
  }
  return (
    <main className="bg-[#F3EBDD] text-[#071F35]">
      <section className="border-b border-[#C08C45]/25 bg-[#082239] px-5 pb-7 pt-7 text-[#F3EBDD] md:pb-9 md:pt-9">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C08C45]">THE OLD IRONSIDES TASTING FLEET</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>FIND YOUR ROAST.</h1>
          <p className="mt-3 max-w-[640px] text-sm leading-relaxed text-[#E6DCC8] md:text-base">Six distinct roasts. One way to discover your favorite. Choose a single 2.5 oz sample, or take the entire fleet home.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1200px] gap-9 px-5 py-9 md:gap-12 md:px-8 md:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="min-w-0">
          <img src="/sample-pack2.jpg" alt="Old Ironsides Coffee sample assortment" className="block h-auto w-full" loading="eager" />
          <div className="mt-5 border-l-2 border-[#C08C45] pl-4">
            <h2 className="text-xl font-semibold md:text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>A SMALL TASTE. A BIG STORY.</h2>
            <p className="mt-2 text-sm leading-6 text-[#334556]">Each 2.5 oz sample makes approximately 6 to 8 cups. Experience each roast before committing to a full bag.</p>
            <p className="mt-2 text-sm leading-6 text-[#334556]">The complete Sample Box includes the fleet for $25 with standard shipping included.</p>
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline justify-between border-b border-[#C08C45]/35 pb-3">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>CHOOSE YOUR SAMPLE</h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#94672F]">2.5 OZ EACH</span>
          </div>
          <div className="mt-3 space-y-2">
            {samples.map((option) => {
              const chosen = selectedSlug === option.slug;
              const isBox = option.slug === "armada-sample-pack";
              return (
                <div key={option.slug} className={`border transition-colors ${chosen ? "border-[#071F35] bg-[#E9DCC7]" : "border-[#C8B899] bg-[#F9F5ED] hover:border-[#94672F]"}`}>
                  <button type="button" aria-pressed={chosen} onClick={() => setSelectedSlug(option.slug)} className="flex w-full items-start gap-3 px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#94672F]">
                    <span className={`mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border ${chosen ? "border-[#071F35]" : "border-[#8D806F]"}`}>{chosen && <span className="h-[9px] w-[9px] rounded-full bg-[#071F35]" />}</span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-2"><span className="text-sm font-bold uppercase tracking-[0.04em]">{option.title}</span>{isBox && <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#94672F]">BEST VALUE</span>}</span>
                      <span className="mt-1 block text-xs leading-[1.5] text-[#46515B]">{option.description}</span>
                    </span>
                    <span className="shrink-0 text-sm font-bold tabular-nums">{money(option.price)}</span>
                  </button>
                  {chosen && option.slug !== "armada-sample-pack" && <div className="px-4 pb-3 pl-9"><Link to={`/roast/${option.slug}`} className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#94672F] underline underline-offset-4">Explore this roast</Link></div>}
                </div>
              );
            })}
          </div>
          <div className="mt-5 border border-[#C8B899] bg-[#F9F5ED] p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#94672F]">YOUR SELECTION</p><p className="mt-1 text-base font-semibold">{selected.title}</p></div>
              <span className="text-2xl font-bold tabular-nums">{money(selected.price * quantity)}</span>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <div className="flex h-12 items-center justify-between border border-[#B8A994] sm:w-[130px]">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((n) => Math.max(1, n - 1))} className="h-full w-10 text-lg hover:bg-[#E9DCC7]">−</button>
                <span className="font-semibold tabular-nums">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((n) => Math.min(99, n + 1))} className="h-full w-10 text-lg hover:bg-[#E9DCC7]">+</button>
              </div>
              <button type="button" onClick={addToChest} disabled={adding || loading} className="h-12 flex-1 bg-[#071F35] px-5 text-xs font-bold uppercase tracking-[0.14em] text-[#F3EBDD] transition hover:bg-[#123B55] disabled:cursor-not-allowed disabled:opacity-60">{adding ? "ADDING..." : loading ? "LOADING SAMPLES..." : "ADD TO CHEST"}</button>
            </div>
            {notice && <p role="status" className="mt-3 text-sm text-[#334556]">{notice}</p>}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#596571]">Sample products are priced separately and are not eligible for first-order or subscription discounts. The Sample Box includes free standard shipping; other shipping charges are calculated at checkout.</p>
        </div>
      </section>
    </main>
  );
}
