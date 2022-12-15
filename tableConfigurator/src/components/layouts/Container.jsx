import React from "react";
import styled from "styled-components";

export const Container = ({ children, ...props }) => {
  return <ContainerDiv {...props}>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  box-shadow: ${(props) => props.shadow};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => props.cursor};
  overflow-y: ${(props) => props.overflowY};
  border: ${(props) => props.border};
`;
