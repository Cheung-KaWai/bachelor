import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Outdoor({ material, width, length, position }) {
  const { nodes, materials } = useGLTF("/assets/models/tables/outdoor.glb");
  return (
    <mesh
      geometry={nodes.Cube014.geometry}
      material={material}
      scale={[length, 1, width]}
      position={position}
    />
  );
}

useGLTF.preload("/assets/models/tables/outdoor.glb");
