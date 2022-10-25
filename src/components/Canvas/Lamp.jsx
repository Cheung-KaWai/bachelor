import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { Object3D, PointLightHelper, SpotLightHelper } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const Lamp = () => {
  const lightContext = useContext(LightContext);
  const target = new Object3D();

  useHelper(lightContext.lightRef, SpotLightHelper, "teal");
  useHelper(lightContext.pointRef, PointLightHelper, 0.05, "teal");

  return (
    <>
      <spotLight
        castShadow
        position={[1, lightContext.height ?? 0, 1]}
        target-position={[1, 0, 1]}
        intensity={0.3}
        color="#ffd1a3"
        ref={lightContext.lightRef}
        angle={0.5}
        penumbra={1}
        distance={0}
        target={target}
      />
      <primitive object={target} position={[1, 0, 1]} />
      <pointLight
        castShadow
        ref={lightContext.pointRef}
        position={[1, lightContext.height ?? 0, 1]}
        intensity={0.1}
        color="#ffd1a3"
      />
    </>
  );
};
