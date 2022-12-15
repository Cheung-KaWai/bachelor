import React, { createContext, useRef, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [roomData, setRoomData] = useState(null);
  const [rerender, setRerender] = useState(false);
  const [step, setStep] = useState(0);
  const [wallHeight, setWallHeight] = useState(0);
  const [cameraPosition, setCameraPosition] = useState({ data: [0, 20, 0] });
  const [amountPoints, setAmountPoints] = useState(0);

  const [showWalls, setShowWalls] = useState(true);
  const [showDoors, setShowDoors] = useState(true);
  const [showWindows, setShowWindows] = useState(true);
  const [showOthers, setShowOthers] = useState(true);
  const [showFloor, setShowFloor] = useState(true);

  const [cornerPoints, setCornerPoints] = useState([]);
  const [floorDataPoints, setFloorDataPoints] = useState([]);

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
    setWallHeight,
    wallHeight,
    cameraPosition,
    setCameraPosition,
    setShowWalls,
    showWalls,
    setShowDoors,
    showDoors,
    setShowWindows,
    showWindows,
    setShowOthers,
    showOthers,
    setCornerPoints,
    cornerPoints,
    setFloorDataPoints,
    floorDataPoints,
    setAmountPoints,
    amountPoints,
    setShowFloor,
    showFloor,
  };

  return <DataContext.Provider value={elements}>{children}</DataContext.Provider>;
};
