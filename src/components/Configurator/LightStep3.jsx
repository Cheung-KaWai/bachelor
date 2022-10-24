import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "three";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep3 = () => {
  const lightContext = useContext(LightContext);

  const handleClick = (ev) => {
    const color = ev.target.value;
    lightContext.lightRef.current.color = new Color(color);
  };

  return (
    <>
      <ConfigTitle title={"Light Temperature"} />
      <AngleContainer>
        <button value="#ffa957" onClick={handleClick}>
          2700k
        </button>
        <button value="#ffb46b" onClick={handleClick}>
          3000k
        </button>
        <button value="#ffd1a3" onClick={handleClick}>
          4000k
        </button>
      </AngleContainer>
    </>
  );
};

const AngleContainer = styled.div``;
