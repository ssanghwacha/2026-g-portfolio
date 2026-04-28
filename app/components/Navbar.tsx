"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div
        style={{
          width: scrolled ? 392 : 337,
          height: 60,
          paddingLeft: 28,
          paddingRight: 28,
        }}
        className="flex items-center bg-black rounded-full transition-all duration-300 overflow-hidden"
      >
        <a href="#" aria-label="Home" className="shrink-0">
          <Logo width="auto" height={38} fill="white" />
        </a>

        <div className="flex flex-1 items-center justify-end gap-5">
          <a
            href="#about"
            className="text-[16px] font-medium text-white hover:text-zinc-300 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-[16px] font-medium text-white hover:text-zinc-300 transition-colors"
          >
            Work
          </a>

          {scrolled && (
            <>
              <div className="w-px h-4 bg-white/30" />
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/assets/arrow-circle-up.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
