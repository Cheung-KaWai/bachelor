import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigContainer } from "../Layout/ConfigContainer";
import { Button } from "../UI/Button";
import { CameraTarget } from "./CameraTarget";
import { GenerateRoom } from "./GenerateRoom";
import { LightStep1 } from "./LightStep1";
import { LightStep2 } from "./LightStep2";
import { LightStep3 } from "./LightStep3";
import Progress from "./Progress";

export const Configurator = () => {
  const lightContext = useContext(LightContext);

  const configureLight = (
    <>
      <LightStep1 />
      {/* <LightStep2 /> */}
      <LightStep3 />
    </>
  );

  const configureStep = () => {
    if (lightContext) {
      switch (lightContext.step) {
        case 1:
          return <GenerateRoom />;
        case 2:
          return <LightStep1 />;
        case 3:
          return <LightStep3 />;
        default:
          return <GenerateRoom />;
      }
    }
  };

  return (
    <ConfigContainer>
      <Progress />
      {lightContext && lightContext.step > 1 && <CameraTarget />}
      <StepContainer>{configureStep()}</StepContainer>
      {lightContext && lightContext.step > 1 && (
        <BackButton
          onClick={() => {
            lightContext.setStep((prev) => {
              return prev - 1;
            });
          }}
        >
          Back
        </BackButton>
      )}
      {lightContext && lightContext.step < 3 && (
        <NextButton
          step={lightContext.step}
          onClick={() => {
            lightContext.setStep((prev) => {
              return prev + 1;
            });
          }}
        >
          Next Step
        </NextButton>
      )}
    </ConfigContainer>
  );
};

const StepContainer = styled.div`
  margin-top: 3rem;
`;

const NextButton = styled(Button)`
  margin-top: ${(props) => (props.step == 1 ? "auto" : 0)};
`;

const BackButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 1px solid #91a7ff;
  color: #91a7ff;
`;
