import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { Object3D, SpotLightHelper } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const SpotLight = () => {
  const lightContext = useContext(LightContext);
  const target = new Object3D();

  console.log(target);

  useHelper(lightContext.lightRef, SpotLightHelper, "teal");
  // console.log(lightContext.lightRef);
  return (
    <>
      <spotLight
        position={[1, lightContext.height ?? 0, 1]}
        target-position={[1, 0, 1]}
        intensity={0.3}
        color="#ffa957"
        ref={lightContext.lightRef}
        angle={0.5}
        penumbra={1}
        distance={0}
        target={target}
      />
      <primitive object={target} position={[1, 0, 1]} />
    </>
  );
};
