import React, { useContext } from "react";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigContainer } from "../Layout/ConfigContainer";
import { GenerateRoom } from "./GenerateRoom";
import { LightStep1 } from "./LightStep1";

export const Configurator = () => {
  const lightContext = useContext(LightContext);

  const configureStep = () => {
    if (lightContext) {
      switch (lightContext.step) {
        case 1:
          return <LightStep1 />;
        default:
          return <GenerateRoom />;
      }
    }
  };

  return <ConfigContainer>{configureStep()}</ConfigContainer>;
};
