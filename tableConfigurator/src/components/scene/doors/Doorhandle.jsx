import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Doorhandle(props) {
  const { nodes, materials } = useGLTF("/assets/glb/DoorHandle.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door_handle004.geometry}
        material={materials["Material.006"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/glb/DoorHandle.glb");
