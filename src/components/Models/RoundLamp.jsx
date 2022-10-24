import React, { Suspense, useContext, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, MeshStandardMaterial } from "three";
import { LightContext } from "../../context/LightContextProvider";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/roundLamp.glb");
  let material = nodes.Cylinder002.material;
  material.side = DoubleSide;

  const lightContext = useContext(LightContext);

  // useEffect(() => {
  //   console.log(nodes);
  // }, [nodes]);

  return (
    <Suspense>
      <group {...props} dispose={null} ref={lightContext.lampRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          name="round"
          position={[0, lightContext.height ?? 0, 0]}
          quaternion={lightContext.rotation ?? [0, 0, 0, 0]}
        />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/models/roundLamp.glb");
