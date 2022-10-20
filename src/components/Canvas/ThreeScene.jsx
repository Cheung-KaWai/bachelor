import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { Wall } from "../Room/Wall";
import { OrbitControls } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { DataContext } from "../../context/DataContextProvider";

export const ThreeScene = () => {
  const context = useContext(DataContext);

  return (
    <SceneContainer>
      <Canvas>
        <color attach="background" args={["#000"]} />
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {context.roomData &&
          context.roomData.walls.map((wall, key) => {
            return <Wall key={key} scale={wall.dimensions} transform={wall.transform} />;
          })}
      </Canvas>
    </SceneContainer>
  );
};
