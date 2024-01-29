import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { Earth3dProps, EarthMeshProps } from "./props";
import { useTheme } from "next-themes";

export default function Earth3D({ rotationSpring }: Earth3dProps) {
  return (
    <Canvas camera={{ position: [0, 0.5, 1.6] }}>
      <Suspense fallback={null}>
        <EarthMesh rotationSpring={rotationSpring} />
        <ambientLight intensity={3} />
      </Suspense>
    </Canvas>
  );
}

function EarthMesh({ rotationSpring }: EarthMeshProps) {

  const textureURL: Record<string, string> = {
    light: "/assets/react-three/textures/earth-white.png",
    dark: "/assets/react-three/textures/earth-black.png",
  };
  const { theme } = useTheme();
  const textureMap = useTexture(textureURL[theme === 'dark'? 'dark' : 'light']);
  
  return (
    <animated.mesh
      rotation={rotationSpring.rotation}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={textureMap} toneMapped={false} />
    </animated.mesh>
  );
}
