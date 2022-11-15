import React, { createContext, useRef, useState } from "react";
import { Tal } from "../components/Models/Tal";

export const LightContext = createContext();

export const LightContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [model, setModel] = useState(<Tal />);
  const [height, setHeight] = useState(0);
  const [offset, setOffset] = useState(0);
  const [rotation, setRotation] = useState(null);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);
  const [lampHeight, setLampHeight] = useState(0);
  const [lampTextures, setLampTextures] = useState(null);
  const [currentTexture, setCurrentTexture] = useState(null);
  const [modelName, setModelName] = useState("kombo");
  const [modelColor, setModelColor] = useState("black");
  const [colorTemp, setColorTemp] = useState("3000k");
  const [showLamp, setShowLamp] = useState(false);

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
    setModelName,
    modelName,
    setModelColor,
    modelColor,
    setColorTemp,
    colorTemp,
    setShowLamp,
    showLamp,
    setOffset,
    offset,
  };

  return <LightContext.Provider value={elements}>{children}</LightContext.Provider>;
};
