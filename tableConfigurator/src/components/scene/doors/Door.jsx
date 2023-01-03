import { getTransformData } from "@/lib/functions";
import React from "react";
import { Doorhandle } from "./Doorhandle";

export const Door = ({ scale, transform }) => {
  const { translation, rotation } = getTransformData(transform);
  return (
    <group position={translation} quaternion={rotation}>
      <mesh>
        <boxGeometry args={[scale[0], scale[1], 0.03]} position={[0, 0, 0]} />
        <meshStandardMaterial color={"#eee"} />
      </mesh>
      <mesh position={[scale[0] / 2 + 0.025, 0, 0]}>
        <boxGeometry args={[0.05, scale[1] + 0.05, 0.05]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, scale[1] / 2, 0]}>
        <boxGeometry args={[scale[0], 0.05, 0.05]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[-scale[0] / 2 - 0.025, 0, 0]}>
        <boxGeometry args={[0.05, scale[1] + 0.05, 0.05]} />
        <meshStandardMaterial />
      </mesh>
      <Doorhandle
        scale={[0.1, 0.1, 0.1]}
        position={[-scale[0] / 2 + 0.1, 0, 0.02]}
      />
    </group>
  );
};
