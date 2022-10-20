import { Canvas } from "@react-three/fiber";
import React from "react";

export const ThreeScene = () => {
  return (
    <Canvas>
      <color attach="background" args={["#000"]}></color>
    </Canvas>
  );
};
