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
      <AngleContainer>
        <button value="#ffd6aa" data-texture="blackTexture2700k" onClick={handleClick}>
          2700k
        </button>
        <button value="#fff1e0" data-texture="blackTexture3000k" onClick={handleClick}>
          3000k
        </button>
        <button value="#ffffff" data-texture="blackTexture4000k" onClick={handleClick}>
          4000k
        </button>
      </AngleContainer>
    </>
  );
};

const AngleContainer = styled.div``;
