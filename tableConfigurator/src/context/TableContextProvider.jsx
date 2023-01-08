import React, { createContext, useRef, useState } from "react";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const tableRef = useRef();
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [url, setUrl] = useState(null);
  const [loadingPhase, setLoadingPhase] = useState("Exporting model...");
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const elements = {
    tableRef,
    setLoading,
    loading,
    complete,
    setComplete,
    setUrl,
    url,
    setLoadingPhase,
    loadingPhase,
    setShowLoadingAnimation,
    showLoadingAnimation,
    setLoadingScreen,
    loadingScreen,
  };

  return (
    <TableContext.Provider value={elements}>{children}</TableContext.Provider>
  );
};
