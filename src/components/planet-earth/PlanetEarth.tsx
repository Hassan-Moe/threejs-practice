"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { FunctionComponent, useRef } from "react";
import * as THREE from "three";

export const PlanetEarth: FunctionComponent = () => {
  return (
    <div className="h-[60vh] w-full">
      <Canvas camera={{ position: [3, 3, 3], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 6, 3]} color="white" intensity={1} />
        <EarthScene />
        <OrbitControls enablePan enableRotate />
      </Canvas>
    </div>
  );
};

const EarthScene: FunctionComponent = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);

  // Load all textures
  const [
    colorMap, // earthmap1k.jpg
    bumpMap, // earthbump1k.jpg
    specMap, // earthspec1k.jpg
    lightsMap, // earthlights1k.jpg
    cloudMap, // earthcloudmap.jpg
    cloudAlpha, // earthcloudmaptrans.jpg
  ] = useLoader(THREE.TextureLoader, [
    "/planet-earth-texture/earthmap1k.jpg",
    "/planet-earth-texture/earthbump1k.jpg",
    "/planet-earth-texture/earthspec1k.jpg",
    "/planet-earth-texture/earthlights1k.jpg",
    "/planet-earth-texture/earthcloudmap.jpg",
    "/planet-earth-texture/earthcloudmaptrans.jpg",
  ]);

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.05;
    if (cloudRef.current) cloudRef.current.rotation.y += delta * 0.07;
  });

  return (
    <>
      {/* Earth with all maps */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={colorMap} // color
          bumpMap={bumpMap} // height bumps
          bumpScale={0.05}
          specularMap={specMap} // ocean reflections
          specular={new THREE.Color(0x555555)}
          shininess={15} // controls strength of specular highlights
          emissiveMap={lightsMap} // city lights
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Clouds layer */}
      <mesh ref={cloudRef} scale={1.01}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          alphaMap={cloudAlpha} // PNG with white clouds on transparent background
          transparent
          map={cloudMap}
          opacity={0.5}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={1.05}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#4db8ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};
