import { useConfigurationStore } from "@/store/data";
import React, { useEffect } from "react";
import { Wall } from "./Wall";

export const ListWalls = () => {
  const room = useConfigurationStore((state) => state.room);
  const update = useConfigurationStore((state) => state.update);
  useEffect(() => {
    update("floorPoints", []);
  }, [room]);

  return (
    <group position={[0, 0, 0]}>
      {room.walls?.map((wall, key) => (
        <Wall key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
