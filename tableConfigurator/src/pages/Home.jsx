import { Configurator } from "@/components/configurator/Configurator";
import { Flex } from "@/components/layouts/Flex";
import { Scene } from "@/components/scene/Scene";
import React from "react";

export const Home = () => {
  return (
    <Flex>
      <Scene />
      <Configurator />
    </Flex>
  );
};
