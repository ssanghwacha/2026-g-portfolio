export default function Experience() {
  const items = [
    {
      period: "2025 — 현재",
      role: "직책",
      company: "회사명",
      description: "담당 업무 및 성과를 여기에 작성합니다.",
    },
    {
      period: "2023 — 2025",
      role: "직책",
      company: "회사명",
      description: "담당 업무 및 성과를 여기에 작성합니다.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-8 max-w-4xl mx-auto w-full">
      <h2 className="text-2xl font-bold text-zinc-900 mb-12">Experience</h2>
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1 sm:flex-row sm:gap-16">
            <p className="text-sm text-zinc-400 shrink-0 w-32 pt-0.5">{item.period}</p>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">
                {item.role} · {item.company}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
