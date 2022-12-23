import { useConfigurationStore } from "@/store/data";
import { animated } from "@react-spring/three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Euler } from "three";

const AnimatedCamera = animated(PerspectiveCamera);

export const Controls = () => {
  // const rotation = useConfigurationStore((state) => state.floorRotation);
  // let rotatie = 0;
  // if (rotation) {
  //   rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(rotation);
  // }
  // console.log(rotatie);
  // const controlsRef = useRef();
  // useEffect(() => {
  //   console.log(rotation);
  //   let rotatie = 0;
  //   if (rotation) {
  //     rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(rotation);
  //   }
  //   controlsRef.current.rotation = [0, rotatie.y, 0];
  //   controlsRef.current.update();
  // }, []);

  return (
    <>
      <OrbitControls />
      <AnimatedCamera makeDefault fov={75} position={[0, 12, 0]} far={40} />
    </>
  );
};
