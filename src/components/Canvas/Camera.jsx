import { PerspectiveCamera, useHelper } from "@react-three/drei";
import React from "react";

export const Camera = () => {
  return <PerspectiveCamera makeDefault position={[0, 20, 0]} />;
};
