import React from "react";
import styled from "styled-components";

export const NextButton = ({ text, ...props }) => {
  return (
    <Button type="button" {...props}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  background-color: red;
`;
