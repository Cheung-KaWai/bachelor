import React from "react";
import styled from "styled-components";

export const FlexContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction ?? "row"};
  gap: ${(props) => props.gap ?? 0};
`;
