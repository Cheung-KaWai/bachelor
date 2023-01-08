import { colors } from "@/js/theme";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import { Container } from "../layouts/Container";
import { NextButton } from "../ui/NextButton";
import { LegsMaterial } from "./LegsMaterial";
import { LegsModel } from "./LegsModel";
import { Shape } from "./Shape";
import { TableMaterial } from "./TableMaterial";

export const TableConfigurator = () => {
  const update = useTableconfiguration((store) => store.update);

  return (
    <Container
      bgColor={colors.veryLightCreme}
      width={"40vw"}
      height={"100vh"}
      padding={"2rem 4rem"}
      overflowY={"scroll"}
    >
      <Shape />
      <TableMaterial />
      <LegsModel />
      <LegsMaterial />
      <NextButton
        text={"Back"}
        onClick={() => {
          update("showTableconfiguration", false);
        }}
      />
    </Container>
  );
};
