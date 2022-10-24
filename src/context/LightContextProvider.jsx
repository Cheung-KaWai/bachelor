import React, { createContext, useState } from "react";

export const LightContext = createContext();

export const LightContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState(null);

  const elements = {
    step,
    setStep,
    model,
    setModel,
  };

  return <LightContext.Provider value={elements}>{children}</LightContext.Provider>;
};
