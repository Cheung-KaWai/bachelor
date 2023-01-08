import { legData } from "@/js/legsTextures";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";
import { Grid } from "../layouts/Grid";
import { Label } from "../ui/Label";

export const LegsMaterial = () => {
  const legTexture = useTableconfiguration((store) => store.legTexture);
  const update = useTableconfiguration((store) => store.update);
  console.log(legTexture);
  return (
    <>
      <Label text={"Legs Material"} />
      <Grid columns={4} gap={"1rem"} margin={"0 0 4rem 0"}>
        <ImageTexture
          src={legData[0].preview}
          selected={legTexture === "Metal1"}
          onClick={() => update("legTexture", "Metal1")}
        />
        <ImageTexture
          src={legData[1].preview}
          selected={legTexture === "Metal2"}
          onClick={() => update("legTexture", "Metal2")}
        />
        <ImageTexture
          src={legData[2].preview}
          selected={legTexture === "Metal3"}
          onClick={() => update("legTexture", "Metal3")}
        />
      </Grid>
    </>
  );
};

const ImageTexture = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  vertical-align: middle;
  border-radius: 50%;
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
