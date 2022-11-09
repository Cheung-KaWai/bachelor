import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContextProvider";
import { LightContext } from "../../context/LightContextProvider";
import { getData } from "../../js/firebase";
import { FlexContainer } from "../Layout/FlexContainer";
import * as THREE from "three";

import preset1 from "../../assets/images/preset.jpg";
import preset2 from "../../assets/images/preset2.jpg";

export const GenerateRoom = () => {
  const context = useContext(DataContext);
  const lightContext = useContext(LightContext);

  const [roomId, setRoomId] = useState("wCCz3UBJxB5lqnqousUo");
  const [err, setErr] = useState("");

  const handlePreset = async (ev) => {
    const data = await getData(ev.target.dataset.id);

    context.setRoomData(data);
    context.setRerender((prev) => !prev);

    const transform = data.walls[0].transform;
    const matrix = new THREE.Matrix4();
    matrix.set(...transform);
    let translation = new THREE.Vector3();
    let rotation = new THREE.Quaternion();
    let scaleMatrix = new THREE.Vector3();
    matrix.transpose().decompose(translation, rotation, scaleMatrix);

    const dimensions = data.walls[0].dimensions;
    lightContext.setHeight(dimensions[1] / 2);
    lightContext.setRotation(rotation);
  };

  const handleGeneration = async () => {
    if (!roomId) return;
    const data = await getData(roomId);

    if (typeof data === "string") {
      setErr(data);
    } else {
      context.setRoomData(data);
      context.setRerender((prev) => !prev);

      const transform = data.walls[0].transform;
      const matrix = new THREE.Matrix4();
      matrix.set(...transform);
      let translation = new THREE.Vector3();
      let rotation = new THREE.Quaternion();
      let scaleMatrix = new THREE.Vector3();
      matrix.transpose().decompose(translation, rotation, scaleMatrix);

      const dimensions = data.walls[0].dimensions;
      lightContext.setHeight(dimensions[1] / 2);
      lightContext.setRotation(rotation);
    }
  };

  useEffect(() => {
    handleGeneration();
  }, []);

  return (
    <>
      <InputContainer>
        <FlexContainer align="center" justify="space-between">
          <Label>Generate My Room</Label>
          <ErrorMessage>{err}</ErrorMessage>
        </FlexContainer>
        <Input
          placeholder="Room ID: wCCz3UBJxB5lqnqousUo"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          onFocus={() => setErr("")}
        />
        <Generate onClick={handleGeneration}>Generate Room</Generate>
        <Label>Preset Rooms</Label>
        <RoomsContainer>
          <ImageContainer>
            <ImageRoom
              src={preset1}
              data-id="wCCz3UBJxB5lqnqousUo"
              onClick={(ev) => {
                handlePreset(ev);
              }}
            />
          </ImageContainer>
          <ImageContainer>
            <ImageRoom
              src={preset2}
              data-id="8Z6cYjUgFUDDcyzZRC9H"
              onClick={(ev) => {
                handlePreset(ev);
              }}
            />
          </ImageContainer>
        </RoomsContainer>

        {/* <Generate onClick={handleNextStep}>Configure light</Generate> */}
      </InputContainer>
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.label`
  display: block;
  font-size: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  ::placeholder {
    color: #dee2e6;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;

const Generate = styled.button`
  margin-top: 1rem;
  margin-bottom: 3rem;
  background-color: #91a7ff;
  height: 5rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  color: #364fc7;
  text-align: center;
  transition: all 0.3s ease-out;
  :hover {
    transform: scale(1.01);
  }
`;

const RoomsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  width: 20rem;
  height: 20rem;
  transition: all 0.3s ease-out;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0);
  border-radius: 0.5rem;
  :hover {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  }
  display: flex;
  align-items: center;
`;

const ImageRoom = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`;
