"use client";

export enum CornerPosition {
  TopLeft = "top-0 left-0",
  TopRight = "top-0 right-0",
  BottomLeft = "bottom-0 left-0",
  BottomRight = "bottom-0 right-0",
}

export default function Corner({
  position = CornerPosition.BottomLeft,
}: {
  position?: CornerPosition;
}) {
  const positionClass = `absolute ${position}`;
  return (
    <div className={`w-8 h-8 ${positionClass}`}>
      <div
        className="w-full h-full relative"
        style={{
          transform: `rotate(
          ${position === CornerPosition.TopLeft ? 90 : position === CornerPosition.TopRight ? 180 : position === CornerPosition.BottomRight ? 270 : 0}deg
)`,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 group-hover/corners:top-[calc(50%+4px)] group-hover/corners:left-[calc(50%-4px)] transition-all stroke-grey-c dark:stroke-grey-3 group-hover/corners:stroke-blue-100"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <g clipPath="url(#clip0_4982_359)">
            <path
              d="M2 1.5V11C2 14 3.5 14 5 14C7 14 11.6667 14 14.5 14"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_4982_359">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
