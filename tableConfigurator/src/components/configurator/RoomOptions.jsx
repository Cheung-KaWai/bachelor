import { colors } from "@/js/theme";
import { useRoomConfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";
import { Flex } from "../layouts/Flex";
import { Label } from "../ui/Label";

export const RoomOptions = () => {
  const update = useRoomConfiguration((state) => state.update);
  const walls = useRoomConfiguration((state) => state.showWalls);
  const doors = useRoomConfiguration((state) => state.showDoors);
  const windows = useRoomConfiguration((state) => state.showWindows);
  const objects = useRoomConfiguration((state) => state.showObjects);
  const openings = useRoomConfiguration((state) => state.showOpenings);

  return (
    <>
      <Label text={"Room Settings"} size={"1.5rem"} weight={500} color={colors.charcoal} margin={"0 0 0.5rem 0 "} />
      <Flex gap={"0.5rem"} margin={"0 0 2rem 0"} wrap={"wrap"}>
        <PresetButton onClick={() => update("showWalls", !walls)} selected={walls}>
          Walls
        </PresetButton>
        <PresetButton onClick={() => update("showDoors", !doors)} selected={doors}>
          Doors
        </PresetButton>
        <PresetButton onClick={() => update("showWindows", !windows)} selected={windows}>
          Windows
        </PresetButton>
        <PresetButton onClick={() => update("showObjects", !objects)} selected={objects}>
          Objects
        </PresetButton>
        <PresetButton onClick={() => update("showOpenings", !openings)} selected={openings}>
          Openings
        </PresetButton>
      </Flex>
    </>
  );
};

const PresetButton = styled.button`
  padding: 1rem 0;
  flex: 1;
  text-align: center;
  border-radius: 5px;
  font-size: 1.3rem;
  color: ${colors.charcoal};
  background-color: ${(props) => (props.selected ? "#fff" : colors.lightCreme)};
  transition: transform 0.3s ease-out;
  outline: 1px solid ${(props) => (props.selected ? "rgba(0, 0, 0, 0.2)" : "transparant")};
  padding-left: 1rem;
  padding-right: 1rem;
`;
