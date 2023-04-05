import React, { useRef } from "react";
import { angleToRads } from "../../../utils/angle";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Three() {
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // @ts-ignore
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRads(45));
      orbitControlsRef.current.setPolarAngle((y + 0.5) * angleToRads(90 - 30));
      // @ts-ignore
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 10]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRads(60)}
        maxPolarAngle={angleToRads(80)}
        enableZoom={false}
      />
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
