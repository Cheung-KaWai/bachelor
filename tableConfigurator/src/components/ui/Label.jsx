import React from "react";
import styled from "styled-components";

export const Label = ({ text, ...props }) => {
  return <LabelStyled {...props}>{text}</LabelStyled>;
};

const LabelStyled = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.weight};
`;
