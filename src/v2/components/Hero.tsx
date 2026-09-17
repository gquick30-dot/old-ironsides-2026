import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#f4efe5] pt-[170px]">
      {/* SHIP IMAGE */}
      <img
        src="/hero-ship.jpg"
        alt="USS Constitution"
        className="absolute right-0 top-0 h-full w-[78%] object-contain object-right"
        style={{ objectPosition: "right 88%" }}
      />

      {/* WHITE FADE FOR TEXT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4efe5] via-[#f4efe5]/95 via-[34%] to-transparent to-[68%]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-170px)] max-w-[1500px] items-center px-8">
        <div className="max-w-[700px]">
          <div className="mb-5 text-sm tracking-[0.28em] text-[#A36F2C]">
            SMALL BATCH COFFEE
          </div>

          <h1
            className="text-[3.6rem] font-bold leading-[1.05] tracking-[0.02em] text-[#03111d]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            BUILT ON TRADITION.
            <span className="mt-2 block text-[#A36F2C]">
              SHIPPED AT PEAK FRESHNESS.
            </span>
          </h1>

          <div className="my-7 flex items-center">
            <div className="h-px w-52 bg-[#C08C45]" />
            <span className="px-3 text-[#C08C45]">★</span>
            <div className="h-px w-52 bg-[#C08C45]" />
          </div>

          <p className="max-w-[520px] text-xl leading-relaxed text-[#17202a]">
            Small-batch coffee roasted to order and sent out just days from the
            drum.
          </p>

          <p className="mt-4 font-serif italic text-lg text-[#4c4c4c]">
            Veteran owned. Veteran roasted.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/roast/armada-sample-pack"
              className="bg-[#C08C45] px-8 py-4 font-bold tracking-wide text-black"
            >
              START WITH A SAMPLE
            </Link>

            <Link
              to="/store"
              className="border border-[#03111d] bg-white/70 px-8 py-4 font-bold tracking-wide text-[#03111d]"
            >
              SHOP FULL BAGS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
