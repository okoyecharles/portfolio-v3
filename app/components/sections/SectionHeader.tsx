"use client";
import { a, to, useSpring, useTrail } from "@react-spring/web";
import animation from "../animations/animations";
import Plus from "../background/Plus";
import { useObservedSprings } from "../utils/useObservedSpring";

interface SectionHeaderProps {
  children: React.ReactNode;
  mode?: "default" | "standalone";
}

export default function SectionHeader({
  children,
  mode = "default",
}: SectionHeaderProps) {
  const {
    observedRef,
    springAnimate: [layoutTransform, layoutOpacity, bgPlusReveal],
  } = useObservedSprings(
    [...animation.layout.revealSlow.start, animation.bg.plusReveal.start],
    [
      ...animation.layout.revealSlow.end.map((x) => x()),
      animation.bg.plusReveal.end({ delay: 500 }),
    ],
    [useSpring, useSpring, (cb: Function) => useTrail(2, cb, [])]
  );

  return (
    <header className="flex items-center self-center gap-3" ref={observedRef}>
      <a.h2
				className={`font-visby font-black text-xl lg:text-2xl text-grey-1 dark:text-grey-d leading-[1.2] text-center ${
          mode === "default" ? "uppercase" : ""
        }`}
        style={{
          transform: to(layoutTransform.y, (y) => `translateY(${y}px)`),
          opacity: to(layoutOpacity.opacity, (op: number) => `${op}`),
        }}
      >
        {children}
      </a.h2>
    </header>
  );
}
