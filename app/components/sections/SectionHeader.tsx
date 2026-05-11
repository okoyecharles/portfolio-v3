"use client";
import { a, to, useSpring, useSpringRef } from "@react-spring/web";
import animation from "../animations/animations";
import { useObservedSprings } from "../../hooks/useObservedSprings";

interface SectionHeaderProps {
  children: React.ReactNode;
  mode?: "default" | "standalone";
}

export default function SectionHeader({
  children,
  mode = "default",
}: SectionHeaderProps) {
  const transformRef = useSpringRef();
  const opacityRef = useSpringRef();

  const layoutTransform = useSpring({
    ref: transformRef,
    from: animation.layout.revealSlow.start[0],
    ...animation.layout.revealSlow.end[0](),
  });

  const layoutOpacity = useSpring({
    ref: opacityRef,
    from: animation.layout.revealSlow.start[1],
    ...animation.layout.revealSlow.end[1](),
  });

  const { observedRef } = useObservedSprings(
    [transformRef, opacityRef],
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
