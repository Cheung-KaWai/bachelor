import React from "react";
import { Scene } from "../components/Canvas/Scene";
import { Configurator } from "../components/Configurator/Configurator";
import { FlexContainer } from "../components/Layout/FlexContainer";

export const ConfiguratorLamp = () => {
  return (
    <FlexContainer>
      <Scene />
      <Configurator />
    </FlexContainer>
  );
};
