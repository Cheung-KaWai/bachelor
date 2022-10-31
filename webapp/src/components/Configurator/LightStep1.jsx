import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { useGLTF } from "@react-three/drei";
import RoundLamp from "../Models/RoundLamp";
import SquareLamp from "../Models/SquareLamp";
import { Button } from "../UI/Button";
import { DataContext } from "../../context/DataContextProvider";
import { Vector3 } from "three";
import { Tal } from "../Models/Tal";

export const LightStep1 = () => {
  const lightContext = useContext(LightContext);
  const context = useContext(DataContext);

  const handleShape = (ev) => {
    switch (ev.target.value) {
      case "tal":
        console.log("hello");
        lightContext.setModel(<Tal />);
        break;
      default:
        lightContext.setModel(<SquareLamp />);
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
        <ModelButton value={"tal"} onClick={handleShape}>
          Round
        </ModelButton>
        {/* <ModelButton value={"square"} onClick={handleShape}>
          Square
        </ModelButton> */}
        {/* <button onClick={handleClick}>hello</button> */}
      </ModelsContainer>
      {/* <Button
        onClick={(ev) => {
          ev.preventDefault();
          lightContext.setStep(2);
        }}
      >
        Next step
      </Button> */}
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
