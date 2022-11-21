import { Text } from "@react-three/drei";
import React, { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Euler, Vector2, Vector3 } from "three";
import { DataContext } from "../../context/DataContextProvider";
import { LightContext } from "../../context/LightContextProvider";
import { fonts } from "../../js/fonts";
// import { OBB } from "../../../node_modules/three/examples/jsm/math/OBB";

// function RotatePoint(point, pivot, rotation) {
//   const cosTheta = Math.cos(rotation);
//   const sinTheta = Math.sin(rotation);

//   const x = cosTheta * (point.x - pivot.x) - sinTheta * (point.z - pivot.z) + pivot.x;
//   const z = sinTheta * (point.x - pivot.x) + cosTheta * (point.z - pivot.z) + pivot.z;

//   return new Vector3(x, point.y, z);
// }

// function RotatePointAroundPivot(point, pivot, angles) {
//   // point.applyAxisAngle(new Vector3(0,1,0),angles)
// }

export const Wall = ({ scale, transform }) => {
  const textRef = useRef();
  const boxRef = useRef();
  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  const [corner, setCorner] = useState([]);

  const matrix = new THREE.Matrix4();
  let transformData = [...transform];
  matrix.set(...transformData);

  let translation = new THREE.Vector3();
  let rotation = new THREE.Quaternion();
  let scaleMatrix = new THREE.Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);
  const rotatie = new Euler(0, 0, 0, "YZX").setFromQuaternion(rotation);
  const rotatie2 = new Euler(0, 0, 0, "YZX").setFromQuaternion(rotation);
  rotatie.set(-Math.PI / 2, rotatie.y, rotatie.z);

  let textPosition = [
    translation.x > 0 ? translation.x + 0.01 : translation.x - 0.01,
    translation.y + scale[1] / 2,
    translation.z > 0 ? translation.z + 0.01 : translation.z - 0.01,
  ];

  useEffect(() => {
    setTimeout(() => {
      const matrix = boxRef.current.matrixWorld;
      const vector1 = new Vector3(scale[0] / 2, -scale[1] / 2, 0);
      const vector2 = new Vector3(-scale[0] / 2, -scale[1] / 2, 0);

      vector1.applyMatrix4(matrix);
      vector2.applyMatrix4(matrix);
      vector1.set(vector1.x.toFixed(2), vector1.y.toFixed(2), vector1.z.toFixed(2));
      vector2.set(vector2.x.toFixed(2), vector2.y.toFixed(2), vector2.z.toFixed(2));
      // const vector3 = new Vector3(...vClone1.sub(vClone2));
      const points = [];
      const difX = parseFloat(vector2.x) - parseFloat(vector1.x);
      const difZ = parseFloat(vector2.z) - parseFloat(vector1.z);

      const pointsNumbers = 2;
      const intervalX = difX / (pointsNumbers + 1);
      const intervalZ = difZ / (pointsNumbers + 1);
      for (let i = 1; i <= pointsNumbers; i++) {
        points.push(
          new Vector3(
            parseFloat(vector1.x) + intervalX * i,
            parseFloat(vector1.y),
            parseFloat(vector1.z) + intervalZ * i
          )
        );
      }

      context.setCornerPoints((prev) => [...prev, vector1, ...points, vector2]);
    }, 1000);
    // console.log(positions);
  }, [context.roomData]);

  return (
    <>
      <mesh
        // scale={[scale[0], scale[1], 0.01]}
        position={translation}
        quaternion={rotation}
        // rotation={rotatie2}
        // rotation={rotatie2}
        castShadow
        receiveShadow
        ref={boxRef}
      >
        <boxGeometry args={[scale[0], scale[1], 0.01]} />
        <meshStandardMaterial envMapIntensity={0.1} wireframe={true} />
        {/* <meshStandardMaterial envMapIntensity={0.1} /> */}
      </mesh>
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[translation.x, translation.y - scale[1] / 2, translation.z]}>
        <circleGeometry args={[scale[0] / 2, 64]} />
        <meshBasicMaterial />
      </mesh> */}
      <Text
        ref={textRef}
        color={"#fff"}
        fontSize={0.25}
        rotation={rotatie}
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
