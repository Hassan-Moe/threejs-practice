"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const SphereScene = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (lightRef.current && targetRef.current) {
      // scale mouse coords to world units
      const x = mouse.x * 20;
      const y = mouse.y * 20;
      const z = 1; // fixed distance

      lightRef.current.position.set(x, y, z);
      // point the light at the sphere
      lightRef.current.lookAt(targetRef.current.position);
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight ref={lightRef} intensity={1} color="white" castShadow />
      {/* Sphere at origin */}
      <mesh position={[0, 0, 0]} ref={targetRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="red" metalness={0.3} roughness={0.5} />
      </mesh>
    </>
  );
};

export default function SphereCanvas() {
  return (
    <div style={{ width: "100vw", height: "40vh" }}>
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }} shadows>
        <SphereScene />
      </Canvas>
    </div>
  );
}
