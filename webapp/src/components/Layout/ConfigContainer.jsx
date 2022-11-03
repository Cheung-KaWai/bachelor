import React from "react";
import styled from "styled-components";

export const ConfigContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 30vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
