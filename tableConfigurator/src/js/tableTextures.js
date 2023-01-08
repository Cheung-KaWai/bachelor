import { useTexture } from "@react-three/drei";
import { RepeatWrapping, sRGBEncoding } from "three";

export const tableData = [
  {
    id: "wood1",
    map: "/assets/textures/tables/wood1/Wood051_2K_Color.jpg",
    normal: "/assets/textures/tables/wood1/Wood051_2K_NormalDX.jpg",
    roughness: "/assets/textures/tables/wood1/Wood051_2K_Roughness.jpg",
    preview: "/assets/textures/tables/wood1/Wood051_PREVIEW.jpg",
    name: "Wood 1",
  },
  {
    id: "wood2",
    map: "/assets/textures/tables/wood2/Wood048_2K_Color.jpg",
    normal: "/assets/textures/tables/wood2/Wood048_2K_NormalDX.jpg",
    roughness: "/assets/textures/tables/wood2/Wood048_2K_Roughness.jpg",
    preview: "/assets/textures/tables/wood2/Wood048_PREVIEW.jpg",
    name: "Wood 2",
  },
  {
    id: "wood3",
    map: "/assets/textures/tables/wood3/Wood006_2K_Color.jpg",
    normal: "/assets/textures/tables/wood3/Wood006_2K_NormalDX.jpg",
    roughness: "/assets/textures/tables/wood3/Wood006_2K_Roughness.jpg",
    preview: "/assets/textures/tables/wood3/Wood006_PREVIEW.jpg",
    name: "Wood 3",
  },
];

export const TableMaterial = (length, width) => {
  const mapData = tableData.map((wall) => wall.map);
  const normalData = tableData.map((wall) => wall.normal);
  const roughness = tableData.map((wall) => wall.roughness);
  const mapTextures = useTexture(mapData);
  const normalTextures = useTexture(normalData);
  const roughnessTextures = useTexture(roughness);
  fixTexture(mapTextures, width, length);
  fixTexture(normalTextures, width, length);

  const [map1, map2, map3] = mapTextures;
  const [normal1, normal2, normal3] = normalTextures;
  const [roughness1, roughness2, roughness3] = roughnessTextures;
  const maps = {
    Wood1: {
      map: map1,
      normalMap: normal1,
      roughnessMap: roughness1,
    },
    Wood2: {
      map: map2,
      normalMap: normal2,
      roughnessMap: roughness2,
    },
    Wood3: {
      map: map3,
      normalMap: normal3,
      roughnessMap: roughness3,
    },
  };
  return maps;
};

const fixTexture = (arrayTextures, width, height) => {
  arrayTextures.map((texture) => {
    texture.flipY = false;
    texture.repeat.y = width;
    texture.repeat.x = height;
    texture.encoding = sRGBEncoding;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });
};
