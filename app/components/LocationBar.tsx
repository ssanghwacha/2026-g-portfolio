"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LocationBar() {
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
        <Image src="/assets/map-pin.svg" alt="location" width={20} height={20} />
        <span className="text-[#AEFACB] text-[14px] font-medium">
          Currently in Vancouver
        </span>
      </div>
      <span className="text-[#AEFACB] text-[14px] font-medium tabular-nums">
        {time}
      </span>
    </div>
  );
}
