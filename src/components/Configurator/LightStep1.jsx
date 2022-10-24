import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { useGLTF } from "@react-three/drei";
import RoundLamp from "../Models/RoundLamp";
import SquareLamp from "../Models/SquareLamp";
import { Button } from "../UI/Button";

export const LightStep1 = () => {
  const lightContext = useContext(LightContext);

  const handleShape = (ev) => {
    switch (ev.target.value) {
      case "round":
        lightContext.setModel(<RoundLamp />);
        break;
      default:
        lightContext.setModel(<SquareLamp />);
    }
  };

  const handleClick = () => {
    console.log(lightContext.lampRef);
  };

  return (
    <>
      <ConfigTitle title={"Choose Model"} />
      <ModelsContainer>
        <ModelButton value={"round"} onClick={handleShape}>
          Round
        </ModelButton>
        <ModelButton value={"square"} onClick={handleShape}>
          Square
        </ModelButton>
        <button onClick={handleClick}>hello</button>
      </ModelsContainer>
      <Button onClick={() => lightContext.setStep(2)}>Next step</Button>
    </>
  );
};

const ModelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ModelButton = styled.button`
  padding: 1rem;
`;
