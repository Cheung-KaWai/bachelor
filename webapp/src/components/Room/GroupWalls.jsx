// import { useHelper } from "@react-three/drei";
// import { BoxHelper } from "three";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { Wall } from "./Wall";

function Test() {
  // useHelper(context.groupRef, BoxHelper, "blue");
  const context = useContext(DataContext);
  console.log("walls");
  return (
    <group ref={context.groupRef}>
      {context.roomData &&
        context.roomData.walls.map((wall, key) => {
          return <Wall key={key} scale={wall.dimensions} transform={wall.transform} />;
        })}
    </group>
  );
}

export const GroupWalls = React.memo(Test);
