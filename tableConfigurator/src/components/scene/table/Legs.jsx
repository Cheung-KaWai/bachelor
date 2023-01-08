import { LegMaterial } from "@/js/legsTextures";
import { Leg1 } from "@/models/legs/Leg1";
import { Leg2 } from "@/models/legs/Leg2";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import { MeshStandardMaterial } from "three";

export const Legs = () => {
  const length = useTableconfiguration((store) => store.length);
  const width = useTableconfiguration((store) => store.width);

  const currentLeg = useTableconfiguration((store) => store.currentLeg);

  const currentLegTexture = useTableconfiguration((store) => store.legTexture);
  const maps = LegMaterial();
  const material = new MeshStandardMaterial(maps[currentLegTexture]);

  const legModels = {
    leg1: Leg1,
    leg2: Leg2,
  };

  const Leg = legModels[currentLeg];
  return (
    <>
      <Leg position={[length / 2 - 0.1, 0, 0]} material={material} />
      <Leg position={[-length / 2 + 0.1, 0, 0]} material={material} />
    </>
  );
};
