import React from "react";
import { Scene } from "./components/Canvas/Scene";
import { Configurator } from "./components/Configurator/Configurator";
import { FlexContainer } from "./components/Layout/FlexContainer";
import { DataContextProvider } from "./context/DataContextProvider";

export const App = () => {
  return (
    <DataContextProvider>
      <FlexContainer>
        <Scene />
        <Configurator />
      </FlexContainer>
    </DataContextProvider>
  );
};
