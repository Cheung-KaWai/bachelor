import React from "react";
import * as THREE from "three";

export const DataObject = ({ transform, scale }) => {
  const matrix = new THREE.Matrix4();
  let transformData = [...transform];
  matrix.set(...transformData);

  let translation = new THREE.Vector3();
  let rotation = new THREE.Quaternion();
  let scaleMatrix = new THREE.Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  return (
    <mesh scale={scale} position={[translation.x, translation.y, translation.z]} quaternion={rotation} receiveShadow>
      <boxGeometry />
      <meshStandardMaterial envMapIntensity={0.1} />
    </mesh>
  );
};
