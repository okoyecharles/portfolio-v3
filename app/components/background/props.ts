import { SpringValue } from "@react-spring/web";

export interface LineProps {
  animation: [{ size: SpringValue<string> }, { pos: SpringValue<number> }];
  variant?: 'normal' | 'bold'
}

export interface PlusProps {
  animation: { scale: SpringValue<number> };
  className?: string;
  mode?: 'default' | 'flicker';
}