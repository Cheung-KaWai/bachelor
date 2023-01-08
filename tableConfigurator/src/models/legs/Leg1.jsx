import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Leg1({ position, material }) {
  const { nodes, materials } = useGLTF("/assets/models/legs/leg1.glb");
  return (
    <group position={position} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={material}
        position={[0, 0.79, 0]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={material}
        position={[0, 0.4, 0]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={material}
        position={[0, 0.01, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/legs/leg1.glb");
