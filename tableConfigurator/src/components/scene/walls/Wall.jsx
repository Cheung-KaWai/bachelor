import React from "react";
import { Matrix4, Quaternion, Vector3 } from "three";

export const Wall = ({ scale, transform }) => {
  const { translation, rotation } = getTransformData(transform);

  return (
    <mesh position={translation} quaternion={rotation}>
      <boxGeometry args={[scale[0], scale[1], 0.01]} />
      <meshStandardMaterial />
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
