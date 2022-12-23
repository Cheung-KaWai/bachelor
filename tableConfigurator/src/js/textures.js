import { fixtextures } from "@/lib/functions";
import { useConfigurationStore, useRoomConfiguration } from "@/store/data";
import { useTexture } from "@react-three/drei";
import { Euler } from "three";

const wallsData = [
  {
    id: "plaster",
    map: "/assets/textures/walls/plaster/map.jpg",
    normal: "/assets/textures/walls/plaster/normal.jpg",
    name: "Plaster",
  },
];

export const WallMaterial = () => {
  const mapData = wallsData.map((wall) => wall.map);
  const normalData = wallsData.map((wall) => wall.normal);
  const color = useRoomConfiguration((state) => state.wall);
  const mapTextures = useTexture(mapData);
  const normalTextures = useTexture(normalData);
  fixtextures(mapTextures, 6);
  fixtextures(normalTextures, 6);

  const [plasterMap] = mapTextures;
  const [plasterNormal] = normalTextures;
  const maps = {
    plaster: {
      map: plasterMap,
      envMapIntensity: 2.8,
      color: color,
    },
  };
  return maps;
};

export const floorData = [
  {
    id: "hooverstone",
    map: "/assets/textures/floors/hooverstone/map.jpg",
    normal: "/assets/textures/floors/hooverstone/normal.jpg",
    roughness: "/assets/textures/floors/hooverstone/roughness.jpg",
  },
  {
    id: "nublo",
    map: "/assets/textures/floors/nublo/map.jpg",
    normal: "/assets/textures/floors/nublo/normal.jpg",
    roughness: "/assets/textures/floors/nublo/roughness.jpg",
  },
  {
    id: "shermanoak",
    map: "/assets/textures/floors/shermanoak/map.jpg",
    normal: "/assets/textures/floors/shermanoak/normal.jpg",
    roughness: "/assets/textures/floors/shermanoak/roughness.jpg",
  },
  {
    id: "volterra",
    map: "/assets/textures/floors/volterra/map.jpg",
    normal: "/assets/textures/floors/volterra/normal.jpg",
    roughness: "/assets/textures/floors/volterra/roughness.jpg",
  },
];

export const FloorMaterial = () => {
  const mapData = floorData.map((floor) => floor.map);
  const normalData = floorData.map((floor) => floor.normal);
  const roughnessData = floorData.map((floor) => floor.roughness);

  const mapTextures = useTexture(mapData);
  const normalTextures = useTexture(normalData);
  const roughnesstextures = useTexture(roughnessData);

  const rotation = useConfigurationStore((state) => state.floorRotation);
  if (rotation) {
    const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(rotation);
    fixtextures(mapTextures, 0.3, rotatie.y);
    fixtextures(normalTextures, 0.3, rotatie.y);
    fixtextures(roughnesstextures, 0.3, rotatie.y);
  } else {
    fixtextures(mapTextures, 0.3);
    fixtextures(normalTextures, 0.3);
    fixtextures(roughnesstextures, 0.3);
  }

  const [hooverstoneMap, nubloMap, shermanoakMap, volterraMap] = mapTextures;
  const [hooverstoneNormal, nubloNormal, shermanoakNormal, volterraNormal] = normalTextures;
  const [hooverstoneRoughness, nubloRoughness, shermanoakRoughness, volterraRoughness] = roughnesstextures;

  const maps = {
    hooverstone: {
      map: hooverstoneMap,
      envMapIntensity: 0.5,
      normalMap: hooverstoneNormal,
      // roughnessMap: hooverstoneRoughness,
      roughness: 2,
    },
    nublo: {
      map: nubloMap,
      envMapIntensity: 0.5,
      normalMap: nubloNormal,
      // roughnessMap: nubloRoughness,
      roughness: 2,
    },
    shermanoak: {
      map: shermanoakMap,
      envMapIntensity: 0.5,
      normalMap: shermanoakNormal,
      // roughnessMap: shermanoakRoughness,
      roughness: 2,
    },
    volterra: {
      map: volterraMap,
      envMapIntensity: 0.5,
      normalMap: volterraNormal,
      // roughnessMap: volterraRoughness,
      roughness: 2,
    },
  };

  return maps;
};
