import { getTransformData } from "@/lib/functions";
import React from "react";

export const Door = ({ scale, transform }) => {
  const { translation, rotation } = getTransformData(transform);
  return (
    <mesh position={translation} quaternion={rotation}>
      <boxGeometry args={[scale[0], scale[1], 0.03]} position={[0, 0, 0]} />
      <meshStandardMaterial />
    </mesh>
  );
};
