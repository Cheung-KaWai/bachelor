import React, { useContext, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Square1({ material, width, length, position }) {
  const { nodes } = useGLTF("/assets/models/tables/square1.glb");
  // [length, 1, width]
  return (
    <mesh
      geometry={nodes.Square1.geometry}
      material={material}
      scale={[length, 1, width]}
      position={position}
    />
  );
}

useGLTF.preload("/assets/models/tables/square1.glb");
