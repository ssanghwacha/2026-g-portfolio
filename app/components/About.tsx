"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fan = [
  { rotate: -42, x: -580, y: 90 },
  { rotate: -28, x: -385, y: 45 },
  { rotate: -14, x: -193, y: 12 },
  { rotate:   0, x:   0,  y:  0 },
  { rotate:  14, x:  193, y: 12 },
  { rotate:  28, x:  385, y: 45 },
  { rotate:  42, x:  580, y: 90 },
];

const fanHov = [
  { rotate: -52, x: -660, y: 110 },
  { rotate: -35, x: -440, y: 58  },
  { rotate: -17, x: -220, y: 16  },
  { rotate:   0, x:   0,  y:  0  },
  { rotate:  17, x:  220, y: 16  },
  { rotate:  35, x:  440, y: 58  },
  { rotate:  52, x:  660, y: 110 },
];

// 사진 추가 시 여기에 경로 입력 (null = 플레이스홀더)
const photos: (string | null)[] = [
  null,
  null,
  "/assets/about/IMG_0219.JPG",
  "/assets/about/IMG_0254.JPG",
  "/assets/about/IMG_0265.jpg",
  "/assets/about/IMG_4513.JPG",
  null,
];

export default function About() {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { toggleActions: "play none none reset" };

      gsap.fromTo(photoRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: photoRef.current, start: "top 90%", ...st },
      });
      gsap.fromTo(headingRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 90%", ...st },
      });
      gsap.fromTo(bodyRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: bodyRef.current, start: "top 90%", ...st },
      });
      gsap.fromTo(boxRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: boxRef.current, start: "top 85%", ...st },
      });
    }, sectionRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-8 pt-[360px] pb-[400px]" style={{ maxWidth: 1440, margin: "0 auto" }}>

      {/* Photo fan */}
      <div id="about" style={{ scrollMarginTop: 200 }} />
      <div
        ref={photoRef}
        className="relative flex items-end justify-center w-full mb-14 overflow-visible cursor-pointer"
        style={{ height: 420 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {fan.map((p, i) => {
          const t = hovered ? fanHov[i] : p;
          return (
            <div
              key={i}
              className="absolute w-[200px] h-[260px] rounded-xl shadow-xl overflow-hidden"
              style={{
                transform: `translateX(${t.x}px) translateY(${t.y}px) rotate(${t.rotate}deg)`,
                transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                background: "#3f3f46",
              }}
            >
              {photos[i] && (
                <Image src={photos[i]!} alt="" fill className="object-cover" />
              )}
            </div>
          );
        })}
      </div>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="flex flex-col items-center gap-5 text-center text-3xl leading-[150%] tracking-normal font-medium text-white mb-10 mt-[100px] [font-family:var(--font-boldonse),system-ui]"
      >
        <span className="inline-flex items-center gap-1 text-4xl">
          Hi<Image src="/assets/smiley-fill.svg" alt="smile" width={48} height={48} />
        </span>
        <span>
          I&apos;m Sangwha, Graphic Designer
          <br />
          with a strong foundation in Branding.
        </span>
      </h2>

      {/* Description + buttons */}
      <div ref={bodyRef} className="flex flex-col items-center text-center mb-24">
        <p
          className="max-w-[640px] text-base font-normal leading-[120%] tracking-wider text-white/70 mb-3"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          My design journey started with branding. I was drawn to how small details, often
          overlooked, can shape people&apos;s experiences. That same perspective now guides how
          I approach design systems and digital products.
        </p>
        <p
          className="text-base font-normal leading-[120%] tracking-wider text-white/70 mb-8"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          Find me on Linkedin, Behance, or via Email.
        </p>
        <div className="flex gap-3">
          {[
            { label: "Linkedin", href: "#" },
            { label: "Behance", href: "#" },
            { label: "Email", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {label}
              <Image src="/assets/arrow-bend-right-up.svg" alt="" width={14} height={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Career + Education boxes */}
      <div ref={boxRef} className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4 mt-[200px]">

        {/* Career */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-medium text-xl" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Career
            </h3>
            <a
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Resume
            </a>
          </div>
          {[
            { role: "Web Designer",     company: "Aperture Coffee Bar",  year: "2025" },
            { role: "Product Designer", company: "BURST Creative Group", year: "2025" },
            { role: "Graphic Designer", company: "H Mart Toronto",       year: "2024" },
            { role: "Brand Designer",   company: "Bungaejangter Inc.",   year: "2022" },
            { role: "Brand Designer",   company: "Eland Eats",           year: "2021" },
          ].map(({ role, company, year }) => (
            <div
              key={`${role}-${company}`}
              className="flex items-center justify-between py-4 border-t border-white/10"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="text-base text-white font-medium">{role}</span>
              <span className="text-base text-white/70">{company}&nbsp;&nbsp;{year}</span>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <h3 className="text-white font-medium text-xl mb-8" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            Education
          </h3>
          {[
            { degree: "Diploma in New Media Design & Web Development",        school: "BCIT",                       year: "2025" },
            { degree: "Bachelor of Fine Arts in Visual Communication Design", school: "Duksung Women's University", year: "2021" },
            { degree: "Minor in IT Media Engineering",                        school: "Duksung Women's University", year: "2021" },
          ].map(({ degree, school, year }) => (
            <div
              key={degree}
              className="flex items-start justify-between py-4 border-t border-white/10 gap-4"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="max-w-[55%] text-base text-white font-medium">{degree}</span>
              <span className="text-base text-white/70 text-right">{school}&nbsp;&nbsp;{year}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
