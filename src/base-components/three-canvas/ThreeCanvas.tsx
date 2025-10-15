/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, ReactNode, useRef, useEffect } from "react";

type ThreeCanvasProps = {
  children: ReactNode;
};

export default function ThreeCanvas({ children }: ThreeCanvasProps) {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (controlsRef.current) {
        // Only allow zoom if Cmd (Mac) or Ctrl (Windows) is pressed
        if (event.metaKey || event.ctrlKey) {
          controlsRef.current.enableZoom = true;
        } else {
          controlsRef.current.enableZoom = false;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      shadows
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        {/* Default lights, optional for dev */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        {children}

        <OrbitControls ref={controlsRef} enablePan enableRotate />
      </Suspense>
    </Canvas>
  );
}
