import React from "react";
import styled from "styled-components";

export const ConfigTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;
