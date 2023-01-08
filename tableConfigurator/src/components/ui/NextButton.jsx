import { colors } from "@/js/theme";
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
  margin-top: 2rem;
  color: ${colors.charcoal};
  text-decoration: underline;
`;
