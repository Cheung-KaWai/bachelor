import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Wall = ({ scale, transform }) => {
  const matrix = new THREE.Matrix4();
  matrix.set(...transform);

  let translation = new THREE.Vector3();
  let rotation = new THREE.Quaternion();
  let scaleMatrix = new THREE.Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  return (
    <mesh scale={[scale[0], scale[1], 0.02]} position={translation} quaternion={rotation}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
