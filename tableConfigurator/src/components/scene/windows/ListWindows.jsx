import { useConfigurationStore } from "@/store/data";
import React from "react";

export const ListWindows = () => {
  const room = useConfigurationStore((state) => state.room);
  return (
    <group position={[0, 0, 0]}>
      {room.windows?.map((wall, key) => (
        <Window key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
