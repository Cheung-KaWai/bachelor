import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Wall } from "./Wall";

export const ListWalls = () => {
  const room = useConfigurationStore((state) => state.room);

  return (
    <>
      {room.walls?.map((wall, key) => (
        <Wall key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </>
  );
};
