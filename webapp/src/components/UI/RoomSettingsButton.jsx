import React from "react";
import styled from "styled-components";

export const RoomSettingsButton = ({ name, click, show }) => {
  const handleClick = () => {
    click((prev) => !prev);
  };

  return (
    <RoomButton onClick={handleClick} selected={show}>
      {name}
    </RoomButton>
  );
};

const RoomButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.selected ? "#ced4da" : "#fff")};
  color: ${(props) => (props.selected ? "#868e96" : "#868e96")};
  border: 1px solid #ced4da;
  border-radius: 0.3rem;
  transition: 0.2s ease-out;
`;
