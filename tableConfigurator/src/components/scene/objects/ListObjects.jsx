import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Furniture } from "./Furniture";

export const ListObjects = () => {
  const room = useConfigurationStore((state) => state.room);
  return (
    <group position={[0, 0, 0]}>
      {room.objects?.map((wall, key) => (
        <Furniture key={key} scale={wall.dimensions} transform={wall.transform} />
      ))}
    </group>
  );
};
