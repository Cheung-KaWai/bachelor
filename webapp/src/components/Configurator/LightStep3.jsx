import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "three";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep3 = () => {
  const lightContext = useContext(LightContext);

  const handleClick = (ev) => {
    const colorTexture = ev.target.dataset.texture;
    lightContext.setCurrentTexture(lightContext.lampTextures[colorTexture]);
  };

  return (
    <>
      <ConfigTitle title={"Color Model"} />
      <ColorContainer>
        <ColorButton value="#28282B" data-texture="blackMaterial" onClick={handleClick}>
          Black
        </ColorButton>
        <ColorButton value="#ffffff" data-texture="whiteMaterial" onClick={handleClick}>
          White
        </ColorButton>
      </ColorContainer>
    </>
  );
};

const Spacer = styled.span`
  margin-top: 5rem;
  display: block;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ColorButton = styled.button`
  height: 10rem;
  width: 10rem;
  text-align: center;
  background-color: ${(props) => props.value};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  color: gray;
`;
