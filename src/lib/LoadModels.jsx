import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const RoundModel = (props) => {
  const { nodes, materials } = useGLTF("models/roundLamp.glb");

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials} />
      </group>
    </Suspense>
  );
};

export const SquareModel = (props) => {
  const { nodes, materials } = useGLTF("models/roundLamp.glb");

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials} />
      </group>
    </Suspense>
  );
};

useGLTF.preload("models/roundLamp.glb");
useGLTF.preload("models/squareModel.glb");
