"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const photoSlots = [
  { rotate: -28, x: -100, y: 35 },
  { rotate: -14, x: -50,  y: 10 },
  { rotate:   0, x:   0,  y:  0 },
  { rotate:  14, x:  50,  y: 10 },
  { rotate:  28, x: 100,  y: 35 },
];

const photoSlotsHovered = [
  { rotate: -36, x: -140, y: 45 },
  { rotate: -18, x: -68,  y: 12 },
  { rotate:   0, x:   0,  y:  0 },
  { rotate:  18, x:  68,  y: 12 },
  { rotate:  36, x: 140,  y: 45 },
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [fanHovered, setFanHovered] = useState(false);
  const fanRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { toggleActions: "play none none reset" };

      gsap.fromTo(fanRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: fanRef.current, start: "top 85%", ...st },
      });
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%", ...st },
      });
      gsap.fromTo(bodyRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2,
        scrollTrigger: { trigger: bodyRef.current, start: "top 85%", ...st },
      });
      gsap.fromTo(tableRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: tableRef.current, start: "top 85%", ...st },
      });
    });

    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center text-center px-8 pt-[396px] pb-64"
    >
      {/* Photo fan */}
      <div
        ref={fanRef}
        className="relative flex items-end justify-center h-[200px] w-full mb-[80px] cursor-pointer overflow-visible"
        onMouseEnter={() => setFanHovered(true)}
        onMouseLeave={() => setFanHovered(false)}
      >
        {photoSlots.map((p, i) => {
          const t = fanHovered ? photoSlotsHovered[i] : p;
          return (
            <div
              key={i}
              className="absolute w-[90px] h-[110px] rounded-lg bg-zinc-600 border-4 border-white/80 shadow-xl"
              style={{
                transform: `translateX(${t.x}px) translateY(${t.y}px) rotate(${t.rotate}deg)`,
                transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
          );
        })}
      </div>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="max-w-[1100px] text-5xl font-medium uppercase leading-[110%] tracking-normal text-white mb-[50px]"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        Hi,{" "}
        <Image src="/assets/smiley-fill.svg" alt="smile" width={48} height={48} className="inline-block align-middle" />
        {" "}I&apos;m Sangwha,&nbsp; Graphic Designer
        <br />
        with a strong&nbsp; foundation&nbsp; in Branding.
      </h2>

      {/* Body */}
      <div ref={bodyRef} className="flex flex-col items-center">
      <p
        className="max-w-[696px] text-lg font-normal leading-[120%] tracking-wider text-white/70 mb-3"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        My design journey started with branding. I was drawn to how small details, often
        overlooked, can shape people&apos;s experiences. That same perspective now guides how
        I approach design systems and digital products.
      </p>
      <p
        className="text-lg font-normal leading-[110%] tracking-wider text-white/70 mb-8"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        Find me on Linkedin, Behance, or via Email.
      </p>

      {/* Buttons */}
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

      {/* Career & Education */}
      <div ref={tableRef} className="w-full text-left mt-[250px] flex gap-16" style={{ maxWidth: 1440 }}>

        {/* Career */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-2xl font-medium">Career</h3>
            <a
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Resume
            </a>
          </div>
          {[
            { role: "Web Designer",      company: "Aperture Coffee Bar",    year: "2025" },
            { role: "Product Designer",  company: "BURST Creative Group",   year: "2025" },
            { role: "Graphic Designer",  company: "H Mart Toronto",         year: "2024" },
            { role: "Brand Designer",    company: "Bungaejangter Inc.",      year: "2022" },
            { role: "Brand Designer",    company: "Eland Eats",             year: "2021" },
          ].map(({ role, company, year }) => (
            <div key={`${role}-${company}`} className="flex items-center justify-between py-5 border-t border-white/10" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              <span className="text-white font-medium">{role}</span>
              <span className="text-white/50">{company}&nbsp;&nbsp;{year}</span>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="flex-1 pb-[200px]">
          <h3 className="text-white text-2xl font-medium mb-6">Education</h3>
          {[
            { degree: "Diploma in New Media Design & Web Development",         school: "BCIT",                       year: "2025" },
            { degree: "Bachelor of Fine Arts in Visual Communication Design",  school: "Duksung Women's University", year: "2021" },
            { degree: "Minor in IT Media Engineering",                         school: "Duksung Women's University", year: "2021" },
          ].map(({ degree, school, year }) => (
            <div key={degree} className="flex items-center justify-between py-5 border-t border-white/10" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              <span className="text-white/80 font-medium" style={{ maxWidth: "50%" }}>{degree}</span>
              <span className="text-white/50">{school}&nbsp;&nbsp;{year}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
