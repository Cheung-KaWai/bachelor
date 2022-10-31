import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "three";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep3 = () => {
  const lightContext = useContext(LightContext);

  const handleClick = (ev) => {
    const color = ev.target.value;
    const tempColor = new Color(color);
    console.log(lightContext.lightRef.current);
    lightContext.lightRef.current.color = tempColor;
    // lightContext.pointRef.current.color = tempColor;
  };

  return (
    <>
      <ConfigTitle title={"Light Temperature"} />
      <AngleContainer>
        <button value="#ffd6aa" onClick={handleClick}>
          2700k
        </button>
        <button value="#fff1e0" onClick={handleClick}>
          3000k
        </button>
        <button value="#ffffff" onClick={handleClick}>
          4000k
        </button>
      </AngleContainer>
    </>
  );
};

const AngleContainer = styled.div``;
