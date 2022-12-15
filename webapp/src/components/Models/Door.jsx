import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import door from "../../assets/models/door.glb";
import * as THREE from "three";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

export function Door({ scale, tranform }) {
  const { nodes, materials } = useGLTF(door);

  const matrix = new THREE.Matrix4();
  let transformData = [...tranform];
  // transformData[13] = 0;
  matrix.set(...transformData);

  let translation = new THREE.Vector3();
  let rotation = new THREE.Quaternion();
  let scaleMatrix = new THREE.Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  const material = new THREE.MeshStandardMaterial({ envMapIntensity: 0.1, color: "#f00" });

  const context = useContext(DataContext);

  return (
    <group dispose={null} scale={scale} quaternion={rotation} position={translation}>
      <mesh
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={material}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        visible={context.showDoors}
      />
    </group>
    // <mesh scale={scale} position={translation} quaternion={rotation}>
    //   <boxGeometry />
    //   <meshStandardMaterial envMapIntensity={0.1} />
    // </mesh>
  );
}

useGLTF.preload(door);
