import React, { createContext, useRef, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [roomData, setRoomData] = useState(null);
  const [rerender, setRerender] = useState(false);
  const groupRef = useRef();

  const elements = {
    roomData,
    setRoomData,
    groupRef,
    rerender,
    setRerender,
  };

  return <DataContext.Provider value={elements}>{children}</DataContext.Provider>;
};
