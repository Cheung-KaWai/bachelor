import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { Environment, OrbitControls, PerspectiveCamera, softShadows, Stage, useHelper } from "@react-three/drei";
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
import { Tal } from "../Models/Tal";

export const Scene = () => {
  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  return (
    <SceneContainer>
      <Canvas shadows flat>
        {/* {softShadows({
          frustum: 3.75,
          size: 0.005,
          near: 9.5,
          samples: 17,
          rings: 11,
        })} */}
        <OrbitControls ref={lightContext.orbitRef} makeDefault />
        <color attach="background" args={["#fff"]} />
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
        {/* <PointLight position={[0, 3, 0]} intesity={1} ref={lightContext.roomRef} /> */}
        {/* <PointLight color={"#ffa957"} /> */}
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
