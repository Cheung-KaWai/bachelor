import { colors } from "@/js/theme";
import { useRoomConfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";
import { Grid } from "../layouts/Grid";
import { Label } from "../ui/Label";

export const WallColorOptions = () => {
  const update = useRoomConfiguration((state) => state.update);
  const wallColor = useRoomConfiguration((state) => state.wall);

  const handleWallColor = (color) => {
    update("wall", color);
  };
  return (
    <>
      <Label text={"Wall Color"} size={"1.5rem"} weight={500} color={colors.charcoal} margin={"0 0 0.5rem 0 "} />
      <Grid columns={4} gap={"1rem"} margin={"0 0 4rem 0 "}>
        <ColorButton onClick={() => handleWallColor("#2B2D42")} selected={wallColor === "#2B2D42"}>
          <ColorOption color={"#2B2D42"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#8D99AE")} selected={wallColor === "#8D99AE"}>
          <ColorOption color={"#8D99AE"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#EDF2F4")} selected={wallColor === "#EDF2F4"}>
          <ColorOption color={"#EDF2F4"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#fff")} selected={wallColor === "#fff"}>
          <ColorOption color={"#fff"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#d8d5ce")} selected={wallColor === "#d8d5ce"}>
          <ColorOption color={"#d8d5ce"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#c9d0c8")} selected={wallColor === "#c9d0c8"}>
          <ColorOption color={"#c9d0c8"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#cdc7b9")} selected={wallColor === "#cdc7b9"}>
          <ColorOption color={"#cdc7b9"} />
        </ColorButton>
        <ColorButton onClick={() => handleWallColor("#898a84")} selected={wallColor === "#898a84"}>
          <ColorOption color={"#898a84"} />
        </ColorButton>
      </Grid>
    </>
  );
};

const ColorButton = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0.5rem;
  outline: 1px solid ${(props) => (props.selected ? "rgba(0, 0, 0, 0.2)" : "transparant")};
  border-radius: 5px;
`;

const ColorOption = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 3px;
`;
