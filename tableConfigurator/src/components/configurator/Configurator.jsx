import { getData } from "@/js/firebase";
import { colors } from "@/js/theme";
import { useConfigurationStore } from "@/store/data";
import React from "react";
import { Matrix4, Quaternion, Vector3 } from "three";
import { Container } from "../layouts/Container";

export const Configurator = () => {
  const update = useConfigurationStore((state) => state.update);

  const handleNewRoom = async (id) => {
    const data = await getData(id);

    const transform = data.walls[0].transform;
    const matrix = new Matrix4();
    matrix.set(...transform);
    let translation = new Vector3();
    let rotation = new Quaternion();
    let scaleMatrix = new Vector3();
    matrix.transpose().decompose(translation, rotation, scaleMatrix);

    update("floorRotation", rotation);

    update("room", data);
    update("check", data.walls.length * 5);
  };

  return (
    <Container bgColor={colors.veryLightCreme} width={"40vw"} height={"100vh"}>
      <button onClick={() => handleNewRoom("wCCz3UBJxB5lqnqousUo")}>Option 1</button>
      <button onClick={() => handleNewRoom("8Z6cYjUgFUDDcyzZRC9H")}>Option 2</button>
    </Container>
  );
};
