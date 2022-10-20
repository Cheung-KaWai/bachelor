import React from "react";
import { ThreeScene } from "./components/Canvas/ThreeScene";
import { Configurator } from "./components/Configurator/Configurator";
import { FlexContainer } from "./components/Layout/FlexContainer";

export const App = () => {
  return (
    <FlexContainer>
      <ThreeScene />
      <Configurator />
    </FlexContainer>
  );
};
