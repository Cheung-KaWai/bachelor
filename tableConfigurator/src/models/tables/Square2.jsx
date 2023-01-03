import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Square2({ material, width, length, position }) {
  const { nodes } = useGLTF("/assets/models/tables/square4.glb");
  return (
    <mesh
      geometry={nodes.Square2.geometry}
      material={material}
      scale={[length, 1, width]}
      position={position}
    />
  );
}

useGLTF.preload("/assets/models/tables/square4.glb");
