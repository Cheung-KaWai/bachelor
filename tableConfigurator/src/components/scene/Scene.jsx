import { getData } from "@/js/firebase";
import { colors } from "@/js/theme";
import { useConfigurationStore } from "@/store/data";
import { Center, OrbitControls } from "@react-three/drei";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Container } from "../layouts/Container";
import { ListWalls } from "./walls/ListWalls";
import { Floor } from "./floor/Floor";

export const Scene = () => {
  const update = useConfigurationStore((state) => state.update);
  const sortedPoints = useConfigurationStore((state) => state.sortedPoints);
  const selected = 0;
  useEffect(() => {
    generateRoom(update);
  }, []);

  return (
    <Container bgColor={colors.creme} width={"60vw"} height={"100vh"}>
      <Canvas>
        <OrbitControls position={[0, 20, 0]} makeDefault />
        <ListWalls />
        {sortedPoints.map((point, index) => (
          <mesh position={[point.x, point.y, point.z]} scale={[0.2, 0.2, 0.2]}>
            <boxGeometry />
            <meshBasicMaterial color={selected === index ? "#f00" : "#0f0"} key={index} />
          </mesh>
        ))}
        <Floor />
      </Canvas>
    </Container>
  );
};

const generateRoom = async (update) => {
  const data = await getData("wCCz3UBJxB5lqnqousUo");
  update("room", data);
  update("check", data.walls.length * 5);
};
