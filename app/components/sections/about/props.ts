import { SpringValue } from "@react-spring/web";

export interface AboutImageProps {
  imageAnimate: Function;
  plusReveal: { scale: SpringValue<number> }[];
  lineAnimate: [
    { size: SpringValue<string> },
    { pos: SpringValue<number> }
  ];
}

export interface AboutListProps {
  items: string[];
}