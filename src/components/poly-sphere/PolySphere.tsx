"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FunctionComponent, PropsWithChildren, Suspense, useRef } from "react";

export const PolySphere: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="h-[60vh] w-full">
      <Canvas
        camera={{ position: [3, 1, 0], fov: 50 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <hemisphereLight intensity={0.5} color={"red"} />
          <directionalLight
            position={[5, 5, 5]}
            color={"orange"}
            intensity={1}
          />
          <RotatingIcosahedron />
          <OrbitControls enablePan enableZoom={false} enableRotate />
        </Suspense>
      </Canvas>
    </div>
  );
};

const RotatingIcosahedron: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial flatShading color="skyblue" />
      </mesh>
      <mesh scale={1.001}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial flatShading wireframe color="white" />
      </mesh>
    </group>
  );
};
