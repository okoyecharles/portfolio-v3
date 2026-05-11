import { Interpolation } from "@react-spring/web";

export interface AboutImageProps {
  imageAnimate: () => {
    transform: Interpolation<string, any>;
    opacity: Interpolation<string, any>;
  };
}

export interface AboutListProps {
  items: string[];
}

