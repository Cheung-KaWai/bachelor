import React, { createContext, useRef, useState } from "react";

export const LightContext = createContext();

export const LightContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState(null);
  const [height, setHeight] = useState(0);
  const [rotation, setRotation] = useState(null);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);
  const [lampHeight, setLampHeight] = useState(0);
  const [lampTextures, setLampTextures] = useState(null);
  const [currentTexture, setCurrentTexture] = useState(null);

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
    targetPosition,
    setTargetPosition,
    setLampHeight,
    lampHeight,
    setLampTextures,
    lampTextures,
    setCurrentTexture,
    currentTexture,
  };

  return <LightContext.Provider value={elements}>{children}</LightContext.Provider>;
};
