import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { DataContext } from "../../context/DataContextProvider";
import styled from "styled-components";
import { GroupWalls } from "../Room/GroupWalls";
import { LightContext } from "../../context/LightContextProvider";
import { PointLight } from "./PointLight";

export const Scene = () => {
  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  return (
    <SceneContainer>
      <Canvas>
        <color attach="background" args={["#fff"]} />
        <PerspectiveCamera makeDefault position={[0, 20, 0]} ref={context.cameraRef} />
        <OrbitControls />
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="#fff" position={[0, 0, 5]} /> */}
        <GroupWalls />
        {lightContext && lightContext.model}
      </Canvas>
      <PointLight />
      {/* <Button onClick={() => console.log(context.groupRef)}>Hello</Button> */}
    </SceneContainer>
  );
};
const Button = styled.button`
  background-color: red;
  z-index: 4;
  position: fixed;
  top: 0;
  right: 0;
`;
