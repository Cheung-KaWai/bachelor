import React from "react";
import styled from "styled-components";

export const GenerateRoom = () => {
  return (
    <InputContainer>
      <Label>Room ID</Label>
      <Input placeholder="wCCz3UBJxB5lqnqousUo" />
      <Generate>Generate Room</Generate>
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
