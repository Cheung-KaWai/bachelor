import { fixtextures } from "@/lib/functions";
import { useTexture } from "@react-three/drei";

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
  fixtextures(mapTextures);
  fixtextures(normalTextures);

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
