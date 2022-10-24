import React, { Suspense, useRef, useEffect, useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { LightContext } from "../../context/LightContextProvider";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/squareLamp.glb");
  let material = new MeshStandardMaterial({ color: "#fff", side: DoubleSide });

  const lightContext = useContext(LightContext);

  // useEffect(() => {
  //   if (nodes) {
  //     material = new MeshBasicMaterial({ color: "#fff" });
  //   }
  // }, [nodes]);

  return (
    <Suspense>
      <group {...props} dispose={null} ref={lightContext.lampRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.materials}
          name="square"
          position={[0, lightContext.height ?? 0, 0]}
          quaternion={lightContext.rotation ?? [0, 0, 0, 0]}
        />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/models/squareLamp.glb");
