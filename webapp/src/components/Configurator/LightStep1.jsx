import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { useGLTF } from "@react-three/drei";
import { Button } from "../UI/Button";
import { DataContext } from "../../context/DataContextProvider";
import { Vector3 } from "three";
import { Tal } from "../Models/Tal";
import talWit from "../../assets/images/talwit.jpg";
import talBlack from "../../assets/images/talblack.jpg";

export const LightStep1 = () => {
  const lightContext = useContext(LightContext);

  const handleShape = (ev) => {
    switch (ev.target.dataset.model) {
      case "white":
        lightContext.setModel(<Tal />);
        break;
      case "black":
        lightContext.setModel(<Tal />);
        break;
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
          <LampImage src={talWit} data-model="white" />
        </ModelButton>
        <ModelButton onClick={handleShape}>
          <LampImage src={talBlack} data-model="black" />
        </ModelButton>
        {/* <ModelButton value={"square"} onClick={handleShape}>
          Square
        </ModelButton> */}
        {/* <button onClick={handleClick}>hello</button> */}
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

const SpanValue = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* background-color: blue; */
  z-index: 5;
`;
