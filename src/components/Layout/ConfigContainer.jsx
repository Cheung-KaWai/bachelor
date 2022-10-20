import React from "react";
import styled from "styled-components";

export const ConfigContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 25vw;
  height: 100vh;
  padding: 2rem;
`;
