import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { Wall } from "./Wall";

function Test() {
  const context = useContext(DataContext);
  return (
    <group ref={context.groupRef}>
      {context.showWalls &&
        context.roomData &&
        context.roomData.walls.map((wall, key) => {
          return <Wall key={key} scale={wall.dimensions} transform={wall.transform} />;
        })}
    </group>
  );
}

export const GroupWalls = React.memo(Test);
