import React from "react";

export const Frame = ({ translation, quaternion, scale, left }) => {
  return (
    <group position={translation} quaternion={quaternion}>
      <mesh position={[0, scale[1] / 2 - 0.025, 0]}>
        <boxGeometry args={[scale[0] + 0.02, 0.05, 0.04]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, -scale[1] / 2 + 0.025, 0]}>
        <boxGeometry args={[scale[0] + 0.02, 0.05, 0.04]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, -scale[1] / 2, 0]}>
        <boxGeometry args={[scale[0] + 0.1, 0.02, 0.1]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[scale[0] / 2, 0, 0]}>
        <boxGeometry args={[0.05, scale[1], 0.04]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.05, scale[1], 0.04]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[-scale[0] / 2, 0, 0]}>
        <boxGeometry args={[0.05, scale[1], 0.04]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};
