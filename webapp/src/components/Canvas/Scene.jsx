import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { Center, ContactShadows, Environment, OrbitControls, softShadows } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { GroupWalls } from "../Room/GroupWalls";
import { LightContext } from "../../context/LightContextProvider";
import { Lamp } from "./Lamp.jsx";
import { Floor } from "./Floor";
import { Camera } from "./Camera";
import { Window } from "../Models/Window";
import { GroupWindows } from "../Room/GroupWindows";
import { GroupDoors } from "../Room/GroupDoors";
import { GroupObjects } from "../Room/GroupObjects";
import { DataContext } from "../../context/DataContextProvider";
import * as THREE from "three";
import { findNearestIndex } from "../../js/functions";
import { useState } from "react";
import { Euler, Vector3 } from "three";
import { useRef } from "react";
import { OBB } from "../../../node_modules/three/examples/jsm/math/OBB";

export const Scene = () => {
  const lightContext = useContext(LightContext);
  const context = useContext(DataContext);
  const testRef = useRef();

  const [orderedPoints, setOrderedPoints] = useState([]);
  const [offset, setOffset] = useState(0);
  const [positionCenter, setPositionCenter] = useState([0, 0, 0]);

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

  useEffect(() => {
    const test = context.groupRef.current;
    console.log(test);
  }, [orderedPoints]);

  const FixFloorpliz = () => {
    if (context.cornerPoints.length - offset !== orderedPoints.length) {
      return;
    }

    const getCubes = () => {
      const test = 0;
      return (
        <>
          {orderedPoints.map((el, key) => (
            <mesh key={key} position={[el.x, el.y, el.z]} scale={[0.1, 0.1, 0.1]}>
              <boxGeometry />
              <meshStandardMaterial color={key == test ? "#f00" : "#fff"} />
            </mesh>
          ))}
        </>
      );
    };

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

      const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(lightContext.rotation);
      rotatie.set(-Math.PI / 2, -Math.PI / 2, 0);
      return (
        <mesh
          position={[positionCenter[0], -lightContext.height + lightContext.offset ?? 0, positionCenter[2]]}
          rotation={rotatie}
        >
          <shapeGeometry args={[shapes]} />
          <meshStandardMaterial />
        </mesh>
      );
    }

    return getCubes();
  };

  return (
    <SceneContainer>
      <Canvas shadows flat>
        <OrbitControls ref={lightContext.orbitRef} makeDefault />
        <color attach="background" args={["#70777F"]} />
        <Camera />
        <Center>
          <GroupWalls />

          <Environment preset="studio" ref={lightContext.envRef} />
          <GroupWindows />
          <GroupDoors />
          <GroupObjects />
        </Center>
        <gridHelper position={[0, -1.6, 0]} />
        <axesHelper args={[1, 1, 1]} position={[0, -1.6, 0]} />

        {context?.cornerPoints && FixFloorpliz()}
        {/* {lightContext.rotation && <Floor />} */}

        {lightContext.model && (
          <>
            <Lamp />
            {lightContext.model}
          </>
        )}
      </Canvas>
    </SceneContainer>
  );
};
// const Button = styled.button`
//   background-color: red;
//   z-index: 4;
//   position: fixed;
//   top: 0;
//   right: 0;
// `;

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// // To find orientation of ordered triplet (p, q, r).
// // The function returns following values
// // 0 --> p, q and r are collinear
// // 1 --> Clockwise
// // 2 --> Counterclockwise
// function orientation(p, q, r) {
//   let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

//   if (val == 0) return 0; // collinear
//   return val > 0 ? 1 : 2; // clock or counterclock wise
// }

// // Prints convex hull of a set of n points.
// function convexHull(points, n) {
//   // There must be at least 3 points
//   if (n < 3) return;

//   // Initialize Result
//   let hull = [];

//   // Find the leftmost point
//   let l = 0;
//   for (let i = 1; i < n; i++) if (points[i].x < points[l].x) l = i;

//   // Start from leftmost point, keep moving
//   // counterclockwise until reach the start point
//   // again. This loop runs O(h) times where h is
//   // number of points in result or output.
//   let p = l;
//   let q;
//   do {
//     // Add current point to result
//     hull.push(points[p]);

//     // Search for a point 'q' such that
//     // orientation(p, q, x) is counterclockwise
//     // for all points 'x'. The idea is to keep
//     // track of last visited most counterclock-
//     // wise point in q. If any point 'i' is more
//     // counterclock-wise than q, then update q.
//     q = (p + 1) % n;

//     for (let i = 0; i < n; i++) {
//       // If i is more counterclockwise than
//       // current q, then update q
//       if (orientation(points[p], points[i], points[q]) == 2) q = i;
//     }

//     // Now q is the most counterclockwise with
//     // respect to p. Set p as q for next iteration,
//     // so that q is added to result 'hull'
//     p = q;
//   } while (p != l); // While we don't come to first
//   // point

//   // Print Result
//   console.log(hull);
// }
