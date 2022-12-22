import { useConfigurationStore } from "@/store/data";
import React, { useEffect } from "react";

export const Floor = () => {
  const floorPoints = useConfigurationStore((state) => state.floorPoints);
  const check = useConfigurationStore((state) => state.check);
  const update = useConfigurationStore((state) => state.update);

  useEffect(() => {
    if (floorPoints.length === check) {
      // filter duplicates
      const filterElements = floorPoints.reduce((unique, o) => {
        if (!unique.some((obj) => obj.x == o.x && obj.y == o.y && obj.z == o.z)) {
          unique.push(o);
        }
        return unique;
      }, []);

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

  return <></>;
};

export const findNearestIndex = (point, listPoints) => {
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
