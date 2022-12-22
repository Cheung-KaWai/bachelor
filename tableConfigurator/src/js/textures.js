import { fixtextures } from "@/lib/functions";
import { useConfigurationStore } from "@/store/data";
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

  const mapTextures = useTexture(mapData);
  const normalTextures = useTexture(normalData);
  fixtextures(mapTextures, 6);
  fixtextures(normalTextures, 6);

  const [plasterMap] = mapTextures;
  const [plasterNormal] = normalTextures;
  const maps = {
    plaster: {
      map: plasterMap,
      // normalMap: plasterNormal,
    },
  };
  return maps;
};

const floorData = [
  {
    id: "hooverstone",
    map: "/assets/textures/floors/hooverstone/map.jpg",
  },
  {
    id: "nublo",
    map: "/assets/textures/floors/nublo/map.jpg",
  },
  {
    id: "shermanoak",
    map: "/assets/textures/floors/shermanoak/map.jpg",
  },
  {
    id: "volterra",
    map: "/assets/textures/floors/volterra/map.jpg",
  },
];

export const FloorMaterial = () => {
  const mapData = floorData.map((floor) => floor.map);
  // const normalData = floorData.map((floor) => floor.normal);
  // const roughnessData = floorData.map((floor) => floor.roughness);

  const mapTextures = useTexture(mapData);
  // const normalTextures = useTexture(normalData);
  // const roughnesstextures = useTexture(roughnessData);
  const rotation = useConfigurationStore((state) => state.floorRotation);
  const rotatie = new Euler(0, 0, 0, "YXZ").setFromQuaternion(rotation);
  fixtextures(mapTextures, 0.3, rotatie.y);
  // fixtextures(normalTextures, 0.5, Math.Pi / 2);
  // fixtextures(roughnesstextures, 0.4);

  const [hooverstoneMap, nubloMap, shermanoakMap, volterraMap] = mapTextures;
  // const [concreteNormal, woodNormal] = normalTextures;
  // const [concreteRoughness] = roughnesstextures;

  const maps = {
    hooverstone: {
      map: hooverstoneMap,
      envMapIntensity: 0.5,
      // normalMap: concreteNormal,
      // roughnessMap: concreteRoughness,
    },
    nublo: {
      map: nubloMap,
      envMapIntensity: 0.5,
      // normalMap: woodNormal,
    },
    shermanoak: {
      map: shermanoakMap,
      envMapIntensity: 0.5,
      // normalMap: woodNormal,
    },
    volterra: {
      map: volterraMap,
      envMapIntensity: 0.5,
      // normalMap: woodNormal,
    },
  };

  return maps;
};
