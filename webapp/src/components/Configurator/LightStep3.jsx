import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "three";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep3 = () => {
  const lightContext = useContext(LightContext);

  const handleClick = (ev) => {
    const color = ev.target.value;
    const colorTexture = ev.target.dataset.texture;
    const tempColor = new Color(color);

    lightContext.lightRef.current.color = tempColor;
    lightContext.setCurrentTexture(lightContext.lampTextures[colorTexture]);
    // lightContext.pointRef.current.color = tempColor;
  };

  return (
    <>
      <ConfigTitle title={"Light Temperature"} />
      <ColorContainer>
        <ColorButton value="#ffd6aa" data-texture="blackTexture2700k" onClick={handleClick}>
          2700k
        </ColorButton>
        <ColorButton value="#fff1e0" data-texture="blackTexture3000k" onClick={handleClick}>
          3000k
        </ColorButton>
        <ColorButton value="#ffffff" data-texture="blackTexture4000k" onClick={handleClick}>
          4000k
        </ColorButton>
      </ColorContainer>
    </>
  );
};

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
