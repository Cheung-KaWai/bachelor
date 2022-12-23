import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Glass(props) {
  const { nodes, materials } = useGLTF("/assets/glb/Glass.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={materials.glass}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Glass.glb");
