import { getData } from "@/js/firebase";
import { colors } from "@/js/theme";
import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Container } from "../layouts/Container";

export const Configurator = () => {
  const update = useConfigurationStore((state) => state.update);

  const handleNewRoom = async (id) => {
    const data = await getData(id);
    update("room", data);
    console.log("yeah");
  };

  return (
    <Container bgColor={colors.veryLightCreme} width={"40vw"} height={"100vh"}>
      <button onClick={() => handleNewRoom("wCCz3UBJxB5lqnqousUo")}>Option 1</button>
      <button onClick={() => handleNewRoom("8Z6cYjUgFUDDcyzZRC9H")}>Option 2</button>
    </Container>
  );
};
