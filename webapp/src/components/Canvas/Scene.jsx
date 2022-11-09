import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { ContactShadows, Environment, OrbitControls, softShadows } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { GroupWalls } from "../Room/GroupWalls";
import { LightContext } from "../../context/LightContextProvider";
import { Lamp } from "./Lamp.jsx";
import { Floor } from "./Floor";
import { Camera } from "./Camera";

softShadows();

export const Scene = () => {
  const lightContext = useContext(LightContext);

  return (
    <SceneContainer>
      <Canvas shadows flat>
        <OrbitControls ref={lightContext.orbitRef} makeDefault />
        <color attach="background" args={["#70777F"]} />
        <Camera />
        <GroupWalls />
        <Environment preset="studio" ref={lightContext.envRef} />

        {lightContext.rotation && <Floor />}
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
