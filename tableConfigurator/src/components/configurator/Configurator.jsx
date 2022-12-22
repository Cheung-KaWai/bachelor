import { colors } from "@/js/theme";

import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Container } from "../layouts/Container";
import { FloorOptions } from "./FloorOptions";
import { Preset } from "./Preset";

export const Configurator = () => {
  return (
    <Container bgColor={colors.veryLightCreme} width={"40vw"} height={"100vh"} padding={"2rem"}>
      <Preset />
      <FloorOptions />
    </Container>
  );
};
