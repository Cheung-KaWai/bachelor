import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { LightContext } from "../../context/LightContextProvider";
import * as THREE from "three";
import { findNearestIndex } from "../../js/functions";

export const Floor = () => {
  // const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(lightContext.rotation);
  // rotatie.set(-Math.PI / 2, rotatie.y, rotatie.z);

  // const rotatie2 = rotatie.clone();
  // rotatie2.set(Math.PI / 2, rotatie2.y, rotatie2.z);
  const [orderedPoints, setOrderedPoints] = useState([]);
  const [offset, setOffset] = useState(0);

  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  useEffect(() => {
    if (context.cornerPoints.length !== 0 && context.amountPoints === context.cornerPoints.length) {
      const elements = [...context.cornerPoints];
      const filterElements = elements.reduce((unique, o) => {
        if (!unique.some((obj) => obj.x == o.x && obj.y == o.y && obj.z == o.z)) {
          unique.push(o);
        }
        return unique;
      }, []);
      setOffset(elements.length - filterElements.length);
      const newPoints = [];
      newPoints.push(filterElements.shift());
      while (filterElements.length > 0) {
        let point = newPoints[newPoints.length - 1];
        let index = findNearestIndex(point, filterElements);
        newPoints.push(filterElements.splice(index, 1)[0]);
      }
      // console.log(newPoints);
      setOrderedPoints(newPoints);
    }
  }, [context.cornerPoints]);

  const generateFloor = () => {
    const shapes = new THREE.Shape();
    if (orderedPoints.length !== 0 && orderedPoints.length === context.cornerPoints.length - offset) {
      for (let i = 0; i < orderedPoints.length; i++) {
        const element = orderedPoints[i];
        if (i === 0) {
          shapes.moveTo(parseFloat(element.z), parseFloat(element.x));
        } else {
          shapes.lineTo(parseFloat(element.z), parseFloat(element.x));
        }
      }
      shapes.lineTo(parseFloat(orderedPoints[0].z), parseFloat(orderedPoints[0].x));

      const rotatie = new THREE.Euler(0, 0, 0, "YXZ").setFromQuaternion(lightContext.rotation);
      rotatie.set(-Math.PI / 2, -Math.PI / 2, 0);
      return (
        <mesh position={[0, -lightContext.height ?? 0, 0]} rotation={rotatie} receiveShadow>
          <shapeGeometry args={[shapes]} />
          <meshStandardMaterial envMapIntensity={0.1} />
        </mesh>
      );
    }
  };

  useEffect(() => {
    console.log("floor");
  }, []);

  return <>{context?.cornerPoints && generateFloor()}</>;
};

// const FixFloorpliz = () => {
//   if (context.cornerPoints.length - offset !== orderedPoints.length) {
//     return;
//   }

//   const getCubes = () => {
//     const test = 0;
//     return (
//       <>
//         {orderedPoints.map((el, key) => (
//           <mesh key={key} position={[el.x, el.y, el.z]} scale={[0.1, 0.1, 0.1]}>
//             <boxGeometry />
//             <meshStandardMaterial color={key == test ? "#f00" : "#fff"} />
//           </mesh>
//         ))}
//       </>
//     );
//   };

//   const shapes = new THREE.Shape();
//   if (orderedPoints.length !== 0 && orderedPoints.length === context.cornerPoints.length - offset) {
//     for (let i = 0; i < orderedPoints.length; i++) {
//       const element = orderedPoints[i];
//       if (i === 0) {
//         shapes.moveTo(parseFloat(element.z), parseFloat(element.x));
//       } else {
//         shapes.lineTo(parseFloat(element.z), parseFloat(element.x));
//       }
//     }
//     shapes.lineTo(parseFloat(orderedPoints[0].z), parseFloat(orderedPoints[0].x));

//     const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(lightContext.rotation);
//     rotatie.set(-Math.PI / 2, -Math.PI / 2, 0);
//     return (
//       <mesh position={[0, -lightContext.height ?? 0, 0]} rotation={rotatie} receiveShadow>
//         <shapeGeometry args={[shapes]} />
//         <meshStandardMaterial envMapIntensity={0.1} />
//       </mesh>
//     );
//   }

//   return getCubes();
// };
