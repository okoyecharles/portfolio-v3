import { current } from "@reduxjs/toolkit";
import React from "react";

type ExperienceTimelineMarkersProps = {
  yearCount: number;
};

export default function ExperienceTimelineMarkers({
  yearCount,
}: ExperienceTimelineMarkersProps) {
  // arrays so it's mappable
  const MONTH_COUNT = new Array(12).fill(null);
  const YEAR_COUNT = new Array(yearCount).fill(null);

  const MONTH_GAP = 32;
  const YEAR_HEIGHT = MONTH_GAP * MONTH_COUNT.length;

  return (
    <svg
      width="12"
      height={YEAR_COUNT.length * YEAR_HEIGHT}
      viewBox={`0 0 12 ${YEAR_COUNT.length * YEAR_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_806_1909)">
        {YEAR_COUNT.map((_, currentYear) => (
          <g key={currentYear}>
            <line
              x1="6"
              y1={currentYear * YEAR_HEIGHT}
              x2="6"
              y2={currentYear * YEAR_HEIGHT + YEAR_HEIGHT}
              className="stroke-grey-d dark:stroke-grey-3"
            />

            {MONTH_COUNT.map((_, currentMonth) => (
              <line key={currentMonth}
                x1="2"
                x2="10"
                y1={currentYear * YEAR_HEIGHT + currentMonth * MONTH_GAP - 0.5}
                y2={currentYear * YEAR_HEIGHT + currentMonth * MONTH_GAP - 0.5}
                className="stroke-grey-d dark:stroke-grey-3"
              />
            ))}

            <g>
              <line
                y1={currentYear * YEAR_HEIGHT}
                y2={currentYear * YEAR_HEIGHT}
                x2="12"
                className="stroke-grey-b dark:stroke-grey-5"
              />
              <line
                y1={currentYear * YEAR_HEIGHT + YEAR_HEIGHT}
                y2={currentYear * YEAR_HEIGHT + YEAR_HEIGHT}
                x2="12"
                className="stroke-grey-b dark:stroke-grey-5"
              />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}

// 6 : 5 --------- d : 3
