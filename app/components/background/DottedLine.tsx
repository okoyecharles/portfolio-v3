"use client";
import { a, useSpring, to } from "@react-spring/web";
import { LineProps } from "./props";

export default function DottedLine({
  animation,
  variant = "normal"
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
    bold: "stroke-black dark:stroke-grey-b"
  }

  return (
    <div className="h-[100px] select-none">
      <a.div
        className="line-unveil overflow-hidden"
        style={{
          height: to(
            (animation ? animation[0] : revealLine).size,
            (h) => `${h}`
          ),
        }}
      >
        <svg
          width="1"
          height="100"
          viewBox="0 0 1 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5L0.5 100.5"
            className={variantClass[variant]}
            strokeDasharray="5 5"
          />
          <a.rect
            width="1"
            height="300"
            fill="url(#paint0_linear_329_1886)"
            style={{
              transform: to(
                (animation ? animation[1] : glowLine).pos,
                (y) => `translateY(-${y}px)`
              ),
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_329_1886"
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.34"
                className={`
                [stop-opacity:0.7] [stop-color:#fff] dark:[stop-color:#000]`}
              />
              <stop
                offset="0.5"
                className={`[stop-color:#fff] dark:[stop-color:#000]`}
                stopOpacity={0}
              />
              <stop
                offset="0.66"
                className={`
                [stop-opacity:0.7] [stop-color:#fff] dark:[stop-color:#000]`}
              />
            </linearGradient>
          </defs>
        </svg>
      </a.div>
    </div>
  );
}
