import React from "react";
import { Scene } from "./components/Canvas/Scene";
import { Configurator } from "./components/Configurator/Configurator";
import { FlexContainer } from "./components/Layout/FlexContainer";
import { DataContextProvider } from "./context/DataContextProvider";
import { LightContextProvider } from "./context/LightContextProvider";

export const App = () => {
  return (
    <DataContextProvider>
      <LightContextProvider>
        <FlexContainer>
          <Scene />
          <Configurator />
        </FlexContainer>
      </LightContextProvider>
    </DataContextProvider>
  );
};
