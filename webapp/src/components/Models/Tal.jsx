import tal2 from "../../assets/models/tal.glb";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useContext } from "react";
import { LightContext } from "../../context/LightContextProvider";
import { Box3, Color, MeshBasicMaterial, MeshStandardMaterial, NearestFilter, sRGBEncoding, Vector3 } from "three";
import { useState } from "react";
import texture from "../../assets/images/black4000k.jpg";
import texture2 from "../../assets/images/black3000k.jpg";
import texture3 from "../../assets/images/black2700k.jpg";

export function Tal(props) {
  const { nodes, materials } = useGLTF(tal2);
  const lightContext = useContext(LightContext);
  const black4000k = useTexture(texture);
  black4000k.flipY = false;
  black4000k.encoding = sRGBEncoding;

  const black2700k = useTexture(texture3);
  black2700k.flipY = false;
  black2700k.encoding = sRGBEncoding;

  const black3000k = useTexture(texture2);
  black3000k.flipY = false;
  black3000k.encoding = sRGBEncoding;

  const material = new MeshStandardMaterial({ color: "black", envMapIntensity: 1 });
  const blackTexture4000k = new MeshBasicMaterial({ map: black4000k });
  const blackTexture3000k = new MeshBasicMaterial({ map: black3000k });
  const blackTexture2700k = new MeshBasicMaterial({ map: black2700k });

  useEffect(() => {
    const lamp = lightContext.lampRef.current;
    const box = new Box3().setFromObject(lamp);
    let dimensions = new Vector3();
    box.getSize(dimensions);

    lightContext.setLampTextures({
      blackTexture4000k,
      blackTexture3000k,
      blackTexture2700k,
    });

    lightContext.setCurrentTexture(blackTexture4000k);
    lightContext.setLampHeight(dimensions.y);
  }, []);

  console.log("hello");

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={[0, lightContext.height ? lightContext.height - lightContext.lampHeight : 0, 0]}
        ref={lightContext.lampRef}
      >
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={lightContext.currentTexture ?? material}
          position={[0, 0.19, 0]}
        />
        <mesh
          name="Cylinder006"
          geometry={nodes.Cylinder006.geometry}
          material={lightContext.currentTexture ?? material}
          position={[0, 0.45, 0]}
        />
        <mesh
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          material={lightContext.currentTexture ?? material}
          position={[0, 0.77, 0]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={lightContext.currentTexture ?? material}
          position={[0, 0.13, 0]}
        />
        <mesh
          name="Cylinder008"
          geometry={nodes.Cylinder008.geometry}
          material={lightContext.currentTexture ?? material}
          position={[0, 0.12, 0]}
        />
        <mesh
          name="Cylinder017"
          geometry={nodes.Cylinder017.geometry}
          material={lightContext.currentTexture ?? material}
          position={[0, 0.19, 0]}
        />
        <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={lightContext.currentTexture ?? material} />
      </group>
    </>
  );
}

useGLTF.preload(tal2);
