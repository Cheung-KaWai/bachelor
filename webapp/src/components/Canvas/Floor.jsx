import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { LightContext } from "../../context/LightContextProvider";
import * as THREE from "three";
import { findNearestIndex } from "../../js/functions";
import { useTexture } from "@react-three/drei";
import { Floor1 } from "../../js/textures";
import { Euler } from "three";

export const Floor = () => {
  const [orderedPoints, setOrderedPoints] = useState([]);
  const [offset, setOffset] = useState(0);
  const [material, setMaterial] = useState(new THREE.MeshStandardMaterial({ envMapIntensity: 0.1 }));

  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  const floor1 = new THREE.MeshStandardMaterial(Floor1());

  useEffect(() => {
    if (context.cornerPoints.length !== 0 && context.amountPoints === context.cornerPoints.length) {
      console.log("hieer");
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
    if (context.cornerPoints.length - offset !== orderedPoints.length) {
      return;
    }
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
        <>
          <mesh position={[0, -lightContext.height ?? 0, 0]} rotation={rotatie} receiveShadow material={material}>
            <shapeGeometry args={[shapes]} />
          </mesh>
          <mesh position={[0, -lightContext.height ?? 0, 0]} rotation={rotatie} receiveShadow material={material}>
            <shapeGeometry args={[shapes]} />
          </mesh>
        </>
      );
    }
  };

  return <>{context?.cornerPoints && context.showFloor && generateFloor()}</>;
};
