import React from "react";
import { Matrix4, Quaternion, Vector3 } from "three";

export const Furniture = ({ scale, transform }) => {
  const { translation, rotation } = getTransformData(transform);

  return (
    <mesh position={translation} quaternion={rotation}>
      <boxGeometry args={scale} position={[0, 0, 0]} />
      <meshStandardMaterial wireframe={true} />
    </mesh>
  );
};

const getTransformData = (transform) => {
  const matrix = new Matrix4();
  matrix.set(...transform);
  const translation = new Vector3();
  const rotation = new Quaternion();
  const scaleMatrix = new Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  return {
    translation,
    rotation,
  };
};
