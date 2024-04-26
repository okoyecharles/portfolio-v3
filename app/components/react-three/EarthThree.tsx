import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { Earth3dProps, EarthMeshProps } from "./props";
import { useTheme } from "next-themes";
import EarthThreeLoading from "./EarthThreeLoading";

export default function EarthThree({ rotationSpring, setLoaded }: Earth3dProps) {
  return (
    <Suspense fallback={<EarthThreeLoading />}>
      <Canvas camera={{ position: [0, 0.5, 1.6] }}>
        <EarthMesh rotationSpring={rotationSpring} setLoaded={setLoaded} />
        <ambientLight intensity={3} />
      </Canvas>
    </Suspense>
  );
}

function EarthMesh({ rotationSpring, setLoaded }: EarthMeshProps) {
  const textureURL: Record<string, string> = {
    light: "/assets/react-three/textures/earth-white.png",
    dark: "/assets/react-three/textures/earth-black.png",
    unmounted: "/assets/react-three/textures/blank.png",
  };
  const { theme } = useTheme();
  const textureMap = useTexture(theme ? textureURL[theme] : textureURL["unmounted"]);

  return (
    <animated.mesh
      rotation={rotationSpring.rotation as unknown as [number, number, number]}
      onAfterRender={() => { setLoaded(true) }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={textureMap} toneMapped={false} />
    </animated.mesh>
  );
}