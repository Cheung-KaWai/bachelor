import { useConfigurationStore, useRoomConfiguration } from "@/store/data";
import React from "react";
import { Window } from "./Window";

export const ListWindows = () => {
  const room = useConfigurationStore((state) => state.room);
  const showWindows = useRoomConfiguration((state) => state.showWindows);

  return (
    <group position={[0, 0, 0]} visible={showWindows}>
      {room.windows?.map((wall, key) => (
        <Window key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
