import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <BaseContainer>{children}</BaseContainer>;
};

const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
