"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  FunctionComponent,
  PropsWithChildren,
  Suspense,
  useRef,
  useEffect,
  useState,
} from "react";
import * as THREE from "three";

export const PolySphere: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Canvas camera={{ fov: 50 }} shadows>
      <Suspense fallback={null}>
        <hemisphereLight intensity={0.5} color={"red"} />
        <directionalLight position={[5, 5, 5]} color={"orange"} intensity={1} />
        <ScrollCameraController />
        <RotatingIcosahedron />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Suspense>
    </Canvas>
  );
};
const RotatingIcosahedron: FunctionComponent = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Rotation
    groupRef.current.rotation.x += delta * 0.1;
    groupRef.current.rotation.y += delta * 0.02;

    // Move from top-right to center
    const scrollNorm = Math.min(scrollY / 2000, 1); // 0 → 1

    // Top-right position in world space
    const startPos = new THREE.Vector3(2, 2, 0); // adjust x/y to taste
    const centerPos = new THREE.Vector3(0, 0, 0);

    // Interpolate position
    groupRef.current.position.lerpVectors(startPos, centerPos, scrollNorm);
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

const ScrollCameraController = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollTarget = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollTarget.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    console.log("ScrollY:", scrollY);
    setScrollY((prev) =>
      THREE.MathUtils.lerp(prev, scrollTarget.current, delta * 4)
    );

    const scrollNorm = Math.min(scrollY / 2000, 1); // slower, smoother response
    const zoom = THREE.MathUtils.lerp(8, 3, scrollNorm);
    const rotation = scrollNorm * Math.PI * 1; // more noticeable rotation

    state.camera.position.x = Math.sin(rotation) * 3;
    state.camera.position.y = Math.sin(scrollNorm) * 1; // subtle vertical drift
    state.camera.position.z = Math.cos(rotation) * zoom;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};
