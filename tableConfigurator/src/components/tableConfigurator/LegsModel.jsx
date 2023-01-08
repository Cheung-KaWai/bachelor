import { useTableconfiguration } from "@/store/data";
import React, { useContext } from "react";
import styled from "styled-components";
import { Grid } from "../layouts/Grid";
import { Label } from "../ui/Label";
export const LegsModel = () => {
  const update = useTableconfiguration((store) => store.update);
  const currentLeg = useTableconfiguration((store) => store.currentLeg);
  return (
    <>
      <Label text={"Legs Type"} />
      <Grid columns={4} gap={"1rem"} margin={"0 0 4rem 0"}>
        <Image
          src={"/assets/images/leg1.jpg"}
          selected={currentLeg === "leg1"}
          onClick={() => update("currentLeg", "leg1")}
        />
        <Image
          src={"/assets/images/leg2.jpg"}
          selected={currentLeg === "leg2"}
          onClick={() => update("currentLeg", "leg2")}
        />
      </Grid>
    </>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  cursor: pointer;
  outline: ${(props) => (props.selected === true ? "2px" : "1px")} solid
    rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  width: 100%;
  aspect-ratio: 1/1;
  vertical-align: middle;
`;
