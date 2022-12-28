import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";

export const Light = () => {
  const lightRef = useRef();
  useHelper(lightRef, PointLightHelper, "cyan");
  return <pointLight intensity={0.5} ref={lightRef} position={[-2, 3, -1]} />;
};
