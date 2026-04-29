"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const filters = ["All", "Graphic Design", "Brand Design", "Product Design"];

const projects = [
  { id: 1, category: "Graphic Design", tags: ["Velot", "Design", "Branding"], href: "/projects/velot", thumb: "/assets/projects/velot.png", wide: true },
  { id: 2, category: "Brand Design", tags: ["BGZT", "Editorial", "Print"], href: null, thumb: "/assets/projects/bgzt.png", wide: false },
  { id: 3, category: "Product Design", tags: ["Dumpl", "UI/UX", "Web"], href: null, thumb: "/assets/projects/dumpl.png", wide: false },
  { id: 4, category: "Graphic Design", tags: ["Fianchetto", "Photography", "Art Direction"], href: null, thumb: "/assets/projects/fianchetto.png", wide: true },
  { id: 5, category: "Product Design", tags: ["Altra", "Motion", "Identity"], href: null, thumb: "/assets/projects/altra.png", wide: true },
  { id: 6, category: "Brand Design", tags: ["Billow", "Packaging", "Branding"], href: null, thumb: "/assets/projects/billow.png", wide: false },
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false);
  const [activeTag, setActiveTag] = useState<number | null>(null);
  const n = project.tags.length;

  useEffect(() => {
    if (!hovered) {
      setActiveTag(null);
      return;
    }
    let i = 0;
    let id: ReturnType<typeof setTimeout>;
    const step = () => {
      setActiveTag(i % n);
      i++;
      id = setTimeout(step, 300);
    };
    step();
    return () => clearTimeout(id);
  }, [hovered, n]);

  const inner = (
    <div
      className="relative aspect-[4/5] rounded-xl bg-zinc-900 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={project.thumb} alt={project.tags[0]} fill className="object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-1 flex-wrap">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              i === 0
                ? "bg-white text-black"
                : "border border-white/30 text-white bg-black/20 backdrop-blur-sm"
            }`}
            style={{
              transform: activeTag === i ? "translateY(-5px)" : "translateY(0)",
              transition: "transform 0.4s ease-in-out",
            }}
          >
            {tag}
          </span>
        ))}
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
      className="py-24 px-8 w-full"
      style={{ maxWidth: 1440, margin: "0 auto" }}
    >
      <h2 className="text-2xl font-bold mb-6">Selected Works</h2>

      <div className="flex items-center gap-8 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <span
              className={`w-4 h-4 rounded-sm transition-colors ${active === f ? "bg-white" : "bg-zinc-700"}`}
            />
            <span className={active === f ? "text-white" : "text-zinc-500"}>
              {f}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-[6px]">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
