import React from "react";
import styled from "styled-components";

export const Grid = ({ children, ...props }) => {
  return <GridStyled {...props}>{children}</GridStyled>;
};

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  gap: 1rem;
`;
