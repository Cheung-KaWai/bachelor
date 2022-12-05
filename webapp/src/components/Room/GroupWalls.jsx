import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { Wall } from "./Wall";

function Test() {
  const context = useContext(DataContext);

  const generateWalls = () => {
    const walls = [];

    for (let i = 0; i < 1; i++) {
      const wall = context.roomData.walls[i];
      walls.push(<Wall scale={wall.dimensions} transform={wall.transform} />);
    }
    return walls;
  };

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
