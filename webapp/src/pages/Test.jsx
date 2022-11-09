import { Canvas } from "@react-three/fiber";
import React from "react";

import styled from "styled-components";
import { TestComponent } from "./TestComponent";

import { softShadows } from "@react-three/drei";

softShadows();

export const Test = () => {
  return (
    <Container>
      <Canvas shadows>
        <TestComponent />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
