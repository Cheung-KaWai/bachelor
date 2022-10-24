import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep1 = () => {
  const lightContext = useContext(LightContext);

  const handleShape = (ev) => {
    lightContext.setModel(ev.target.value);
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
      </ModelsContainer>
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
