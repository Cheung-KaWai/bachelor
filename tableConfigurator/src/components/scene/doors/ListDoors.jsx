import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Door } from "./Door";

export const ListDoors = () => {
  const room = useConfigurationStore((state) => state.room);
  return (
    <group position={[0, 0, 0]}>
      {room.doors?.map((wall, key) => (
        <Door key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
