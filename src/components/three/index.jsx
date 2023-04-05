import React from "react";
import { angleToRads } from "../../../utils/angle";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Three() {
  useFrame((state) => {});

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls />
      {/* creating a ball component */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f6f1d5" />
      </mesh>

      <mesh rotation={[-angleToRads(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#e76f51" />
      </mesh>
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
}
