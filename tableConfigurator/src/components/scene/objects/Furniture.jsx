import { getTransformData } from "@/lib/functions";
import React from "react";

export const Furniture = ({ scale, transform }) => {
  const { translation, rotation } = getTransformData(transform);
  return (
    <mesh position={translation} quaternion={rotation}>
      <boxGeometry args={scale} position={[0, 0, 0]} />
      <meshStandardMaterial />
    </mesh>
  );
};
