import { floorData } from "@/js/textures";
import { colors } from "@/js/theme";
import { useRoomConfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";
import { Grid } from "../layouts/Grid";
import { Label } from "../ui/Label";

export const FloorOptions = () => {
  const update = useRoomConfiguration((state) => state.update);
  const currentFloor = useRoomConfiguration((state) => state.floor);

  return (
    <>
      <Label text={"Floor Material"} size={"1.5rem"} weight={500} color={colors.charcoal} margin={"0 0 1rem 0 "} />
      <Grid columns={4} gap={"1rem"}>
        {floorData.map((floor, key) => (
          <ImageButton onClick={() => update("floor", floor.id)} key={key} selected={currentFloor === floor.id}>
            <Image src={floor.map} />
          </ImageButton>
        ))}
      </Grid>
    </>
  );
};

const ImageButton = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  transition: box-shadow 0.3s ease-out;
  outline: 1px solid ${(props) => (props.selected ? colors.creme : "tranparant")};
  background-color: ${(props) => (props.selected ? "#fff" : null)};
  box-shadow: ${(props) => (props.selected ? "0px 5px 10px 1px rgb(0, 0, 0 , 10%)" : null)};

  &:hover {
    outline: 1px solid ${colors.creme};
  }
`;

const Image = styled.img`
  border-radius: 3px;
  width: 100%;
  aspect-ratio: 1/1;
  vertical-align: middle;
`;
