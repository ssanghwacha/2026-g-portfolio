import Image from "next/image";
import LocationBar from "./LocationBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none">
        <div className="flex flex-col items-center translate-y-[15%]">
          <Image
            src="/assets/hero_main-graphic.svg"
            alt=""
            width={447}
            height={276}
            priority
          />
          <div className="pointer-events-auto">
            <LocationBar />
          </div>
        </div>
      </div>
    </section>
  );
}
