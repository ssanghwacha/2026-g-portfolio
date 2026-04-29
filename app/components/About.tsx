"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
    <section ref={sectionRef} className="w-full px-8 pt-[460px] pb-[400px]" style={{ maxWidth: 1920, margin: "0 auto" }}>

      {/* Photo grid */}
      <div id="about" style={{ scrollMarginTop: 200 }} />
      <div ref={photoRef} className="grid grid-cols-4 gap-2 mb-14">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
          <Image src="/assets/about/IMG_0219.JPG" alt="" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
          <Image src="/assets/about/IMG_0254.JPG" alt="" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
          <Image src="/assets/about/IMG_0265.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
          <Image src="/assets/about/IMG_4513.JPG" alt="" fill className="object-cover" />
        </div>
      </div>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-center font-medium uppercase text-white mb-10 mt-[100px]"
        style={{
          fontSize: 48,
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        Hi,{" "}
        <Image src="/assets/smiley-fill.svg" alt="smile" width={48} height={48} className="inline-block align-middle" />
        {" "}I&apos;m Sangwha,&nbsp; Graphic Designer
        <br />
        with a strong&nbsp; foundation&nbsp; in Branding.
      </h2>

      {/* Description + buttons */}
      <div ref={bodyRef} className="flex flex-col items-center text-center mb-24">
        <p
          className="text-white/70 mb-3"
          style={{
            fontSize: 18, fontWeight: 400, lineHeight: "120%", letterSpacing: "0.05em",
            maxWidth: 696, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
        >
          My design journey started with branding. I was drawn to how small details, often
          overlooked, can shape people&apos;s experiences. That same perspective now guides how
          I approach design systems and digital products.
        </p>
        <p
          className="text-white/70 mb-8"
          style={{
            fontSize: 18, fontWeight: 400, lineHeight: "120%", letterSpacing: "0.05em",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
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
              <span className="text-white font-medium" style={{ fontSize: 16 }}>{role}</span>
              <span className="text-white/70" style={{ fontSize: 16 }}>{company}&nbsp;&nbsp;{year}</span>
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
              <span className="text-white font-medium" style={{ fontSize: 16, maxWidth: "55%" }}>{degree}</span>
              <span className="text-white/70 text-right" style={{ fontSize: 16 }}>{school}&nbsp;&nbsp;{year}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
