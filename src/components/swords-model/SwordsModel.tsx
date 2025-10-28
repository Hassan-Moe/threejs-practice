"use client";
import { Scene } from "@/base-components/scene/Scene";

import * as THREE from "three";
import React, { JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    sword_lp_sword_mat_0: THREE.Mesh;
    sword_lp001_sword_mat_0: THREE.Mesh;
    Box002_stand_mat_0: THREE.Mesh;
    Line002_stand_mat_0: THREE.Mesh;
    Object004_scabbard_mat_0: THREE.Mesh;
  };
  materials: {
    sword_mat: THREE.MeshStandardMaterial;
    stand_mat: THREE.MeshStandardMaterial;
    scabbard_mat: THREE.MeshStandardMaterial;
  };
};

export function SwordsModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/fantasy_sword.glb"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <group
          position={[0, 248.01, 0]}
          rotation={[-Math.PI / 2, -1.361, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sword_lp_sword_mat_0.geometry}
            material={materials.sword_mat}
            position={[0, 0, -82.958]}
          />
        </group>
        <group
          position={[0, 416.119, -200.895]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sword_lp001_sword_mat_0.geometry}
            material={materials.sword_mat}
            position={[0, 0, -82.958]}
          />
        </group>
        <group position={[865.22, 192.969, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line002_stand_mat_0.geometry}
            material={materials.stand_mat}
            position={[2.784, 0, 0]}
          />
        </group>
        <group
          position={[0, 416.138, -200.895]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object004_scabbard_mat_0.geometry}
            material={materials.scabbard_mat}
            position={[0, 0, -82.958]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box002_stand_mat_0.geometry}
          material={materials.stand_mat}
          position={[379.353, -45.434, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fantasy_sword.glb");
