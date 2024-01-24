"use client";
import { a, to, useSpring } from "@react-spring/web";
import animation from "../animations/animations";
import { useObservedSprings } from "../utils/useObservedSpring";

interface SectionDescriptionProps {
  children: React.ReactNode;
}

export default function SectionDescription({
  children,
}: SectionDescriptionProps) {
  const {
    observedRef,
    springAnimate: [layoutTransformSpring, layoutOpacitySpring],
  } = useObservedSprings(
    [...animation.layout.revealSlow.start],
    [...animation.layout.revealSlow.end.map((x) => x())],
    [useSpring, useSpring]
  );

  return (
    <a.p
      ref={observedRef}
      className="my-4 lg:my-8 self-center max-w-[550px] text-center md:text-[18px] text-grey-6 dark:text-grey-b"
      style={{
        transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
      }}
    >
      {children}
    </a.p>
  );
}
