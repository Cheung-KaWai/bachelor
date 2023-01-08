import { colors } from "@/js/theme";
import React from "react";
import { Container } from "../layouts/Container";
import { Shape } from "./Shape";
import { TableMaterial } from "./TableMaterial";

export const TableConfigurator = () => {
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
    </Container>
  );
};
