import Image from "next/image";
import LocationBar from "./LocationBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
      <video
        src="https://golden-parfait-60a7b7.netlify.app/001.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
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
