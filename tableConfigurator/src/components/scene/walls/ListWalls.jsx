import { WallMaterial } from "@/js/textures";
import { useConfigurationStore } from "@/store/data";
import React, { useEffect, useRef } from "react";
import { MeshStandardMaterial } from "three";
import { Wall } from "./Wall";

export const ListWalls = () => {
  const room = useConfigurationStore((state) => state.room);
  const update = useConfigurationStore((state) => state.update);
  const maps = WallMaterial();
  const material = new MeshStandardMaterial(maps.plaster);
  useEffect(() => {
    update("floorPoints", []);
  }, [room]);

  return (
    <group>
      {room.walls?.map((wall, key) => (
        <Wall key={key} scale={wall.dimensions} transform={wall.transform} material={material} />
      ))}
    </group>
  );
};
