import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { Tal } from "../Models/Tal";
import talBlack from "../../assets/images/talblack.jpg";

export const LightStep1 = () => {
  const lightContext = useContext(LightContext);

  const handleShape = (ev) => {
    switch (ev.target.dataset.model) {
      // case "kombo":
      //   lightContext.setModel(<Tal />);
      //   break;
      default:
        lightContext.setModel(<Tal />);
    }
  };

  // const handleClick = () => {
  //   let locatie = new Vector3();

  //   const test = context.groupRef.current.children[0];
  //   test.getWorldPosition(locatie);
  //   console.log(locatie);
  // };

  return (
    <>
      <ConfigTitle title={"Choose Model"} />
      <ModelsContainer>
        <ModelButton onClick={handleShape}>
          <LampImage src={talBlack} data-model="kombo" />
        </ModelButton>
      </ModelsContainer>
    </>
  );
};

const ModelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 1rem;
`;

const ModelButton = styled.div`
  width: 20rem;
  height: 20rem;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0);
  border-radius: 0.5rem;
  :hover {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  }
`;

const LampImage = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;
