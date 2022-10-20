import React from "react";
import { ThreeScene } from "./components/Canvas/ThreeScene";
import { Configurator } from "./components/Configurator/Configurator";

export const App = () => {
  return (
    <>
      <ThreeScene />
      <Configurator />
    </>
  );
};
