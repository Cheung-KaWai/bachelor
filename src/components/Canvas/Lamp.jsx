import { TransformControls, useHelper } from "@react-three/drei";
import React, { useContext, useEffect, useRef } from "react";
import { CameraHelper, Object3D, PointLightHelper, SpotLightHelper, Vector3 } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const Lamp = () => {
  const lightContext = useContext(LightContext);
  const target = new Object3D();
  const transform = useRef();

  useHelper(lightContext.lightRef, SpotLightHelper, "teal");
  useHelper(lightContext.pointRef, PointLightHelper, 0.05, "teal");

  // useEffect(() => {
  //   // if (transform.current) {
  //   //   const orbit = lightContext.orbitRef;
  //   //   const controls = transform.current;
  //   //   const callback = (event) => (orbit.current.enabled = !event.value);
  //   //   controls.addEventListener("dragging-changed", callback);
  //   //   return () => controls.removeEventListener("dragging-changed", callback);
  //   // }
  //   transform.current.addEventListener("change", () => {
  //     console.log("hello");
  //   });

  //   // transform.current.addEventListener("mouseDown", () => {
  //   //   // controls.enabled = false;
  //   //   console.log("test");
  //   // });
  //   // transform.current.addEventListener("mouseUp", () => {
  //   //   // controls.enabled = false;
  //   //   console.log("test2");
  //   // });
  // }, []);

  const handleTarget = () => {
    let newPosition = new Vector3();
    if (lightContext.lightRef) {
      lightContext.lightRef.current.getWorldPosition(newPosition);
      target.position.set(newPosition.x, 0, newPosition.z);
    }
    // console.log(target.position);

    // if (transform)
    //   target.position.set(
    //     // target.position.x + (Math.abs(target.position.x) - Math.abs(transform.current.offset.x)),
    //     // 0,
    //     // target.position.z + (Math.abs(target.position.z) - Math.abs(transform.current.offset.z))
    //     transform.current.offset.x,
    //     0,
    //     transform.current.offset.z
    //   );
  };

  const stopOrbit = () => {
    if (lightContext.orbitRef.current) lightContext.orbitRef.current.enabled = false;
  };

  const startOrbit = () => {
    if (lightContext.orbitRef.current) lightContext.orbitRef.current.enabled = true;
  };

  //   const transform = new TransformControls(camera, renderer.domElement);
  //   transform.showY = false;
  //   transform.size = 0.25;
  //   transform.addEventListener("change", function () {
  //     // targetObject.position.set(lamp.position.x + offset, 0, lamp.position.z);
  //     // lamp.target = targetObject;
  //   });
  //   transform.addEventListener("mouseDown", () => {
  //     // controls.enabled = false;
  //     console.log("hello")
  //   });
  //   transform.addEventListener("mouseUp", () => {
  //     // controls.enabled = true;
  //     console.log("bye")
  //   });
  //   transform.attach(lightContext.lightRef);
  //   return transform;
  // }
  // Transform

  // useEffect(() => {
  //   transform.current.addEventListener("mouseDown", () => {
  //     console.log("hello");
  //   });
  //   transform.current.addEventListener("mouseUp", () => {
  //     console.log("bye");
  //   });
  // }, []);

  return (
    <>
      <TransformControls
        showY={false}
        ref={transform}
        size={0.25}
        position={[0, lightContext.height ?? 0, 0]}
        onMouseDown={stopOrbit}
        onMouseUp={startOrbit}
        onChange={handleTarget}
      >
        <spotLight
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          // shadow-camera-far={50}
          // shadow-camera-left={-10}
          // shadow-camera-right={10}
          // shadow-camera-top={10}
          // shadow-camera-bottom={-10}
          // target-position={[0, 0, 0]}
          // position={[0, -lightContext.height / 2 ?? 0, 0]}
          position={[0, 0, 0]}
          intensity={0.3}
          color="#fff"
          ref={lightContext.lightRef}
          angle={0.5}
          penumbra={1}
          distance={0}
          target={target}
        />
      </TransformControls>
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

      <primitive object={target} position={[0, 0, 0]} />
    </>
  );
};
