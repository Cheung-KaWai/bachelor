import { useHelper } from "@react-three/drei";
import React, { useContext } from "react";
import { PointLightHelper } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const PointLight = () => {
  const lightContext = useContext(LightContext);

  useHelper(lightContext.pointRef, PointLightHelper, 0.05, "teal");

  return <pointLight ref={lightContext.pointRef} decay={2} intensity={0.2} position={[1, 2.5, 1]} />;
};
