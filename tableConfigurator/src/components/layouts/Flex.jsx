import React from "react";
import styled from "styled-components";

export const Flex = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.wrap};
  overflow-x: ${(props) => props.overflowX};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding};
`;
