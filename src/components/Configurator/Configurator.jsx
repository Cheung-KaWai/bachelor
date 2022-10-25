import React, { useContext } from "react";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigContainer } from "../Layout/ConfigContainer";
import { GenerateRoom } from "./GenerateRoom";
import { LightStep1 } from "./LightStep1";
import { LightStep2 } from "./LightStep2";
import { LightStep3 } from "./LightStep3";

export const Configurator = () => {
  const lightContext = useContext(LightContext);

  const configureLight = (
    <>
      <LightStep1 />
      <LightStep2 />
      <LightStep3 />
    </>
  );

  const configureStep = () => {
    if (lightContext) {
      switch (lightContext.step) {
        case 1:
          return configureLight;
        default:
          return <GenerateRoom />;
      }
    }
  };

  return <ConfigContainer>{configureStep()}</ConfigContainer>;
};
