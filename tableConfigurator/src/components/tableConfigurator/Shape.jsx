import { Subheading } from "@/components/ui/Subheading";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";
import { Grid } from "../layouts/Grid";
import { Label } from "../ui/Label";
import { Margin } from "../ui/Margin";

export const Shape = () => {
  const currentTable = useTableconfiguration((store) => store.currentTable);
  const currentEdge = useTableconfiguration((store) => store.currentEdge);
  const update = useTableconfiguration((store) => store.update);

  const handleChange = (name, value) => {
    update(name, value);
  };

  return (
    <>
      <SectionContainer>
        <Label text={"Length"} />
        <SectionParameters>
          <Select
            defaultValue={2}
            onChange={(e) => handleChange("length", e.target.value)}
          >
            <Option value={1.6}>160 cm</Option>
            <Option value={1.8}>180 cm</Option>
            <Option value={2}>200 cm</Option>
            <Option value={2.2}>220 cm</Option>
            <Option value={2.4}>240 cm</Option>
            <Option value={2.6}>260 cm</Option>
            <Option value={2.8}>280 cm</Option>
            <Option value={3}>300 cm</Option>
          </Select>
        </SectionParameters>
      </SectionContainer>
      <SectionContainer>
        <Label text={"Width"} />
        <SectionParameters>
          <Select
            defaultValue={0.9}
            onChange={(e) => handleChange("width", e.target.value)}
          >
            <Option value={0.85}>85 cm</Option>
            <Option value={0.9}>90 cm</Option>
            <Option value={0.95}>95 cm</Option>
          </Select>
        </SectionParameters>
      </SectionContainer>
      <Margin height={"3rem"} />
      <SectionContainer>
        <Label text={"Table Shape"} />
        <Grid columns={4} gap={"1rem"} margin={"0 0 4rem 0"}>
          <Image
            src={"/assets/images/table1.jpg"}
            selected={currentTable === "square"}
            onClick={() => handleChange("currentTable", "square")}
          />
          <Image
            src={"/assets/images/table2.jpg"}
            selected={currentTable === "outdoor"}
            onClick={() => handleChange("currentTable", "outdoor")}
          />
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Label text={"Edge Finish"} />
        <Grid columns={4} gap={"1rem"} margin={"0 0 4rem 0"}>
          <Image
            src={"/assets/images/edge1.jpg"}
            selected={currentEdge === "edge1"}
            onClick={() => handleChange("currentEdge", "edge1")}
          />
          {currentTable !== "outdoor" && (
            <>
              <Image
                src={"/assets/images/edge2.jpg"}
                selected={currentEdge === "edge2"}
                onClick={() => handleChange("currentEdge", "edge2")}
              />
              <Image
                src={"/assets/images/edge3.jpg"}
                selected={currentEdge === "edge3"}
                onClick={() => handleChange("currentEdge", "edge3")}
              />
            </>
          )}
        </Grid>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.div`
  margin-bottom: 2rem;
`;

const SectionParameters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Select = styled.select`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 1rem;
  transition: all 0.3s ease-out;
  outline: 1px solid transparent;
  color: #212529;
  font-weight: 500;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  transition: all 0.2s ease-out;
  margin-top: 0.5rem;
`;

const Option = styled.option``;

const ImagesContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 2rem;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1/1;
  vertical-align: middle;
  outline: ${(props) => (props.selected === true ? "2px" : "1px")} solid
    rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
`;
