import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [roomData, setRoomData] = useState(null);

  const elements = {
    roomData,
    setRoomData,
  };

  return <DataContext.Provider value={elements}>{children}</DataContext.Provider>;
};
