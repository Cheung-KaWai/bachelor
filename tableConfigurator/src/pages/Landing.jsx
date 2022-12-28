import { Container } from "@/components/layouts/Container";
import { Flex } from "@/components/layouts/Flex";
import { colors } from "@/js/theme";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Landing = () => {
  return (
    <Container bgColor={colors.creme} width={"100vw"} height={"100vh"}>
      <Flex width={"100vw"} height={"100vh"} justify={"center"} align={"center"} gap={"1rem"}>
        <OptionButton to={"/login"}>
          <OptionText>Login with account</OptionText>
        </OptionButton>
        <OptionButton to={"/home"}>
          <OptionText>Go further without account</OptionText>
        </OptionButton>
      </Flex>
    </Container>
  );
};

const OptionButton = styled(Link)`
  width: 25rem;
  height: 15rem;
  background-color: ${colors.veryLightCreme};
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const OptionText = styled.p`
  text-align: center;
`;
