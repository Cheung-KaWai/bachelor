import React from "react";
import styled from "styled-components";

export const Margin = ({ height }) => {
  return <Spacing height={height} />;
};

const Spacing = styled.span`
  width: 1rem;
  display: block;
  height: ${(props) => props.height};
`;
