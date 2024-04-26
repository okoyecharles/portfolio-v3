import { Suspense, useEffect, useMemo, useRef } from "react";
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
  const { theme } = useTheme();
  const defaultTextureMap = useTexture("/assets/react-three/textures/blank.png");
  const lightTextureMap = useTexture("/assets/react-three/textures/earth-white.png");
  const darkTextureMap = useTexture("/assets/react-three/textures/earth-black.png");

  return (
    <animated.mesh
      rotation={rotationSpring.rotation as unknown as [number, number, number]}
      onAfterRender={() => {
        setLoaded(true);
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={
          theme === "light"
            ? lightTextureMap
            : theme === "dark"
            ? darkTextureMap
            : defaultTextureMap
        }
        toneMapped={false}
      />
    </animated.mesh>
  );
}
