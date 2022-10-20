import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContextProvider";
import { getData } from "../../js/firebase";
import { FlexContainer } from "../Layout/FlexContainer";

export const GenerateRoom = () => {
  const context = useContext(DataContext);

  const [roomId, setRoomId] = useState("");
  const [err, setErr] = useState("");

  const handleGeneration = async () => {
    const data = await getData(roomId);

    if (typeof data === "string") setErr(data);
    else context.setRoomData(data);
  };

  return (
    <InputContainer>
      <FlexContainer align="center" justify="space-between">
        <Label>Room ID</Label>
        <ErrorMessage>{err}</ErrorMessage>
      </FlexContainer>
      <Input placeholder="wCCz3UBJxB5lqnqousUo" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <Generate onClick={handleGeneration}>Generate Room</Generate>
    </InputContainer>
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
