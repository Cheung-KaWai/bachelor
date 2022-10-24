import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/roundLamp.glb");

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return (
    <Suspense>
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/models/roundLamp.glb");
