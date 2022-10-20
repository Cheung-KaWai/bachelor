import React from "react";
import { ThreeScene } from "./components/Canvas/ThreeScene";
import { Configurator } from "./components/Configurator/Configurator";
import { FlexContainer } from "./components/Layout/FlexContainer";
import { DataContextProvider } from "./context/DataContextProvider";

export const App = () => {
  return (
    <DataContextProvider>
      <FlexContainer>
        <ThreeScene />
        <Configurator />
      </FlexContainer>
    </DataContextProvider>
  );
};
