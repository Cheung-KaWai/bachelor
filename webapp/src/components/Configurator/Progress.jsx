import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { FlexContainer } from "../Layout/FlexContainer";

export default function Progress() {
  const lightcontext = useContext(LightContext);

  return (
    <FlexContainer align="center">
      <ProgressContainer>
        <Step step={lightcontext.step >= 1 ? 0 : 1} stepLabel="Room">
          1
        </Step>
        <ProgressLine step={lightcontext.step > 1 ? 0 : 1} />
        <Step step={lightcontext.step >= 2 ? 0 : 1} stepLabel="Model">
          2
        </Step>
        <ProgressLine step={lightcontext.step > 2 ? 0 : 1} />
        <Step step={lightcontext.step >= 3 ? 0 : 1} stepLabel="Color">
          3
        </Step>
        <ProgressLine step={lightcontext.step > 3 ? 0 : 1} />
        <Step step={lightcontext.step >= 4 ? 0 : 1} stepLabel="Light">
          4
        </Step>
      </ProgressContainer>
    </FlexContainer>
  );
}

const ProgressContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 3rem;
`;

const Step = styled.p`
  background: ${(props) => (props.step === 0 ? "#91a7ff" : "#ced4da")};
  color: ${(props) => (props.step === 0 ? "#364fc7" : "#fff")};
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  border-radius: 50%;
  position: relative;

  ::after {
    content: "${(props) => props.stepLabel}";
    display: block;
    position: absolute;
    color: ${(props) => (props.step === 0 ? "#91a7ff" : "#ced4da")};
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ProgressLine = styled.span`
  background-color: ${(props) => (props.step === 0 ? "#91a7ff" : "#ced4da")};
  height: 0.5rem;
  flex-grow: 1;
`;
