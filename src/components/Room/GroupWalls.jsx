import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { Wall } from "./Wall";

export const GroupWalls = ({ data }) => {
  const context = useContext(DataContext);

  return (
    <group ref={context.groupRef}>
      {context.roomData &&
        context.roomData.walls.map((wall, key) => {
          return <Wall key={key} scale={wall.dimensions} transform={wall.transform} />;
        })}
    </group>
  );
};
