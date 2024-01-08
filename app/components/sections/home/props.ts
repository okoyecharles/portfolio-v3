import { SpringValue } from "@react-spring/web";

interface HomeBackgroundProps {
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

export default HomeBackgroundProps;