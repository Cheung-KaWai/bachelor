import React from "react";
import { OrbitControls, Stage, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useRef } from "react";

export const TestComponent = () => {
  const dir = useRef();
  useHelper(dir, DirectionalLightHelper, 1, "#f00");

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        ref={dir}
      />
      {/* <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} /> */}
      <group position={[0, -3.5, 0]}>
        <mesh receiveShadow castShadow position={[0, 4, 0]}>
          <boxBufferGeometry attach="geometry" args={[4, 1, 1]} />
          <meshStandardMaterial attach="material" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          {/* <meshStandardMaterial attach="material" /> */}
          <shadowMaterial attach="material" transparent opacity={0.1} />
        </mesh>
      </group>
    </>
  );
};
