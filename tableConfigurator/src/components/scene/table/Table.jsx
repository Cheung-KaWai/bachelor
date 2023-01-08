import { useConfigurationStore } from "@/store/data";
import { PivotControls } from "@react-three/drei";
import React from "react";
import { Legs } from "./Legs";
import { TableTop } from "./TableTop";

export const Table = () => {
  const rotation = useConfigurationStore((state) => state.floorRotation);
  const height = useConfigurationStore((state) => state.floorHeight);
  const positionY = useConfigurationStore((state) => state.floorYPosition);

  return (
    <group position={[0, -height + positionY, 0]} quaternion={rotation}>
      <PivotControls
        anchor={[0, height - positionY, 0]}
        scale={0.5}
        activeAxes={[true, false, true]}
      >
        <TableTop />
        <Legs />
      </PivotControls>
    </group>
  );
};
