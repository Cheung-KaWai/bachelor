import { useConfigurationStore, useRoomConfiguration } from "@/store/data";
import React from "react";
import { Door } from "./Door";

export const ListDoors = () => {
  const room = useConfigurationStore((state) => state.room);
  const showDoors = useRoomConfiguration((state) => state.showDoors);

  return (
    <group position={[0, 0, 0]} visible={showDoors}>
      {room.doors?.map((wall, key) => (
        <Door key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
