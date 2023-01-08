import { useTableconfiguration } from "@/store/data";
import React, { useContext } from "react";
import styled from "styled-components";
export const LegsModel = () => {
  const update = useTableconfiguration((store) => store.update);
  const currentLeg = useTableconfiguration((store) => store.currentLeg);
  return (
    <>
      <ImagesContainer>
        <Image
          src={"/assets/images/leg1.jpg"}
          selected={currentLeg === "leg1"}
          onClick={() => update("currentLeg", "leg1")}
        />
        <Image
          src={"/assets/images/leg2.jpg"}
          selected={currentLeg === "leg2"}
          onClick={() => update("currentLeg", "leg2")}
        />
      </ImagesContainer>
    </>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  cursor: pointer;
  outline: ${(props) => (props.selected === true ? "3px" : "2px")} solid #212529;
  border-radius: 0.5rem;
  transition: all 0.2s ease-out;
  &:hover {
    outline-width: 3px;
  }
`;
