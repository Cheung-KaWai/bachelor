import { useConfigurationStore } from "@/store/data";
import React, { useEffect, useRef } from "react";
import { Matrix4, Quaternion, Vector3 } from "three";

export const Wall = ({ scale, transform }) => {
  const wallRef = useRef();
  const room = useConfigurationStore((state) => state.room);
  const addFloorpoints = useConfigurationStore((state) => state.addFloorpoints);

  const { translation, rotation } = getTransformData(transform);

  useEffect(() => {
    generateCornerPoint(scale, wallRef, addFloorpoints);
  }, [room]);

  return (
    <mesh position={translation} quaternion={rotation} ref={wallRef}>
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

const generateCornerPoint = (scale, wallRef, addFloorpoints) => {
  const matrix = wallRef.current.matrixWorld;
  console.log(matrix);
  const vector1 = new Vector3(scale[0] / 2, -scale[1] / 2, 0);
  const vector2 = new Vector3(-scale[0] / 2, -scale[1] / 2, 0);

  vector1.applyMatrix4(matrix);
  vector2.applyMatrix4(matrix);
  vector1.set(vector1.x.toFixed(2), vector1.y.toFixed(2), vector1.z.toFixed(2));
  vector2.set(vector2.x.toFixed(2), vector2.y.toFixed(2), vector2.z.toFixed(2));

  const points = [];
  const difX = parseFloat(vector2.x) - parseFloat(vector1.x);
  const difZ = parseFloat(vector2.z) - parseFloat(vector1.z);

  const pointsNumbers = 3;
  const intervalX = difX / (pointsNumbers + 1);
  const intervalZ = difZ / (pointsNumbers + 1);
  for (let i = 1; i <= pointsNumbers; i++) {
    points.push(
      new Vector3(parseFloat(vector1.x) + intervalX * i, parseFloat(vector1.y), parseFloat(vector1.z) + intervalZ * i)
    );
  }

  addFloorpoints([vector1, ...points, vector2]);
};
