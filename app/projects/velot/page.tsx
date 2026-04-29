import Link from "next/link";
import Navbar from "../../components/Navbar";

function AssetSlot({
  label,
  aspect = "aspect-video",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full ${aspect} ${className} flex flex-col items-center justify-center gap-3 rounded-xl`}
      style={{
        border: "1.5px dashed rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6v16M6 14h16" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function VelotPage() {
  return (
    <div style={{ background: "#121212", minHeight: "100vh", color: "#fff" }}>

      <Navbar />

      {/* Header */}
      <div className="w-full px-8 pt-32 pb-16" style={{ maxWidth: 1920, margin: "0 auto" }}>
        <p
          className="mb-4"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
          }}
        >
          2025
        </p>
        <h1
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "10vw",
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#fff",
          }}
        >
          Velot
        </h1>

        {/* Meta row */}
        <div
          className="flex gap-10 mt-10 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
        >
          {[
            { label: "Category", value: "Graphic Design" },
            { label: "Services", value: "Branding, Identity" },
            { label: "Year", value: "2025" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", marginBottom: 6 }}>
                {label.toUpperCase()}
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div className="px-8 mb-3" style={{ maxWidth: 1920, margin: "0 auto 12px" }}>
        <AssetSlot label="HERO IMAGE" aspect="aspect-[16/9]" />
      </div>

      {/* Overview + side image */}
      <div
        className="px-8 flex gap-3 mb-3"
        style={{ maxWidth: 1920, margin: "0 auto 12px" }}
      >
        <div className="flex-[1.2] flex flex-col gap-6 py-12 pr-8">
          <p
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            OVERVIEW
          </p>
          <p
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 18,
              lineHeight: "160%",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {/* Project description goes here */}
            프로젝트 설명을 여기에 입력하세요. 브랜드의 배경, 목표, 접근 방식을 간결하게 서술합니다.
          </p>
        </div>
        <div className="flex-1">
          <AssetSlot label="DETAIL IMAGE" aspect="aspect-[3/4]" />
        </div>
      </div>

      {/* Full width */}
      <div className="px-8 mb-3" style={{ maxWidth: 1920, margin: "0 auto 12px" }}>
        <AssetSlot label="FULL WIDTH" aspect="aspect-[21/9]" />
      </div>

      {/* 2-col grid */}
      <div className="px-8 mb-3 grid grid-cols-2 gap-3" style={{ maxWidth: 1920, margin: "0 auto 12px" }}>
        <AssetSlot label="IMAGE A" aspect="aspect-square" />
        <AssetSlot label="IMAGE B" aspect="aspect-square" />
      </div>

      {/* 3-col grid */}
      <div className="px-8 mb-3 grid grid-cols-3 gap-3" style={{ maxWidth: 1920, margin: "0 auto 12px" }}>
        <AssetSlot label="IMAGE C" aspect="aspect-[3/4]" />
        <AssetSlot label="IMAGE D" aspect="aspect-[3/4]" />
        <AssetSlot label="IMAGE E" aspect="aspect-[3/4]" />
      </div>

      {/* Full width 2 */}
      <div className="px-8 mb-3" style={{ maxWidth: 1920, margin: "0 auto 12px" }}>
        <AssetSlot label="MOCKUP" aspect="aspect-video" />
      </div>

      {/* 2-col uneven */}
      <div className="px-8 mb-3 grid grid-cols-3 gap-3" style={{ maxWidth: 1920, margin: "0 auto 12px" }}>
        <div className="col-span-2">
          <AssetSlot label="IMAGE F" aspect="aspect-[4/3]" />
        </div>
        <AssetSlot label="IMAGE G" aspect="aspect-[4/3]" />
      </div>

      {/* Final full width */}
      <div className="px-8" style={{ maxWidth: 1920, margin: "0 auto" }}>
        <AssetSlot label="CLOSING IMAGE" aspect="aspect-video" />
      </div>

      {/* Next project */}
      <div
        className="px-8 py-24 flex justify-between items-end"
        style={{
          maxWidth: 1920,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: 64,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
          NEXT PROJECT
        </span>
        <Link
          href="/"
          className="flex items-center gap-3 group"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em" }}>
            Next Work →
          </span>
        </Link>
      </div>

    </div>
  );
}
