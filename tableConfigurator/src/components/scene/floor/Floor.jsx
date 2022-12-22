import { useConfigurationStore } from "@/store/data";
import React, { useEffect } from "react";
import { Euler, MeshStandardMaterial, Shape } from "three";

export const Floor = () => {
  const floorPoints = useConfigurationStore((state) => state.floorPoints);
  const check = useConfigurationStore((state) => state.check);
  const update = useConfigurationStore((state) => state.update);
  const sortedPoints = useConfigurationStore((state) => state.sortedPoints);
  const offset = useConfigurationStore((state) => state.offset);
  const rotation = useConfigurationStore((state) => state.floorRotation);

  useEffect(() => {
    if (floorPoints.length === check) {
      // filter duplicates
      const filterElements = floorPoints.reduce((unique, o) => {
        if (!unique.some((obj) => obj.x == o.x && obj.y == o.y && obj.z == o.z)) {
          unique.push(o);
        }
        return unique;
      }, []);
      update("offset", floorPoints.length - filterElements.length);

      // order points
      const newPoints = [];
      newPoints.push(filterElements.shift());
      while (filterElements.length > 0) {
        let point = newPoints[newPoints.length - 1];
        let index = findNearestIndex(point, filterElements);
        newPoints.push(filterElements.splice(index, 1)[0]);
      }
      update("sortedPoints", newPoints);
    }
  }, [floorPoints]);

  return <>{sortedPoints.length !== 0 && generateFloor(floorPoints, offset, sortedPoints, rotation)}</>;
};

const generateFloor = (floorPoints, offset, sortedPoints, rotation) => {
  if (floorPoints.length - offset !== sortedPoints.length) return;
  const shapes = new Shape();

  for (let i = 0; i < sortedPoints.length; i++) {
    const element = sortedPoints[i];
    if (i === 0) {
      shapes.moveTo(parseFloat(element.z), parseFloat(element.x));
    } else {
      shapes.lineTo(parseFloat(element.z), parseFloat(element.x));
    }
  }
  shapes.lineTo(parseFloat(sortedPoints[0].z), parseFloat(sortedPoints[0].x));

  const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(rotation);
  rotatie.set(-Math.PI / 2, -Math.PI / 2, 0);
  return (
    <>
      <mesh position={[0, 0, 0]} rotation={rotatie} receiveShadow material={new MeshStandardMaterial()}>
        <shapeGeometry args={[shapes]} />
      </mesh>
    </>
  );
};

const findNearestIndex = (point, listPoints) => {
  let distance = 999;
  let index;
  // console.log(point, listPoints);
  for (let i = 0; i < listPoints.length; i++) {
    const element = listPoints[i];
    const dis = point.distanceTo(element);

    if (dis != 0 && dis < distance) {
      index = i;
      distance = dis;
    }
  }
  // console.log(index);
  return index;
};
