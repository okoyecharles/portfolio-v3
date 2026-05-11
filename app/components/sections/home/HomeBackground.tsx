"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import InteractiveCanvasGrid from "../../background/Grid";

export default function HomeBackground() {
  const { width, height } = useWindowSize();

  return (
    <div className="w-dvw h-screen absolute top-0 left-0 overflow-hidden">
      <InteractiveCanvasGrid width={width} height={height} />
      <div className="relative pointer-events-none">
        <div className="h-24 w-full bg-gradient-to-t from-white dark:from-black -mt-24" />
      </div>
    </div>
  );
}
