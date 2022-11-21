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
