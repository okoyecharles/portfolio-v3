"use client";
import { a, to, useSpring, useSpringRef } from "@react-spring/web";
import animation from "../animations/animations";
import { useObservedSprings } from "../../hooks/useObservedSprings";

interface SectionDescriptionProps {
  children: React.ReactNode;
  width?: string;
}

export default function SectionDescription({
  children,
  width,
}: SectionDescriptionProps) {
  const transformRef = useSpringRef();
  const opacityRef = useSpringRef();

  const layoutTransformSpring = useSpring({
    ref: transformRef,
    from: animation.layout.revealSlow.start[0],
    ...animation.layout.revealSlow.end[0](),
  });

  const layoutOpacitySpring = useSpring({
    ref: opacityRef,
    from: animation.layout.revealSlow.start[1],
    ...animation.layout.revealSlow.end[1](),
  });

  const { observedRef } = useObservedSprings([transformRef, opacityRef]);

  return (
    <a.p
      ref={observedRef}
      className="my-4 lg:my-8 self-center max-w-[600px] text-center text-grey-6 dark:text-grey-b"
      style={{
        maxWidth: width,
        transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
      }}
    >
      {children}
    </a.p>
  );
}
