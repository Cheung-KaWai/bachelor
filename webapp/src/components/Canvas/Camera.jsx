import { PerspectiveCamera, useHelper } from "@react-three/drei";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

export const Camera = () => {
  const context = useContext(DataContext);
  return <PerspectiveCamera makeDefault position={context.cameraPosition.data} far={100} ref={context.cameraRef} />;
};
