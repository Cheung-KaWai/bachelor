import { useTexture } from "@react-three/drei";
import { RepeatWrapping, sRGBEncoding } from "three";

export const legData = [
  {
    id: "metal1",
    map: "/assets/textures/legs/metal1/Metal028_2K_Color.jpg",
    normal: "/assets/textures/legs/metal1/Metal028_2K_NormalDX.jpg",
    roughness: "/assets/textures/legs/metal1/Metal028_2K_Roughness.jpg",
    metalnessMap: "/assets/textures/legs/metal1/Metal028_2K_Metalness.jpg",
    preview: "/assets/textures/legs/metal1/Metal028_PREVIEW.jpg",
    name: "Metal 1",
  },
  {
    id: "metal2",
    map: "/assets/textures/legs/metal2/Metal030_2K_Color.jpg",
    normal: "/assets/textures/legs/metal2/Metal030_2K_NormalDX.jpg",
    roughness: "/assets/textures/legs/metal2/Metal030_2K_Roughness.jpg",
    metalnessMap: "/assets/textures/legs/metal2/Metal030_2K_Metalness.jpg",
    preview: "/assets/textures/legs/metal2/Metal030_PREVIEW.jpg",
    name: "Metal 2",
  },
  {
    id: "metal3",
    map: "/assets/textures/legs/metal3/Metal011_2K_Color.jpg",
    normal: "/assets/textures/legs/metal3/Metal011_2K_NormalDX.jpg",
    roughness: "/assets/textures/legs/metal3/Metal011_2K_Roughness.jpg",
    metalnessMap: "/assets/textures/legs/metal3/Metal011_2K_Metalness.jpg",
    preview: "/assets/textures/legs/metal3/Metal011_PREVIEW.jpg",
    name: "Metal 3",
  },
];

export const LegMaterial = () => {
  const mapData = legData.map((wall) => wall.map);
  const normalData = legData.map((wall) => wall.normal);
  const roughness = legData.map((wall) => wall.roughness);
  const metalness = legData.map((wall) => wall.metalnessMap);

  const mapTextures = useTexture(mapData);
  const normalTextures = useTexture(normalData);
  const roughnessTextures = useTexture(roughness);
  const metalnessTextures = useTexture(metalness);

  fixTexture(mapTextures, 1, 1);
  fixTexture(normalTextures, 1, 1);
  fixTexture(roughnessTextures, 1, 1);
  fixTexture(metalnessTextures, 1, 1);

  const [map1, map2, map3] = mapTextures;
  const [normal1, normal2, normal3] = normalTextures;
  const [roughness1, roughness2, roughness3] = roughnessTextures;
  const [metalness1, metalness2, metalness3] = metalnessTextures;
  const maps = {
    Metal1: {
      map: map1,
      normalMap: normal1,
      roughnessMap: roughness1,
      metalnessMap: metalness1,
      metalness: 1,
      roughness: 0,
    },
    Metal2: {
      map: map2,
      normalMap: normal2,
      roughnessMap: roughness2,
      metalnessMap: metalness2,
      metalness: 1,
      roughness: 0,
    },
    Metal3: {
      map: map3,
      normalMap: normal3,
      roughnessMap: roughness3,
      metalnessMap: metalness3,
      metalness: 1,
      roughness: 0,
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
