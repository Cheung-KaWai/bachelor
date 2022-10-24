import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { DataContext } from "../../context/DataContextProvider";
import styled from "styled-components";
import { GroupWalls } from "../Room/GroupWalls";
import { LightContext } from "../../context/LightContextProvider";
import { SpotLight } from "./SpotLight.jsx";
import { PointLight } from "./PointLight";
import { Floor } from "./Floor";

export const Scene = () => {
  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  return (
    <SceneContainer>
      <Canvas shadowMap>
        <color attach="background" args={["#fff"]} />
        <PerspectiveCamera makeDefault position={[0, 20, 0]} ref={context.cameraRef} />
        <OrbitControls />
        <PointLight position={[0, 3, 0]} intesity={1} />
        {/* <directionalLight color="#fff" position={[0, 0, 5]} /> */}
        <GroupWalls />
        {lightContext && lightContext.model}
        <SpotLight />
        <PointLight color={"#ffa957"} />
        {lightContext.rotation && <Floor />}
      </Canvas>
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
