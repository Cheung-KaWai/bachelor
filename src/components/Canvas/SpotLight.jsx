import { useHelper } from "@react-three/drei";
import React, { useContext } from "react";
import { SpotLightHelper } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const SpotLight = () => {
  const lightContext = useContext(LightContext);

  useHelper(lightContext.lightRef, SpotLightHelper, "teal");

  return (
    <>
      <spotLight
        position={[0, lightContext.height, 0]}
        intensity={1}
        color="#fff"
        ref={lightContext.lightRef}
        angle={1}
        penumbra={1}
        distance={5}
        decay={2}
      />
    </>
  );
};
