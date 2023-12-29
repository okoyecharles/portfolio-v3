import { a, to, useSpring, useTrail } from "@react-spring/web";
import animation from "../animations/animations";
import Plus from "../background/Plus";
import { useObservedSprings } from "../utils/useObservedSpring";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
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
    <header className="self-center items-center flex gap-3" ref={observedRef}>
      <Plus
        className="stroke-blue-100 dark:stroke-blue-d-200"
        animation={bgPlusReveal[0]}
      />
      <a.h2
        className="font-visby font-extrabold text-[24px] text-grey-1 dark:text-grey-d uppercase leading-[1.2] lg:text-[32px]"
        style={{
          transform: to(layoutTransform.y, (y) => `translateY(${y}px)`),
          opacity: to(layoutOpacity.opacity, (op: number) => `${op}`),
        }}
      >
        {children}
      </a.h2>
      <Plus
        className="stroke-blue-100 dark:stroke-blue-d-200"
        animation={bgPlusReveal[1]}
      />
    </header>
  );
}
