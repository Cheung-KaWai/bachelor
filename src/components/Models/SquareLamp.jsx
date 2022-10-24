import React, { Suspense, useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/squareLamp.glb");

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return (
    <Suspense>
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/models/squareLamp.glb");
