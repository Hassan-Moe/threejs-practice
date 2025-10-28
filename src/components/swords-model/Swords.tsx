"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { SwordsModel } from "./SwordsModel";
import { CtrlScrollControls } from "@/base-components/ctrl-scroll-controls/CtrlScrollControls";

export default function Swords() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 6], fov: 60 }}>
      <ambientLight intensity={0.3} />
      {/* <axesHelper args={[5]}></axesHelper>
        <gridHelper args={[10, 10]}></gridHelper> */}

      {/* Add environment lighting for realism */}
      <Environment preset="studio" />

      {/* Your sword model */}
      <SwordsModel position={[0, 0, 0]} />

      <CtrlScrollControls />
    </Canvas>
  );
}
