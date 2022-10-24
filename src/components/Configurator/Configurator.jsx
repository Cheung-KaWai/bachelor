import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { ConfigContainer } from "../Layout/ConfigContainer";
import { GenerateRoom } from "./GenerateRoom";
import { LightStep1 } from "./LightStep1";

export const Configurator = () => {
  const context = useContext(DataContext);

  const configureStep = () => {
    if (context) {
      switch (context.step) {
        case 1:
          return <LightStep1 />;
        default:
          return <GenerateRoom />;
      }
    }
  };

  return <ConfigContainer>{configureStep()}</ConfigContainer>;
};
