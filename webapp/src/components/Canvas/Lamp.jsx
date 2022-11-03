import { TransformControls, useHelper } from "@react-three/drei";
import React, { useContext, useEffect, useRef } from "react";
import { CameraHelper, Object3D, PointLightHelper, SpotLightHelper, Vector3 } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const Lamp = () => {
  const lightContext = useContext(LightContext);
  const target = new Object3D();

  const transform = useRef();

  let newPosition = new Vector3();
  // if (lightContext.lightRef.current) {
  //   lightContext.lightRef.current.getWorldPosition(newPosition);
  //   target.position.set(newPosition.x, 0, newPosition.z);
  //   lightContext.lightRef.current.updateMatrixWorld();
  // }

  // useHelper(lightContext.lightRef, SpotLightHelper, "teal");
  useHelper(lightContext.pointRef, PointLightHelper, 0.05, "teal");

  const handleTarget = () => {
    let newPosition = new Vector3();
    if (lightContext.lampRef.current) {
      lightContext.lightRef.current.getWorldPosition(newPosition);
      lightContext.lampRef.current.position.set(newPosition.x, lightContext.lampRef.current.position.y, newPosition.z);
    }
    // if (lightContext.lightRef) {
    //   lightContext.lightRef.current.getWorldPosition(newPosition);
    //   target.position.set(newPosition.x, 0, newPosition.z);
    // }
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
        size={0.5}
        position={[0, lightContext.height - lightContext.lampHeight + 0.1, 0]}
        onMouseDown={stopOrbit}
        onMouseUp={startOrbit}
        onChange={handleTarget}
      >
        {/* <spotLight
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={25}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          target-position={[0, 0, 0]}
          // position={[0, -lightContext.height / 2 ?? 0, 0]}
          position={[0, 0, 0]}
          intensity={0.3}
          color="#fff"
          ref={lightContext.lightRef}
          angle={0.5}
          penumbra={1}
          distance={0}
          target={target}
        /> */}
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
