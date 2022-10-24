import { useHelper } from "@react-three/drei";
import React, { useContext } from "react";
import { SpotLightHelper } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const PointLight = () => {
  const lightContext = useContext(LightContext);

  // useHelper(lightContext.lightRef, SpotLightHelper, "teal");

  return (
    <spotLight position={[0, 2.5, 0]} intensity={1} color="#fff" ref={lightContext.lightRef} angle={0.2} penumbra={1} />
  );
};
