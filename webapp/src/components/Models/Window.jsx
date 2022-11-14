import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import windowObj from "../../assets/models/test.glb";
import * as THREE from "three";

export function Window({ scale, tranform }) {
  const { nodes, materials } = useGLTF(windowObj);

  const matrix = new THREE.Matrix4();
  let transformData = [...tranform];
  transformData[13] = 0;
  matrix.set(...transformData);

  let translation = new THREE.Vector3();
  let rotation = new THREE.Quaternion();
  let scaleMatrix = new THREE.Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  const material = new THREE.MeshStandardMaterial({ envMapIntensity: 0.1 });

  return (
    // <group scale={scale} quaternion={rotation} position={translation} dispose={null}>
    //   <mesh geometry={nodes.Plane.geometry} material={material} rotation={[-Math.PI / 2, 0, 0]} />
    //   <mesh geometry={nodes.Plane001.geometry} material={material} rotation={[-Math.PI / 2, 0, 0]} />
    // </group>
    <group scale={scale} quaternion={rotation} position={translation} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={material}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload(windowObj);
