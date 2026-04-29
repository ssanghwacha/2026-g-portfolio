const C = "#6B7CFF";

export default function Footer() {
  return (
    <footer className="w-full px-8 pt-20 pb-10">

      {/* Top info row */}
      <div
        className="flex justify-between items-center"
        style={{ maxWidth: 1920, margin: "0 auto 24px", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        <span className="text-sm" style={{ color: C, opacity: 0.5 }}>
          Available for freelance
        </span>
        <a
          href="mailto:sangwhacha0@gmail.com"
          className="text-sm transition-opacity hover:opacity-100"
          style={{ color: C, opacity: 0.5 }}
        >
          sangwhacha0@gmail.com
        </a>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1920, margin: "0 auto" }}>
        <div style={{ height: 1, background: `rgba(107,124,255,0.2)`, marginBottom: 24 }} />
      </div>

      {/* Graphic — centered */}
      <div className="flex justify-center py-6">
        <img
          src="/assets/hero_main-graphic.svg"
          alt=""
          style={{ width: "28vw", maxWidth: 392, filter: "brightness(0) saturate(100%) invert(47%) sepia(60%) saturate(500%) hue-rotate(200deg)" }}
        />
      </div>

    </footer>
  );
}
