import { Canvas } from "@react-three/fiber";
import React from "react";
import { Wall } from "../Box/Wall";
import { OrbitControls } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";

export const ThreeScene = () => {
  return (
    <SceneContainer>
      <Canvas>
        <color attach="background" args={["#000"]}></color>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Wall scale={[2, 1, 1]} />
      </Canvas>
    </SceneContainer>
  );
};
