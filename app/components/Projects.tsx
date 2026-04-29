"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const filters = ["All", "Graphic Design", "Brand Design", "Product Design"];

const projects = [
  { id: 1, category: "Graphic Design", tags: ["Velot", "Design", "Branding"], year: "2026", href: "/projects/velot", thumb: "/assets/projects/velot.png" },
  { id: 2, category: "Brand Design", tags: ["BGZT", "Editorial", "Print"], year: "2025", href: null, thumb: "/assets/projects/bgzt.png" },
  { id: 3, category: "Product Design", tags: ["Dumpl", "UI/UX", "Web"], year: "2025", href: null, thumb: "/assets/projects/dumpl.png" },
  { id: 4, category: "Graphic Design", tags: ["Fianchetto", "Photography", "Art Direction"], year: "2026", href: null, thumb: "/assets/projects/fianchetto.png" },
  { id: 5, category: "Product Design", tags: ["Altra", "Motion", "Identity"], year: "2025", href: null, thumb: "/assets/projects/altra.png" },
  { id: 6, category: "Brand Design", tags: ["Billow", "Packaging", "Branding"], year: "2026", href: null, thumb: "/assets/projects/billow.png" },
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const inner = (
    <div className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl will-change-transform">
        <Image
          src={project.thumb}
          alt={project.tags[0]}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 py-3">
        <h3
          className="text-[clamp(0.85rem,1.4vw,1.1rem)] leading-tight text-white"
          style={{ fontFamily: "var(--font-boldonse)" }}
        >
          {project.tags[0]}
        </h3>
        <div
          className="flex shrink-0 flex-col items-end gap-0.5 text-right text-[10px] uppercase leading-tight tracking-widest text-zinc-400"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          <span>{project.year}</span>
          <span>{project.tags[1]}</span>
          <span>{project.tags[2]}</span>
        </div>
      </div>
    </div>
  );

  return project.href ? <Link href={project.href}>{inner}</Link> : inner;
}

export default function Projects() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(timer);
  }, [active]);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="w-full bg-[#121212] px-6 pb-16 pt-40 min-[900px]:px-12"
    >
      <h2
        className="mb-10 text-center text-[36px] leading-none text-zinc-600"
        style={{ fontFamily: "var(--font-boldonse)" }}
      >
        Selected Work
      </h2>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <span
              className={`h-4 w-4 rounded-sm transition-colors ${active === f ? "bg-white" : "bg-zinc-700"}`}
            />
            <span className={active === f ? "text-white" : "text-zinc-400"}>{f}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
