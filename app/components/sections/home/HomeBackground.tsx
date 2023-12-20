"use client";
import { SpringValue, useTrail } from "@react-spring/web";
import DottedLine from "../../background/DottedLine";
import HorizontalDottedLine from "../../background/HorizontalDottedLine";
import Plus from "../../background/Plus";

export default function HomeBackground() {
  const SQUARE_COUNT = 27;
  const COLUMNS = 7;
  const animationOrder: any = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3,
    10: 4,
    11: 5,
    12: 6,
    13: 7,
    14: 2,
    15: 3,
    16: 4,
    17: 5,
    18: 6,
    19: 7,
    20: 8,
    21: 3,
    22: 4,
    23: 5,
    24: 6,
    25: 7,
    26: 8,
  };

  const glowBackground = useTrail(9, {
    from: { pos: 200 },
    to: { pos: 0 },
    delay: 1000,
  });

  const revealBackground = useTrail(9, {
    from: { size: "0px" },
    to: { size: "100px" },
    delay: 1000,
  });

  const revealBackgroundPlus = useTrail(9, {
    from: { scale: 0 },
    to: { scale: 1 },
    config: {
      tension: 200,
      friction: 30
    }
  });

  return (
    <div className="home-bg grid grid-cols-7 w-[1400px] -z-10 h-fit">
      {Array(SQUARE_COUNT)
        .fill(0)
        .map((_, index) => (
          <BackgroundSquare
            key={index}
            lines={
              (index + 1) / COLUMNS > 3
                ? [0, 1, 0, 0]
                : (index + 1) % COLUMNS === 0
                ? [0, 0, 1, 0]
                : [0, 1, 1, 0]
            }
            plus={(index + 1) / COLUMNS < 3 && (index + 1) % COLUMNS !== 0} 
            lineAnimation={[
              revealBackground[animationOrder[index]],
              glowBackground[animationOrder[index]],
            ]}
            plusAnimation={revealBackgroundPlus[8 - animationOrder[index]]}
          />
        ))}
    </div>
  );
}

interface BackgroundSquareProps {
  lines: (0 | 1)[];
  plus: boolean;
  lineAnimation: [{ size: SpringValue<string> }, { pos: SpringValue<number> }];
  plusAnimation: { scale: SpringValue<number> };
}

function BackgroundSquare({ lines, lineAnimation, plus, plusAnimation }: BackgroundSquareProps) {
  return (
    <div className="bg-section w-[200px] h-[200px] relative">
      {!!lines[0] && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <HorizontalDottedLine animation={lineAnimation} />
        </div>
      )}
      {!!lines[1] && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <DottedLine animation={lineAnimation} />
        </div>
      )}
      {!!lines[2] && (
        <div className="absolute top-full left-1/2 -translate-x-1/2">
          <HorizontalDottedLine animation={lineAnimation} />
        </div>
      )}
      {!!lines[3] && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <DottedLine animation={lineAnimation} />
        </div>
      )}
      {plus && (
        <div className="absolute left-full top-full -translate-x-1/2 -translate-y-1/2">
          <Plus animation={plusAnimation} />
        </div>
      )}
    </div>
  );
}
