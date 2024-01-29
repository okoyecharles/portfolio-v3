import { Recommendation } from "@/app/data/recommendation"
import { SpringValue } from "@react-spring/web";
import { Dispatch, SetStateAction } from "react";

export type Earth3dProps = {
  rotationSpring: {
    rotation: SpringValue<number[]>;
  }
}
export type EarthMeshProps = Pick<Earth3dProps, 'rotationSpring'>;