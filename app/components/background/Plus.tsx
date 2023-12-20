"use client";
import { a, SpringValue, useSpring, to } from "@react-spring/web";

export default function Plus({
  animation,
}: {
  animation?: { scale: SpringValue<number> };
}) {
  const revealPlus = useSpring({
    from: { scale: 0 },
    to: [{ scale: 1 }, { scale: 0 }],
    delay: 200,
  });
  return (
    <a.div
      className="select-none w-[25px] h-[25px]"
      style={{
        transform: (animation || revealPlus).scale
          .to([0, 0.5, 1], [0, 1, 0])
          .to((s) => `scale(${s})`),
      }}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-blue-100 dark:stroke-blue-d-200"
      >
        <line x1="12.5" y1="6" x2="12.5" y2="18.5" strokeWidth="2" />
        <line x1="6" y1="12.5" x2="18.5" y2="12.5" strokeWidth="2" />
      </svg>
    </a.div>
  );
}
