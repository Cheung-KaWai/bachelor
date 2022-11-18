import React from "react";
import styled from "styled-components";

export const FlexContainer = ({ children, direction, gap, justify, align }) => {
  return (
    <Container direction={direction} gap={gap} justify={justify} align={align}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction ?? "row"};
  gap: ${(props) => props.gap ?? 0};
  justify-content: ${(props) => props.justify ?? "start"};
  align-items: ${(props) => props.align ?? "start"};
`;
