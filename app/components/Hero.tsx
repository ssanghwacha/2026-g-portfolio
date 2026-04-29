"use client";

import Image from "next/image";
import LocationBar from "./LocationBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none">
        <div className="flex flex-col items-center translate-y-[15%]">
          <Image
            src="/assets/hero_main-graphic.svg?v=bbb"
            alt=""
            width={447}
            height={276}
            priority
          />
          <div className="pointer-events-auto">
            <LocationBar color="#bbbbbb" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition-all hover:bg-white/20"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Selected Work
          <svg
            className="transition-transform duration-300 group-hover:translate-y-1"
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M7 1v12M1 7l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
