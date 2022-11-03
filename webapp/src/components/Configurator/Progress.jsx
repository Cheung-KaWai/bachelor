import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { FlexContainer } from "../Layout/FlexContainer";

export default function Progress() {
  const lightcontext = useContext(LightContext);

  return (
    <FlexContainer align="center">
      <Step step={lightcontext.step >= 1 ? 0 : 1}>1</Step>
      <ProgressLine step={lightcontext.step > 1 ? 0 : 1} />
      <Step step={lightcontext.step >= 2 ? 0 : 1}>2</Step>
      <ProgressLine step={lightcontext.step > 2 ? 0 : 1} />
      <Step step={lightcontext.step >= 3 ? 0 : 1}>3</Step>
    </FlexContainer>
  );
}

const Step = styled.p`
  background: ${(props) => (props.step === 0 ? "#91a7ff" : "#ced4da")};
  color: ${(props) => (props.step === 0 ? "#364fc7" : "#fff")};
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  border-radius: 50%;
`;

const ProgressLine = styled.span`
  background-color: ${(props) => (props.step === 0 ? "#91a7ff" : "#ced4da")};
  height: 0.5rem;
  flex-grow: 1;
`;
