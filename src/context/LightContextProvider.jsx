import React, { createContext, useRef, useState } from "react";

export const LightContext = createContext();

export const LightContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState(null);
  const [height, setHeight] = useState(null);
  const [rotation, setRotation] = useState(null);
  const lampRef = useRef();
  const lightRef = useRef();
  const pointRef = useRef();
  const roomLight = useRef();
  const envLight = useRef();
  const orbitRef = useRef();

  const elements = {
    step,
    setStep,
    model,
    setModel,
    lampRef,
    height,
    setHeight,
    rotation,
    setRotation,
    lightRef,
    pointRef,
    roomLight,
    envLight,
    orbitRef,
  };

  return <LightContext.Provider value={elements}>{children}</LightContext.Provider>;
};
