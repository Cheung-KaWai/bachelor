import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshPhysicalMaterial, Vector3 } from "three";
import { colors } from "@/js/theme";

export function Glass({ ...props }) {
  const { nodes, materials } = useGLTF("/assets/glb/Glass.glb");
  const glassRef = useRef();

  const material = new MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    opacity: 1,
    metalness: 0.2,
    envMapIntensity: 20,
    color: colors.creme,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={material}
        rotation={[0, Math.PI / 2, 0]}
        ref={glassRef}
      />
    </group>
  );
}

useGLTF.preload("/assets/glb/Glass.glb");
