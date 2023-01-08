import { tableData } from "@/js/tableTextures";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";
import { Grid } from "../layouts/Grid";
import { Label } from "../ui/Label";
import { Margin } from "../ui/Margin";

export const TableMaterial = () => {
  const currentTexture = useTableconfiguration((store) => store.tableTexture);
  const update = useTableconfiguration((store) => store.update);

  return (
    <>
      <Label text={"Table Material"} />
      <Grid columns={4} gap={"1rem"} margin={"0 0 4rem 0"}>
        <ImageTexture
          src={tableData[0].preview}
          selected={currentTexture === "Wood1"}
          onClick={() => update("tableTexture", "Wood1")}
        />
        <ImageTexture
          src={tableData[1].preview}
          selected={currentTexture === "Wood2"}
          onClick={() => update("tableTexture", "Wood2")}
        />
        <ImageTexture
          src={tableData[2].preview}
          selected={currentTexture === "Wood3"}
          onClick={() => update("tableTexture", "Wood3")}
        />
      </Grid>
    </>
  );
};

const ImageTexture = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  vertical-align: middle;
  cursor: pointer;
  outline: ${(props) => (props.selected === true ? "2px" : "0px")} solid
    rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

const ImageContainers = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;
