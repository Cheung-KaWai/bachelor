import React, { useContext } from "react";
import { Euler } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const Floor = () => {
  const lightContext = useContext(LightContext);
  const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(lightContext.rotation);
  rotatie.set(-Math.PI / 2, rotatie.y, rotatie.z);
  return (
    <mesh scale={20} position={[0, -lightContext.height ?? 0, 0]} rotation={rotatie}>
      <planeGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
