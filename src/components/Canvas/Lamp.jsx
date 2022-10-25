import { useHelper } from "@react-three/drei";
import React, { useContext, useRef } from "react";
import { CameraHelper, Object3D, PointLightHelper, SpotLightHelper } from "three";
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
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        // shadow-camera-far={50}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
        position={[1, lightContext.height ?? 0, 1]}
        target-position={[1, 0, 1]}
        intensity={0.3}
        color="#fff"
        ref={lightContext.lightRef}
        angle={0.5}
        penumbra={1}
        distance={0}
        target={target}
      ></spotLight>
      <primitive object={target} position={[1, 0, 1]} />
      {/* <pointLight
        ref={lightContext.pointRef}
        position={[1, lightContext.height ?? 0, 1]}
        intensity={0.1}
        color="#fff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}
    </>
  );
};
