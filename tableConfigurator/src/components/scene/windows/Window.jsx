import { colors } from "@/js/theme";
import { getTransformData } from "@/lib/functions";
import { useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import { MeshPhysicalMaterial, Vector3 } from "three";
import { Frame } from "./Frame";
import { Glass } from "./Glass";

export const Window = ({ scale, transform }) => {
  const { translation, rotation } = getTransformData(transform);
  const { nodes, materials } = useGLTF("/assets/glb/Glass.glb");

  const material = new MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    opacity: 1,
    metalness: 0.2,
    envMapIntensity: 20,
    color: colors.creme,
  });

  return (
    // <>
    //   <group
    //     position={translation}
    //     quaternion={rotation}
    //     dispose={null}
    //     scale={[scale[0], scale[1], 1]}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Glass.geometry}
    //       material={material}
    //       rotation={[0, Math.PI / 2, 0]}
    //     />
    //   </group>
    //   <group position={translation} quaternion={rotation}>
    //     <mesh position={[0.5, 0, 0]}>
    //       <boxGeometry />
    //       <meshStandardMaterial />
    //     </mesh>
    //   </group>
    // </>
    <>
      <Glass
        position={translation}
        quaternion={rotation}
        scale={[scale[0], scale[1], 1]}
      />
      <Frame translation={translation} quaternion={rotation} scale={scale} />
    </>
  );
};
