import React, { useContext } from "react";
import { Euler } from "three";
import { LightContext } from "../../context/LightContextProvider";

export const Floor = () => {
  const lightContext = useContext(LightContext);
  const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(lightContext.rotation);
  rotatie.set(-Math.PI / 2, rotatie.y, rotatie.z);

  const rotatie2 = rotatie.clone();
  rotatie2.set(Math.PI / 2, rotatie2.y, rotatie2.z);

  return (
    <>
      <mesh scale={200} position={[0, -lightContext.height ?? 0, 0]} rotation={rotatie} receiveShadow>
        <planeGeometry />
        <meshStandardMaterial envMapIntensity={0.05} />
      </mesh>
      <mesh scale={200} position={[0, lightContext.height ?? 0, 0]} rotation={rotatie2} receiveShadow>
        <planeGeometry />
        <meshStandardMaterial envMapIntensity={0.05} />
      </mesh>
    </>
  );
};
