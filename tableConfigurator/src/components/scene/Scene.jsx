import { getData } from "@/js/firebase";
import { colors } from "@/js/theme";
import { useConfigurationStore } from "@/store/data";
import { Center, OrbitControls } from "@react-three/drei";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Container } from "../layouts/Container";
import { ListWalls } from "./walls/ListWalls";
import { Floor } from "./floor/Floor";
import { Matrix4, Quaternion, Vector3 } from "three";
import { ListDoors } from "./doors/ListDoors";
import { ListObjects } from "./objects/ListObjects";

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
        <ListDoors />
        <ListObjects />
        {/* {sortedPoints.map((point, index) => (
          <mesh position={[point.x, point.y, point.z]} scale={[0.2, 0.2, 0.2]} key={index}>
            <boxGeometry />
            <meshBasicMaterial color={selected === index ? "#f00" : "#0f0"} />
          </mesh>
        ))} */}
        <Floor />
      </Canvas>
    </Container>
  );
};

const generateRoom = async (update) => {
  const data = await getData("wCCz3UBJxB5lqnqousUo");

  const transform = data.walls[0].transform;
  const matrix = new Matrix4();
  matrix.set(...transform);
  let translation = new Vector3();
  let rotation = new Quaternion();
  let scaleMatrix = new Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);
  update("floorHeight", data.walls[0].dimensions[1] / 2);
  update("floorYPosition", translation.y);
  update("floorRotation", rotation);
  update("room", data);
  update("check", data.walls.length * 5);
};
