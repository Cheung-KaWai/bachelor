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
import { Light } from "./lights/Light";
import { handleNewRoom } from "@/lib/functions";

export const Scene = () => {
  const update = useConfigurationStore((state) => state.update);
  useEffect(() => {
    handleNewRoom("wCCz3UBJxB5lqnqousUo", update, getData);
  }, []);

  return (
    <Container bgColor={colors.creme} width={"60vw"} height={"100vh"}>
      <Canvas>
        <OrbitControls position={[0, 20, 0]} makeDefault />
        <Light />
        <ListWalls />
        <ListDoors />
        <ListObjects />

        <Floor />
      </Canvas>
    </Container>
  );
};

/* {sortedPoints.map((point, index) => (
          <mesh position={[point.x, point.y, point.z]} scale={[0.2, 0.2, 0.2]} key={index}>
            <boxGeometry />
            <meshBasicMaterial color={selected === index ? "#f00" : "#0f0"} />
          </mesh>
        ))} */
