import { tableData } from "@/js/tableTextures";
import { useTableconfiguration } from "@/store/data";
import React from "react";
import styled from "styled-components";

export const TableMaterial = () => {
  const currentTexture = useTableconfiguration((store) => store.tableTexture);
  const update = useTableconfiguration((store) => store.update);

  return (
    <>
      <ImageContainers>
        <ImageTexture
          src={tableData[0].preview}
          selected={currentTexture === "wood1"}
          onClick={() => update("tableTexture", "Wood1")}
        />
        <ImageTexture
          src={tableData[1].preview}
          selected={currentTexture === "wood2"}
          onClick={() => update("tableTexture", "Wood2")}
        />
        <ImageTexture
          src={tableData[2].preview}
          selected={currentTexture === "wood3"}
          onClick={() => update("tableTexture", "Wood3")}
        />
      </ImageContainers>
    </>
  );
};

const ImageTexture = styled.img`
  width: 7rem;
  height: 7rem;
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
