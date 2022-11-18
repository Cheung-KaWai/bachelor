import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick, className }) => {
  return (
    <ButtonComp onClick={onClick} className={className}>
      {children}
    </ButtonComp>
  );
};

const ButtonComp = styled.button`
  margin-top: 1rem;
  background-color: #91a7ff;
  height: 5rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  width: 100%;
  color: #364fc7;
  text-align: center;
  transition: all 0.3s ease-out;
  :hover {
    transform: scale(1.01);
  }
`;
