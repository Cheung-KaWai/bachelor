import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../../context/LightContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LightStep2 = () => {
  const lightContext = useContext(LightContext);

  const handleClick = (ev) => {
    const angle = ev.target.value;
    lightContext.lightRef.current.angle = (angle * Math.PI) / 180;
    console.log(lightContext.lightRef);
  };

  return (
    <>
      <ConfigTitle title={"Lamp Beam Angle"} />
      <AngleContainer>
        <button value={15} onClick={handleClick}>
          15°
        </button>
        <button value={35} onClick={handleClick}>
          35°
        </button>
        <button value={60} onClick={handleClick}>
          60°
        </button>
      </AngleContainer>
    </>
  );
};

const AngleContainer = styled.div``;
