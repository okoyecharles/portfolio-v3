"use client";
import { a } from "@react-spring/web";
import { PlusProps } from "./props";
import animate from "./animate";

export default function Plus({
  className,
  animation: customAnimation,
}: PlusProps) {
  function getTransform() {
    return customAnimation || animate.plusReveal().scale;
  }

  return (
    <a.div
      className="select-none w-[25px] h-[25px]"
      style={{
        transform: getTransform().to((s: any) => `scale(${s})`),
      }}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className || "stroke-grey-8 dark:stroke-grey-9"}`}
      >
        <line x1="12.5" y1="6" x2="12.5" y2="18.5" strokeWidth="2" />
        <line x1="6" y1="12.5" x2="18.5" y2="12.5" strokeWidth="2" />
      </svg>
    </a.div>
  );
}
