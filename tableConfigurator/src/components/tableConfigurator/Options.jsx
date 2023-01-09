import React, { useContext } from "react";
import styled from "styled-components";
import { BiMobileAlt } from "react-icons/bi";
import { HiOutlineCube } from "react-icons/hi";
import { GLTFExporter } from "@/js/GLTFExporter";
import { useRoomConfiguration } from "@/store/data";
import { addData } from "@/js/firebase";
import { TableContext } from "@/context/TableContextProvider";

export const Options = () => {
  const context = useContext(TableContext);
  const update = useRoomConfiguration((store) => store.update);
  const showObjects = useRoomConfiguration((store) => store.showObjects);
  const exporter = new GLTFExporter();

  async function saveArrayBuffer(buffer) {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    const id = await addData(data);
    context.setUrl(id);
    context.setComplete(true);
    context.setShowLoadingAnimation(false);
  }

  const handleExport = () => {
    context.setLoading(true);
    context.setComplete(false);

    setTimeout(() => {
      exporter.parse(
        context.tableRef.current,
        (glb) => {
          context.setLoadingPhase("Generating QR Code...");
          context.setShowLoadingAnimation(true);
          saveArrayBuffer(glb);
        },
        (err) => {
          console.log(err);
        },
        { binary: true }
      );
    }, 1000);
  };

  return (
    <Container>
      <OptionContainer
        selected={false}
        onClick={() => update("showObjects", !showObjects)}
        icon={"hide objects"}
      >
        <HiOutlineCube size={32} />
      </OptionContainer>
      <OptionContainer onClick={handleExport} icon={"View in AR"}>
        <BiMobileAlt size={32} />
      </OptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  z-index: 10;
  left: 5rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const OptionContainer = styled.div`
  background-color: ${(props) => (props.selected ? "#e9ecef" : "#fff")};
  border: 1px solid #adb5bd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;

  cursor: pointer;

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: "${(props) => props.icon}";
    width: 12rem;
    display: block;
    position: absolute;
    right: 5px;
    padding: 1.5rem;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease-out;
  }
`;
