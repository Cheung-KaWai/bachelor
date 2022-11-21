import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { ContactShadows, Environment, OrbitControls, softShadows } from "@react-three/drei";
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

export const Scene = () => {
  const lightContext = useContext(LightContext);
  const context = useContext(DataContext);

  const FixFloorpliz = () => {
    const result = context.cornerPoints.reduce((unique, o) => {
      if (!unique.some((obj) => obj.x === o.x && obj.y === o.y && obj.z === o.z)) {
        unique.push(o);
      }
      return unique;
    }, []);

    // const dataPoints = result.map((el) => new Point(el.x, el.z));
    // console.log(result);
    // convexHull(dataPoints, dataPoints.length);

    const getCubes = () => {
      const shapes = new THREE.Shape();
      shapes.moveTo(-1.45, -7.66);
      shapes.lineTo(-5, -0.56);
      shapes.lineTo(1.28, 2.58);

      return (
        <>
          {result.map((el, key) => (
            <mesh key={key} position={[el.x, el.y, el.z]} scale={[0.1, 0.1, 0.1]}>
              <boxGeometry />
              {/* <meshStandardMaterial color={key == test ? "#f00" : "#fff"} /> */}
              <meshStandardMaterial />
            </mesh>
          ))}
          {/* <mesh scale={[0.1, 0.1, 0.1]} position={[-1.45, -1.28, -7.66]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={[0.1, 0.1, 0.1]} position={[-5, -1.28, -0.56]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={[0.1, 0.1, 0.1]} position={[1.28, -1.28, 2.58]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={[0.1, 0.1, 0.1]} position={[0.1, -1.28, -1.98]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={[0.1, 0.1, 0.1]} position={[2.07, -1.28, -5.9]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={[0.1, 0.1, 0.1]} position={[3.96, -1.28, -0.04]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={[0.1, 0.1, 0.1]} position={[0, -1.28, 0]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh>
            <shapeGeometry args={[shapes]} />
            <meshStandardMaterial />
          </mesh> */}
        </>
      );
    };

    // const shapes = new THREE.Shape();
    // if (result.length !== 0) {
    //   for (let i = 0; i < result.length; i++) {
    //     const element = result[i];
    //     if (i === 0) {
    //       shapes.moveTo(element.x, element.z);
    //     }
    //     shapes.lineTo(element.x, element.z);
    //   }
    //   shapes.lineTo(result[0].x, result[0].z);

    //   const x = 0,
    //     y = 0;

    //   const heartShape = new THREE.Shape();

    //   heartShape.moveTo(8, 2);
    //   heartShape.lineTo(4, 8);
    //   heartShape.lineTo(12, 8);
    //   heartShape.lineTo(8, 2);

    //   console.log(shapes);
    //   console.log(heartShape);

    //   return (
    //     <mesh>
    //       {console.log("hello")}
    //       <shapeGeometry args={[heartShape]} />
    //       <meshStandardMaterial />
    //     </mesh>
    //   );
    // }

    return getCubes();
  };

  return (
    <SceneContainer>
      <Canvas shadows flat>
        <OrbitControls ref={lightContext.orbitRef} makeDefault />
        <color attach="background" args={["#70777F"]} />
        <Camera />
        <GroupWalls />
        <Environment preset="studio" ref={lightContext.envRef} />
        <GroupWindows />
        <GroupDoors />
        <GroupObjects />

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
