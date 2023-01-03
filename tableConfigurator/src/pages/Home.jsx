import { Configurator } from "@/components/configurator/Configurator";
import { Flex } from "@/components/layouts/Flex";
import { Scene } from "@/components/scene/Scene";
import { TableConfigurator } from "@/components/tableConfigurator/TableConfigurator";
import { useRoomConfiguration, useTableconfiguration } from "@/store/data";
import React from "react";

export const Home = () => {
  const showTableconfiguration = useTableconfiguration(
    (store) => store.showTableconfiguration
  );

  const showConfiguration = () => {
    if (!showTableconfiguration) {
      return <Configurator />;
    } else {
      return <TableConfigurator />;
    }
  };

  return (
    <Flex>
      <Scene />
      {showConfiguration()}
    </Flex>
  );
};
