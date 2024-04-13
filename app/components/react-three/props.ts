import { SpringValue } from "@react-spring/web";

export type Earth3dProps = {
  rotationSpring: {
    rotation: SpringValue<number[]>;
  }
}
export type EarthMeshProps = Pick<Earth3dProps, 'rotationSpring'>;