import { Outdoor } from "@/models/tables/Outdoor";
import { Square1 } from "@/models/tables/Square1";
import { Square2 } from "@/models/tables/Square2";
import { Square3 } from "@/models/tables/Square3";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import { MeshStandardMaterial } from "three";

export const TableTop = () => {
  const currentTable = useTableconfiguration((store) => store.currentTable);
  const currentTexture = useTableconfiguration((store) => store.currentTexture);
  const currentEdge = useTableconfiguration((store) => store.currentEdge);
  const length = useTableconfiguration((store) => store.length);
  const width = useTableconfiguration((store) => store.width);
  const material = new MeshStandardMaterial();
  const tableModels = {
    square: {
      edge1: Square1,
      edge2: Square2,
      edge3: Square3,
    },
    outdoor: Outdoor,
  };

  const TableModel = tableModels[currentTable][currentEdge];

  return (
    <TableModel
      material={material}
      length={length}
      width={width}
      position={[0, 0.81, 0]}
    />
  );
  return <div>TableTop</div>;
};
