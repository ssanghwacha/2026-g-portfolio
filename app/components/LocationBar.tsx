"use client";

import { useEffect, useState } from "react";

export default function LocationBar({ color = "#5A87A5" }: { color?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(`${formatted} PT`);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-[30px] py-5">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-5 w-5"
          style={{
            backgroundColor: color,
            WebkitMask: "url('/assets/map-pin.svg?v=5a87a5') center / contain no-repeat",
            mask: "url('/assets/map-pin.svg?v=5a87a5') center / contain no-repeat",
          }}
        />
        <span className="text-sm font-medium" style={{ color }}>
          Currently in Vancouver
        </span>
      </div>
      <span className="text-sm font-medium tabular-nums" style={{ color }}>
        {time}
      </span>
    </div>
  );
}
