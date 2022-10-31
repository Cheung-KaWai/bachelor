import tal from "../../assets/models/tal.glb";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useContext } from "react";
import { LightContext } from "../../context/LightContextProvider";
import { Box3, Vector3 } from "three";
import { useState } from "react";

export function Tal(props) {
  const { nodes, materials } = useGLTF(tal);
  const lightContext = useContext(LightContext);

  const [dimensionY, setDimensionY] = useState(0);

  useEffect(() => {
    const lamp = lightContext.lampRef.current;
    const box = new Box3().setFromObject(lamp);
    let dimensions = new Vector3();
    box.getSize(dimensions);
    setDimensionY(dimensions.y);
  }, []);

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={[0, lightContext.height ? lightContext.height - dimensionY : 0, 0]}
        ref={lightContext.lampRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[0, 0.19, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[0, 0.19, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[0, 0.19, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[0, 0.77, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[0, 0.45, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0, 0.13, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[0, 0.75, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[0, 0.12, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[0, 0, 0]}
          scale={0.03}
        />
      </group>
    </>
  );
}

useGLTF.preload(tal);
