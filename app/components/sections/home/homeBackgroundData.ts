import { SpringValue } from "@react-spring/web";

export interface HomeBackgroundProps {
  glowBackground: {
    pos: SpringValue<number>;
  }[];
  revealBackground: {
    size: SpringValue<string>;
  }[];
  revealBackgroundPlus: {
    scale: SpringValue<number>;
  }[];
}

export const animationOrder: any = {
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