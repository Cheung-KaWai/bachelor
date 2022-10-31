import tal from "../../assets/models/tal.glb";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useContext } from "react";
import { LightContext } from "../../context/LightContextProvider";
import { Box3, MeshStandardMaterial, Vector3 } from "three";
import { useState } from "react";

export function Tal(props) {
  const { nodes, materials } = useGLTF(tal);
  const lightContext = useContext(LightContext);

  const material = new MeshStandardMaterial({ color: "#fff", envMapIntensity: 0.1 });

  const [dimensionY, setDimensionY] = useState(0);

  useEffect(() => {
    const lamp = lightContext.lampRef.current;
    const box = new Box3().setFromObject(lamp);
    let dimensions = new Vector3();
    box.getSize(dimensions);
    lightContext.setLampHeight(dimensions.y);
  }, []);

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={[0, lightContext.height ? lightContext.height - lightContext.lampHeight : 0, 0]}
        ref={lightContext.lampRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={material}
          position={[0, 0.19, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={material}
          position={[0, 0.19, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={material}
          position={[0, 0.19, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={material}
          position={[0, 0.77, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={material}
          position={[0, 0.45, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={material}
          position={[0, 0.13, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={material}
          position={[0, 0.75, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={material}
          position={[0, 0.12, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={material}
          position={[0, 0, 0]}
          scale={0.03}
        />
      </group>
    </>
  );
}

useGLTF.preload(tal);
