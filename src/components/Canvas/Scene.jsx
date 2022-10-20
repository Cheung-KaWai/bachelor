import { Canvas } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { SceneContainer } from "../Layout/SceneContainer";
import { DataContext } from "../../context/DataContextProvider";
import styled from "styled-components";
import { GroupWalls } from "../Room/GroupWalls";
export const Scene = () => {
  const context = useContext(DataContext);
  const group = useRef();

  return (
    <SceneContainer>
      <Canvas camera={{ position: [0, 5, 0] }}>
        <color attach="background" args={["#000"]} />
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {context.roomData && <GroupWalls groupRef={group} data={context.roomData.walls} />}
      </Canvas>
      <Button onClick={() => console.log(group)}>Hello</Button>
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
