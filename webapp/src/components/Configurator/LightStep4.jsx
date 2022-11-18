import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "three";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep4 = () => {
  const lightContext = useContext(LightContext);

  const handleClick = (ev) => {
    const color = ev.target.value;
    const colorTexture = ev.target.dataset.texture;
    const tempColor = new Color(color);

    lightContext.lightRef.current.color = tempColor;
    lightContext.setColorTemp(colorTexture);
    // lightContext.setCurrentTexture(lightContext.lampTextures[colorTexture]);
  };

  const handleModelColor = (ev) => {
    const color = ev.target.dataset.modelcolor;
    lightContext.setModelColor(color);
  };

  return (
    <>
      {/* <ConfigTitle title={"Model Color"} />
      <ColorContainer>
        <ColorButton value="#000" data-modelcolor="black" onClick={handleModelColor}>
          Black
        </ColorButton>
        <ColorButton value="#fff" data-modelcolor="white" onClick={handleModelColor}>
          White
        </ColorButton>
      </ColorContainer>
      <Spacer /> */}
      <ConfigTitle title={"Light Temperature"} />
      <ColorContainer>
        <ColorButton value="#ffd6aa" data-texture="blackTexture2700k" onClick={handleClick}>
          2700k
        </ColorButton>
        <ColorButton value="#fff1e0" data-texture="whiteTexture3000k" onClick={handleClick}>
          3000k
        </ColorButton>
        <ColorButton value="#ffffff" data-texture="blackTexture4000k" onClick={handleClick}>
          4000k
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
`;
