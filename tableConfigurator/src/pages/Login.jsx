import { Container } from "@/components/layouts/Container";
import { Flex } from "@/components/layouts/Flex";
import { login } from "@/js/firebase";
import { colors } from "@/js/theme";
import { useUserConfiguration } from "@/store/data";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const update = useUserConfiguration((store) => store.update);
  const navigate = useNavigate();
  const onSubmit = () => {
    setError("");
    login(email, password)
      .then((data) => {
        update("user", data);
        navigate("/home");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Container width={"100vw"} height={"100vh"} bgColor={colors.creme}>
      <Flex
        direction={"column"}
        width={"100vw"}
        height={"100vh"}
        justify={"center"}
        align={"center"}
      >
        <Error>{error}</Error>
        <InputLabel htlmFor={"email"}>Email</InputLabel>
        <InputField
          name={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <InputLabel htmlFor={"password"}>Password</InputLabel>
        <InputField
          name={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={password}
        />
        <SubmitButton onClick={onSubmit} type={"button"}>
          Login
        </SubmitButton>
      </Flex>
    </Container>
  );
};

const Error = styled.p`
  color: red;
  width: 25rem;
`;

const InputField = styled.input`
  width: 25rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  height: 4rem;
  border-radius: 3px;
  font-size: 1.4rem;
`;

const InputLabel = styled.label`
  width: 25rem;
  margin-top: 2rem;
`;

const SubmitButton = styled.button`
  margin-top: 2rem;
`;
