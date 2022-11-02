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

export const LightStep1 = () => {
  const lightContext = useContext(LightContext);
  const context = useContext(DataContext);

  const handleShape = (ev) => {
    switch (ev.target.value) {
      case "tal":
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
          <LampImage src={talWit} />
          <SpanValue value={"tal"}></SpanValue>
        </ModelButton>
        {/* <ModelButton value={"square"} onClick={handleShape}>
          Square
        </ModelButton> */}
        {/* <button onClick={handleClick}>hello</button> */}
      </ModelsContainer>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          lightContext.setStep(2);
        }}
      >
        Next step
      </Button>
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
  background-color: red;
  cursor: pointer;
`;

const LampImage = styled.img`
  object-fit: contain;
  height: 100%;
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
