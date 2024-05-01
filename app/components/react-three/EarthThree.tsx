import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { Earth3dProps, EarthMeshProps } from "./props";
import { useTheme } from "next-themes";
import EarthThreeLoading from "./EarthThreeLoading";

const LightTextureURL = "/assets/react-three/textures/earth-white.png";
const DarkTextureURL = "/assets/react-three/textures/earth-black.png";
const BlankTextureURL = "/assets/react-three/textures/earth-black.png";

// preloads textures making sure they're available when needed.
useTexture.preload(DarkTextureURL);
useTexture.preload(LightTextureURL);
useTexture.preload(BlankTextureURL);

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
  const { resolvedTheme: theme } = useTheme();

  const textureURL =
    theme === "light"
      ? LightTextureURL
      : theme === "dark"
      ? DarkTextureURL
      : BlankTextureURL;
  const textureMap = useTexture(textureURL);

  return (
    <animated.mesh
      rotation={rotationSpring.rotation as unknown as [number, number, number]}
      onAfterRender={() => {
        setLoaded(true);
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={textureMap} toneMapped={false} />
    </animated.mesh>
  );
}
