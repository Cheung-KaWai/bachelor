import { WallMaterial } from "@/js/textures";
import { useConfigurationStore, useRoomConfiguration } from "@/store/data";
import React, { useEffect, useRef } from "react";
import { MeshStandardMaterial } from "three";
import { Wall } from "./Wall";

export const ListWalls = () => {
  const room = useConfigurationStore((state) => state.room);
  const update = useConfigurationStore((state) => state.update);
  const maps = WallMaterial();
  const material = new MeshStandardMaterial(maps.plaster);
  const showWalls = useRoomConfiguration((state) => state.showWalls);

  useEffect(() => {
    update("floorPoints", []);
  }, [room]);

  return (
    <group visible={showWalls}>
      {room.walls?.map((wall, key) => (
        <Wall key={key} scale={wall.dimensions} transform={wall.transform} material={material} />
      ))}
    </group>
  );
};
