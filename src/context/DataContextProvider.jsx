import React, { createContext, useRef, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [roomData, setRoomData] = useState(null);
  const [rerender, setRerender] = useState(false);
  const [step, setStep] = useState(0);

  const groupRef = useRef();
  const cameraRef = useRef();

  const elements = {
    roomData,
    setRoomData,
    groupRef,
    rerender,
    setRerender,
    cameraRef,
    step,
    setStep,
  };

  return <DataContext.Provider value={elements}>{children}</DataContext.Provider>;
};
