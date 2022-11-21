import { Canvas } from "@react-three/fiber";
import React from "react";

import styled from "styled-components";
import { TestComponent } from "./TestComponent";

import { OrbitControls, softShadows } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useState } from "react";
import * as THREE from "three";

// softShadows();

export const Test = () => {
  const testRef = useRef();

  const [points, setPoints] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // const box = new THREE.Box3();
      // box.setFromObject(testRef.current);
      // boxRef.current.geometry.computeBoundingBox();
      // box.copy(boxRef.current.geometry.boundingBox).applyMatrix4(boxRef.current.matrixWorld);
      // const low = box.min;
      // const high = box.max;
      // const corner1 = new THREE.Vector3(low.x.toFixed(3), low.y.toFixed(3), low.z.toFixed(3));
      // const corner2 = new THREE.Vector3(high.x.toFixed(3), low.y.toFixed(3), low.z.toFixed(3));
      // const corner3 = new THREE.Vector3(high.x.toFixed(3), low.y.toFixed(3), high.z.toFixed(3));
      // const corner4 = new THREE.Vector3(low.x.toFixed(3), low.y.toFixed(3), high.z.toFixed(3));
      // testRef.current.geometry.computeBoundingBox();
      // const boxMatrix = testRef.current.matrixWorld;
      // const matrix = testRef.current.matrixWorld;
      // var vertex3 = new THREE.Vector3(0.4 / 2, -2 / 2, 1 / 2); // +x -y +z
      // var vertex4 = new THREE.Vector3(0.4 / 2, -2 / 2, -1 / 2); // +x -y -z
      // var vertex5 = new THREE.Vector3(-0.4 / 2, -2 / 2, 1 / 2); // +x -y +z
      // var vertex6 = new THREE.Vector3(-0.4 / 2, -2 / 2, -1 / 2); // -x -y -z
      // vertex3.applyMatrix4(matrix);
      // vertex4.applyMatrix4(matrix);
      // vertex5.applyMatrix4(matrix);
      // vertex6.applyMatrix4(matrix);
      // setPoints([vertex3, vertex4, vertex5, vertex6]);
    }, 500);
  }, []);

  return (
    <Container>
      <Canvas shadows>
        {/* <TestComponent /> */}
        <OrbitControls />
        {/* <mesh ref={testRef} position={[0.965, 0.489, 1]} quaternion={[true, 0.454, 0.235, 04545, 0.366]}>
          <boxGeometry args={[0.4, 2, 1]} />
          <meshBasicMaterial color={"#f00"} wireframe={true} />
        </mesh>

        {points &&
          points.map((vector) => (
            <mesh scale={[0.1, 0.1, 0.1]} position={[vector.x, vector.y, vector.z]}>
              <boxGeometry />
              <meshBasicMaterial />
            </mesh>
          ))} */}

        {/* <mesh>
          <shapeGeometry args={new THREE.Shape()} />
          <meshBasicMaterial color={"#f00"} wireframe={true} />
        </mesh> */}
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
