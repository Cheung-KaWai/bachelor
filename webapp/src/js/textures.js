import color1 from "../assets/textures/WoodFloor051_2K_Color.jpg";
import normal1 from "../assets/textures/WoodFloor051_2K_NormalDX.jpg";
import roughness1 from "../assets/textures/WoodFloor051_2K_Roughness.jpg";
import ambient1 from "../assets/textures/WoodFloor051_2K_AmbientOcclusion.jpg";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping, sRGBEncoding } from "three";

const fixTexture = (texture) => {
  texture.flipY = false;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 0.25;
  texture.repeat.y = 0.25;
  texture.encoding = sRGBEncoding;
  texture.rotation = Math.PI / 4;
};

export const Floor1 = () => {
  const [map, normalMap, roughnessMap] = useTexture([color1, normal1, roughness1]);
  fixTexture(map);
  fixTexture(normalMap);
  fixTexture(roughnessMap);

  const floor1 = {
    map,
    normalMap,
    roughnessMap,
    envMapIntensity: 0.1,
  };

  return floor1;
};
