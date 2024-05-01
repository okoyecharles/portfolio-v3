"use client";
import { a, to } from "@react-spring/web";
import { LineProps } from "./props";

export default function HorizontalDottedLine({
  animation: [revealAnimate, glowAnimate],
  variant = "normal",
}: LineProps) {
  const variantClass = {
    normal: "stroke-black dark:stroke-grey-8",
    bold: "stroke-black dark:stroke-grey-b",
  };

  return (
    <div className="w-[100px] select-none">
      <a.div
        className="overflow-hidden line-unveil"
        style={{
          width: to(
            revealAnimate.size,
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
                glowAnimate.pos,
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
                className={`[stop-color:#fff] dark:[stop-color:#000] [stop-opacity:0.8] dark:[stop-opacity:0.7]`}
              />
              <stop
                offset="0.5"
                className={`[stop-color:#fff] dark:[stop-color:#000] [stop-opacity:0]`}
              />
              <stop
                offset="0.66"
                className={`
                [stop-color:#fff] dark:[stop-color:#000] [stop-opacity:0.8] dark:[stop-opacity:0.7]`}
              />
            </linearGradient>
          </defs>
        </svg>
      </a.div>
    </div>
  );
}
