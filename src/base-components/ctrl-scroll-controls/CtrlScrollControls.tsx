import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function CtrlScrollControls() {
  const { camera } = useThree();
  const zoomSpeed = 0.1;

  const handleWheel = (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault(); // prevent page zoom
      camera.position.z += e.deltaY * zoomSpeed * 0.01;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return <OrbitControls enableRotate enablePan enableZoom={false} />;
}
