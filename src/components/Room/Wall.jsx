import { Text } from "@react-three/drei";
import React, { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { DataContext } from "../../context/DataContextProvider";
import { fonts } from "../../js/fonts";

export const Wall = ({ scale, transform }) => {
  const textRef = useRef();
  const context = useContext(DataContext);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.rotateX(-Math.PI / 2);
    }
  }, [context.rerender]);

  const matrix = new THREE.Matrix4();
  let transformData = [...transform];
  transformData[13] = 0;
  matrix.set(...transformData);

  let translation = new THREE.Vector3();
  let rotation = new THREE.Quaternion();
  let scaleMatrix = new THREE.Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  let textPosition = [
    translation.x > 0 ? translation.x + 0.01 : translation.x - 0.01,
    translation.y + scale[1] / 2,
    translation.z > 0 ? translation.z + 0.01 : translation.z - 0.01,
  ];

  return (
    <>
      <mesh scale={[scale[0], scale[1], 0.02]} position={translation} quaternion={rotation}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <Text
        ref={textRef}
        color={"#fff"}
        fontSize={0.25}
        quaternion={rotation}
        anchorX={"center"}
        anchorY={"bottom"}
        position={textPosition}
        font={fonts["Noto Sans"]}
      >
        {`${scale[0].toFixed(2)}m`}
      </Text>
    </>
  );
};
