import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { GroupWalls } from "../Room/GroupWalls";
import { LightContext } from "../../context/LightContextProvider";
import { Lamp } from "./Lamp.jsx";
import { Floor } from "./Floor";
import { Camera } from "./Camera";
import { GroupWindows } from "../Room/GroupWindows";
import { GroupDoors } from "../Room/GroupDoors";
import { GroupObjects } from "../Room/GroupObjects";
import { DataContext } from "../../context/DataContextProvider";

export const Scene = () => {
  const lightContext = useContext(LightContext);
  const context = useContext(DataContext);

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
        <Floor />
      </Canvas>
    </SceneContainer>
  );
};
