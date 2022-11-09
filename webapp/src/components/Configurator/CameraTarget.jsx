import React from "react";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Vector3 } from "three";
import { DataContext } from "../../context/DataContextProvider";
import { LightContext } from "../../context/LightContextProvider";

export const CameraTarget = () => {
  const lightContext = useContext(LightContext);
  const context = useContext(DataContext);

  const [selected, setSelected] = useState(1);

  const handleLampView = () => {
    const target = lightContext.lampRef.current.position;

    if (!target) return;
    setSelected(0);
    context.setCameraPosition({
      data: [
        target.x + 0.75 + Math.random() * 0.01,
        target.y + lightContext.lampHeight / 2,
        target.z + 0.75 + Math.random() * 0.01,
      ],
    });
    lightContext.orbitRef.current.target = new Vector3(target.x, target.y + lightContext.lampHeight / 2, target.z);
  };

  const handleTopView = () => {
    const target = lightContext.lampRef.current.position;
    if (!target) return;
    setSelected(1);
    context.setCameraPosition({ data: [0, 20 + Math.random() * 0.01, 0] });
    lightContext.orbitRef.current.target = new Vector3(target.x, target.y + lightContext.lampHeight / 2, target.z);
  };

  return (
    <CameraViewContainer>
      <Title>Camera View</Title>
      <ButtonContainer>
        <Button onClick={handleLampView} selected={selected === 0}>
          Lamp View
        </Button>
        <Button onClick={handleTopView} selected={selected === 1}>
          Top View
        </Button>
      </ButtonContainer>
    </CameraViewContainer>
  );
};

const Title = styled.p`
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#ced4da" : "#fff")};
  color: ${(props) => (props.selected ? "#868e96" : "#868e96")};
  border: 1px solid #ced4da;
  border-radius: 0.3rem;
  padding: 1rem;
  text-align: center;
  flex: 1;
`;

const CameraViewContainer = styled.div`
  margin-top: 3rem;
`;
