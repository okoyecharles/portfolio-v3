"use client";
import { a, to, useSpring } from "@react-spring/web";
import { LineProps } from "./props";

export default function HorizontalDottedLine({
  animation,
  variant = "normal",
}: LineProps) {
  const glowLine = useSpring({
    from: { pos: 200 },
    to: { pos: 0 },
    delay: 200,
  });

  const revealLine = useSpring({
    from: { size: "0px" },
    to: { size: "100px" },
    delay: 200,
  });

  const variantClass = {
    normal: "stroke-grey-5 dark:stroke-grey-6",
    bold: "stroke-black dark:stroke-grey-b",
  };

  return (
    <div className="w-[100px] select-none">
      <a.div
        className="line-unveil overflow-hidden"
        style={{
          width: to(
            (animation ? animation[0] : revealLine).size,
            (w) => `${w}`
          ),
        }}
      >
        <svg
          width="100"
          height="1"
          viewBox="200 0 100 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="200"
            y1="0.5"
            x2="300"
            y2="0.5"
            className={variantClass[variant]}
            strokeDasharray="5 5"
          />
          <a.rect
            width="300"
            height="1"
            fill="url(#paint0_linear_337_1890)"
            style={{
              transform: to(
                (animation ? animation[1] : glowLine).pos,
                (x) => `translateX(${200 - x}px)`
              ),
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_337_1890"
              x1="300"
              y1="1"
              x2="3.5"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.34"
                className={`[stop-color:#fff] dark:[stop-color:#000] [stop-opacity:0.7]`}
              />
              <stop
                offset="0.5"
                className={`[stop-color:#fff] dark:[stop-color:#000] [stop-opacity:0]`}
              />
              <stop
                offset="0.66"
                className={`
                [stop-color:#fff] dark:[stop-color:#000] [stop-opacity:0.7]`}
              />
            </linearGradient>
          </defs>
        </svg>
      </a.div>
    </div>
  );
}
