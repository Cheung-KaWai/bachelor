import { TransformControls, useHelper } from "@react-three/drei";
import React, { useContext, useRef } from "react";
import { Object3D, PointLightHelper, Vector3 } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const Lamp = () => {
  const lightContext = useContext(LightContext);
  const target = new Object3D();

  const transform = useRef();

  let newPosition = new Vector3();

  useHelper(lightContext.pointRef, PointLightHelper, 1, "teal");

  const handleTarget = () => {
    let newPosition = new Vector3();
    if (lightContext.lampRef.current) {
      lightContext.lightRef.current.getWorldPosition(newPosition);
      lightContext.lampRef.current.position.set(newPosition.x, lightContext.lampRef.current.position.y, newPosition.z);
    }
  };

  const stopOrbit = () => {
    if (lightContext.orbitRef.current) lightContext.orbitRef.current.enabled = false;
  };

  const startOrbit = () => {
    if (lightContext.orbitRef.current) lightContext.orbitRef.current.enabled = true;
  };

  return (
    <>
      <TransformControls
        showY={false}
        ref={transform}
        size={0.1}
        position={[0, lightContext.height - lightContext.lampHeight + 0.1, 0]}
        onMouseDown={stopOrbit}
        onMouseUp={startOrbit}
        onChange={handleTarget}
      >
        <pointLight
          ref={lightContext.lightRef}
          intensity={0.8}
          // power={890}
          color="#fff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={25}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          position={[0, 0, 0]}
        />
      </TransformControls>

      <primitive object={target} position={[newPosition.x, 0, newPosition.z]} />
    </>
  );
};
