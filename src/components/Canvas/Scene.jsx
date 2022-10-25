import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { Environment, OrbitControls, PerspectiveCamera, softShadows, useHelper } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { DataContext } from "../../context/DataContextProvider";
import styled from "styled-components";
import { GroupWalls } from "../Room/GroupWalls";
import { LightContext } from "../../context/LightContextProvider";
import { Lamp } from "./Lamp.jsx";
import { PointLight } from "./PointLight";
import { Floor } from "./Floor";
import { Lightmap } from "./Lightmap";
import { CameraHelper } from "three";
import { Camera } from "./Camera";

export const Scene = () => {
  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);
  softShadows();
  return (
    <SceneContainer>
      <Canvas shadows>
        <color attach="background" args={["#fff"]} />
        <Camera />
        <OrbitControls />
        <GroupWalls />
        <Lamp />
        {lightContext.rotation && <Floor />}
        <Environment preset="studio" ref={lightContext.envRef} />

        {/* <PointLight position={[0, 3, 0]} intesity={1} ref={lightContext.roomRef} /> */}
        {/* {lightContext && lightContext.model} */}
        {/* <PointLight color={"#ffa957"} lightRef={lightContext.pointRef} /> */}
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
