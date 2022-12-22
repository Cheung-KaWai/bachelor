import { useConfigurationStore } from "@/store/data";
import React, { useEffect, useRef } from "react";
import { Wall } from "./Wall";

export const ListWalls = () => {
  const room = useConfigurationStore((state) => state.room);
  const update = useConfigurationStore((state) => state.update);

  const wallsRef = useRef();

  useEffect(() => {
    update("floorPoints", []);
  }, [room]);

  useEffect(() => {
    console.log(wallsRef);
  }, []);

  return (
    <group ref={wallsRef}>
      {room.walls?.map((wall, key) => (
        <Wall key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
