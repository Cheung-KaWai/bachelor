import { getData } from "@/js/firebase";
import { colors } from "@/js/theme";
import { handleNewRoom } from "@/lib/functions";
import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Container } from "../layouts/Container";
import { FloorOptions } from "./FloorOptions";

export const Configurator = () => {
  const update = useConfigurationStore((state) => state.update);

  return (
    <Container bgColor={colors.veryLightCreme} width={"40vw"} height={"100vh"} padding={"2rem"}>
      <button onClick={() => handleNewRoom("wCCz3UBJxB5lqnqousUo", update, getData)}>Option 1</button>
      <button onClick={() => handleNewRoom("8Z6cYjUgFUDDcyzZRC9H", update, getData)}>Option 2</button>
      <button onClick={() => handleNewRoom("3dTDJRPmF3U8Ec4nKxLa", update, getData)}>Option 3</button>
      <FloorOptions />
    </Container>
  );
};
