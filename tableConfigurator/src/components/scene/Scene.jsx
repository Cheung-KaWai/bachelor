import { getData } from "@/js/firebase";
import { colors } from "@/js/theme";
import { useConfigurationStore } from "@/store/data";
import { Center, OrbitControls } from "@react-three/drei";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Container } from "../layouts/Container";
import { ListWalls } from "./walls/ListWalls";

export const Scene = () => {
  const update = useConfigurationStore((state) => state.update);
  const floorPoints = useConfigurationStore((state) => state.floorPoints);

  useEffect(() => {
    update("floorPoints", []);
    generateRoom(update);
  }, []);

  return (
    <Container bgColor={colors.creme} width={"60vw"} height={"100vh"}>
      <Canvas>
        <OrbitControls />
        <Center>
          <ListWalls />
        </Center>
        {floorPoints.map((point) => (
          <mesh position={[point.x, point.y, point.z]} scale={[0.2, 0.2, 0.2]}>
            <boxGeometry />
            <meshBasicMaterial color={"#f00"} />
          </mesh>
        ))}
      </Canvas>
    </Container>
  );
};

const generateRoom = async (update) => {
  const data = await getData("wCCz3UBJxB5lqnqousUo");
  update("room", data);
};
