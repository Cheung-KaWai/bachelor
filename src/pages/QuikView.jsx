import React from "react";
import image from "../assets/schoen.jpg";
import usdz from "../assets/test.usdz";

export const QuikView = () => {
  return (
    <div>
      <a rel="ar" href={usdz}>
        <img src={image} />
      </a>
    </div>
  );
};
