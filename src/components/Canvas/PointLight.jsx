import { useHelper } from "@react-three/drei";
import React, { useContext, useRef } from "react";
import { PointLightHelper } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const PointLight = ({ color, position, intensity }) => {
  const lightContext = useContext(LightContext);

  const tijdelijk = useRef();
  // lightContext.pointRef
  useHelper(tijdelijk, PointLightHelper, 0.05, "teal");

  return (
    <pointLight
      ref={tijdelijk}
      decay={2}
      intensity={intensity ?? 0.05}
      position={position ?? [0, 0, 0]}
      color={color ?? "#fff"}
      castShadow
      shadow-mapSize-height={512}
      shadow-mapSize-width={512}
    />
  );
};
