import { Container } from "@/components/layouts/Container";
import { Flex } from "@/components/layouts/Flex";
import { colors } from "@/js/theme";
import React from "react";
import styled from "styled-components";

export const Login = () => {
  return (
    <Container width={"100vw"} height={"100vh"} bgColor={colors.creme}>
      <Flex direction={"column"} width={"100vw"} height={"100vh"} justify={"center"} align={"center"}>
        <InputLabel>Email</InputLabel>
        <InputField />
        <InputLabel>Password</InputLabel>
        <InputField />
      </Flex>
    </Container>
  );
};

const InputField = styled.input`
  width: 20rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const InputLabel = styled.label`
  width: 20rem;
`;
