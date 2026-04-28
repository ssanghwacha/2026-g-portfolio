export default function Footer() {
  return (
    <footer className="w-full px-8 pt-20 pb-10">

      {/* Top info row */}
      <div
        className="flex justify-between items-center"
        style={{ maxWidth: 1440, margin: "0 auto 24px", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Available for freelance
        </span>
        <a
          href="mailto:sangwhacha0@gmail.com"
          className="text-sm transition-opacity hover:opacity-100"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          sangwhacha0@gmail.com
        </a>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 28 }} />
      </div>

      {/* Big name — centered */}
      <h2
        className="text-center"
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "10.5vw",
          lineHeight: 0.88,
          letterSpacing: "-0.04em",
          color: "#ffffff",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        SANGWHA CHA
      </h2>

      {/* Bottom row */}
      <div
        className="flex justify-between items-center"
        style={{ maxWidth: 1440, margin: "24px auto 0", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          © 2026 Sangwha Cha
        </span>
        <div className="flex gap-6">
          {[
            { label: "Behance", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:sangwhacha0@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs transition-opacity hover:opacity-100"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
