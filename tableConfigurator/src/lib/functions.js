import { Matrix4, Quaternion, RepeatWrapping, sRGBEncoding, Vector3 } from "three";

export const getTransformData = (transform) => {
  const matrix = new Matrix4();
  matrix.set(...transform);
  const translation = new Vector3();
  const rotation = new Quaternion();
  const scaleMatrix = new Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);

  return {
    translation,
    rotation,
  };
};

export const handleNewRoom = async (id, update, getData) => {
  const data = await getData(id);

  const transform = data.walls[0].transform;
  const matrix = new Matrix4();
  matrix.set(...transform);
  let translation = new Vector3();
  let rotation = new Quaternion();
  let scaleMatrix = new Vector3();
  matrix.transpose().decompose(translation, rotation, scaleMatrix);
  update("floorRotation", rotation);
  update("floorYPosition", translation.y);
  update("floorHeight", data.walls[0].dimensions[1] / 2);
  update("room", data);
  update("check", data.walls.length * 5);
};

export const fixtextures = (arrayTextures, repeat, rotate) => {
  arrayTextures.map((texture) => {
    texture.flipY = false;
    if (repeat) {
      texture.repeat.set(repeat, repeat);
    }
    if (rotate) {
      console.log("hello");
      texture.rotation = rotate;
    }
    texture.encoding = sRGBEncoding;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });
};
