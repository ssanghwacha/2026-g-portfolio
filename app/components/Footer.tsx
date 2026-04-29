import Image from "next/image";

const footerLinks = [
  { label: "EMAIL", href: "mailto:sangwhacha0@gmail.com" },
  { label: "RESUME", href: "#" },
  { label: "BEHANCE", href: "#" },
  { label: "LINKEDIN", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full px-8 pt-20 pb-0">
      <div
        style={{
          position: "relative",
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.3)",
          marginTop: 28,
          color: "#000",
          marginBottom: 30,
        }}
      >
        <div
          className="flex items-center justify-between gap-6 px-6"
          style={{ minHeight: 42, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          <p className="text-sm font-medium" style={{ margin: 0 }}>
            © 2026 • BUILT WITH
          </p>
          <nav className="flex items-center gap-10" aria-label="Footer links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60"
              >
                {link.label}
                <Image
                  src="/assets/arrow-bend-right-up.svg"
                  alt=""
                  width={16}
                  height={16}
                  style={{ filter: "brightness(0)", transform: "translateY(-1px)" }}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Full-width name — full bleed */}
      <div style={{ position: "relative", width: "100vw", left: "50%", transform: "translateX(-50%)", overflow: "hidden", lineHeight: 0.82 }}>
        <p
          style={{
            fontFamily: "var(--font-boldonse), system-ui",
            fontSize: "15.2vw",
            whiteSpace: "nowrap",
            color: "#fff",
            margin: 0,
            padding: 0,
            transform: "translateY(0.04em)",
          }}
        >
          sangwhacha
        </p>
      </div>

    </footer>
  );
}
