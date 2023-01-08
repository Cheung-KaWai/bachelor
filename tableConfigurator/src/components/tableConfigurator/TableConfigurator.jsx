import { TableContext } from "@/context/TableContextProvider";
import { colors } from "@/js/theme";
import { useTableconfiguration } from "@/store/data";
import React, { useContext } from "react";
import { Container } from "../layouts/Container";
import { NextButton } from "../ui/NextButton";
import { LegsMaterial } from "./LegsMaterial";
import { LegsModel } from "./LegsModel";
import { Options } from "./Options";
import { ScanningQR } from "./ScanningQR";
import { Shape } from "./Shape";
import { TableMaterial } from "./TableMaterial";

export const TableConfigurator = () => {
  const update = useTableconfiguration((store) => store.update);
  const context = useContext(TableContext);
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
      <Options />
      {context.loading && <ScanningQR />}
      <NextButton
        text={"Back"}
        onClick={() => {
          update("showTableconfiguration", false);
        }}
      />
    </Container>
  );
};
