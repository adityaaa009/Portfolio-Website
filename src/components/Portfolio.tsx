import { useState } from "react";

type FilterType = "ALL" | "CODED" | "DESIGNED";

export const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>("ALL");

  return (
    <section className="bg-[rgba(26,26,26,1)] pb-[11px]" id="projects">
      <div className="relative min-h-[321px] w-full text-3xl text-black font-bold text-center tracking-[13.06px] leading-none pt-[150px] pb-[120px] px-[70px] max-md:pt-[100px] max-md:pb-[110px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/d2169f140d66b0bf9709174dfd431779c6b3f7c1?placeholderIfAbsent=true"
          alt="Portfolio Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <h2 className="relative z-10">PORTFOLIO</h2>
      </div>

      <div className="max-w-[1299px] mx-auto mt-[51px]">
        <div className="flex justify-center gap-10 text-sm font-semibold mb-8">
          <button
            className={`${filter === "ALL" ? "text-[rgba(255,251,251,1)]" : "text-[rgba(124,124,124,1)]"}`}
            onClick={() => setFilter("ALL")}
          >
            ALL
          </button>
          <button
            className={`${filter === "CODED" ? "text-[rgba(255,251,251,1)]" : "text-[rgba(124,124,124,1)]"}`}
            onClick={() => setFilter("CODED")}
          >
            CODED
          </button>
          <button
            className={`${filter === "DESIGNED" ? "text-[rgba(255,251,251,1)]" : "text-[rgba(124,124,124,1)]"}`}
            onClick={() => setFilter("DESIGNED")}
          >
            DESIGNED
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/557002d059529cf3f703431c5411bed658fef2b5?placeholderIfAbsent=true"
            alt="Project 1"
            className="w-full rounded-lg"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/37d3bbb734db1256e3da964f8103703ea4e5e0b6?placeholderIfAbsent=true"
            alt="Project 2"
            className="w-full rounded-lg"
          />
        </div>

        <p className="text-[rgba(255,251,251,1)] text-xl font-semibold text-center mt-10">
          And many more to come!
        </p>
      </div>
    </section>
  );
};
