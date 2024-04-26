import { SpringValue } from "@react-spring/web";
import { Dispatch, SetStateAction } from "react";

export type Earth3dProps = {
  rotationSpring: {
    rotation: SpringValue<number[]>;
  }
  setLoaded: Dispatch<SetStateAction<boolean>>;
}
export type EarthMeshProps = {
  rotationSpring: {
    rotation: SpringValue<number[]>;
  }
  setLoaded: Dispatch<SetStateAction<boolean>>;
};