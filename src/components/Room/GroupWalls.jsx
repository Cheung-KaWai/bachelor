import { useHelper } from "@react-three/drei";
import React from "react";
import { BoxHelper } from "three";
import { Wall } from "./Wall";

export const GroupWalls = ({ groupRef, data }) => {
  useHelper(groupRef, BoxHelper, "blue");

  return (
    <group ref={groupRef}>
      {data.map((wall, key) => {
        return <Wall key={key} scale={wall.dimensions} transform={wall.transform} />;
      })}
    </group>
  );
};
