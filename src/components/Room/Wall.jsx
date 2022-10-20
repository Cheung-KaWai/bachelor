import React from "react";

export const Wall = ({ scale }) => {
  return (
    <mesh scale={scale}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
