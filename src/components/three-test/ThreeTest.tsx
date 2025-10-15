"use client";

import ThreeCanvas from "@/base-components/three-canvas/ThreeCanvas";
// import { AxesHelper, GridHelper } from "@react-three/drei";

export default function ThreeTest() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ThreeCanvas>
        {/* World helpers */}
        <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} />
        {/* Test cube */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1, 0.3, 100, 100]} />
          <meshPhysicalMaterial
            color="#000000ef"
            metalness={0}
            roughness={0}
            transmission={1} // glass effect
            thickness={0.5} // controls refraction depth
            transparent
            opacity={1}
            ior={1.5} // index of refraction, like real glass
            reflectivity={1}
            envMapIntensity={1}
          />{" "}
        </mesh>
        <mesh position={[-0, 1, 2]}>
          <boxGeometry args={[2, 2, 2]} />
          {[
            "#ff5555", // front
            "#55ff55", // back
            "#5555ff", // top
            "#ffff55", // bottom
            "#ff55ff", // right
            "#55ffff", // left
          ].map((color, i) => (
            <meshPhysicalMaterial
              key={i}
              color={color}
              metalness={0}
              roughness={0}
              transmission={1}
              thickness={0.9}
              transparent
              opacity={1}
              ior={1.9}
              reflectivity={1}
              envMapIntensity={1}
              side={2} // DoubleSide so you can see it from inside/outside
              attach={`material-${i}`}
            />
          ))}
        </mesh>
      </ThreeCanvas>
    </div>
  );
}
