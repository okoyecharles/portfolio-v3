import { SpringValue } from "@react-spring/web";

interface HomeBackgroundProps {
  glowBackground: {
    pos: SpringValue<number>;
  }[];
  revealBackground: {
    size: SpringValue<string>;
  }[];
}

export default HomeBackgroundProps;