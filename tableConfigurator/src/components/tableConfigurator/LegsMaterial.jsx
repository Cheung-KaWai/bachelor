import { legData } from "@/js/legsTextures";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";

export const LegsMaterial = () => {
  const legTexture = useTableconfiguration((store) => store.legTexture);
  const update = useTableconfiguration((store) => store.update);

  return (
    <>
      <ImageContainers>
        <ImageTexture
          src={legData[0].preview}
          selected={legTexture === "Meta1"}
          onClick={() => update("legTexture", "Metal1")}
        />
        <ImageTexture
          src={legData[1].preview}
          selected={legTexture === "Metal2"}
          onClick={() => update("legTexture", "Metal2")}
        />
        <ImageTexture
          src={legData[2].preview}
          selected={legTexture === "Metal3"}
          onClick={() => update("legTexture", "Metal3")}
        />
      </ImageContainers>
    </>
  );
};

const ImageTexture = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;
  outline: ${(props) => (props.selected === true ? "3px" : "0px")} solid #212529;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  &:hover {
    outline-width: 3px;
  }
`;

const ImageContainers = styled.div`
  display: flex;
  gap: 2rem;
`;
