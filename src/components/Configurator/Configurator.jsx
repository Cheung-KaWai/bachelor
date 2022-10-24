import React, { useContext } from "react";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigContainer } from "../Layout/ConfigContainer";
import { GenerateRoom } from "./GenerateRoom";
import { LightStep1 } from "./LightStep1";
import { LightStep2 } from "./LightStep2";
import { LightStep3 } from "./LightStep3";

export const Configurator = () => {
  const lightContext = useContext(LightContext);

  const configureStep = () => {
    if (lightContext) {
      switch (lightContext.step) {
        case 1:
          return <LightStep1 />;
        case 2:
          return <LightStep2 />;
        case 3:
          return <LightStep3 />;
        default:
          return <GenerateRoom />;
      }
    }
  };

  return <ConfigContainer>{configureStep()}</ConfigContainer>;
};
