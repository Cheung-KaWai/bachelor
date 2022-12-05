import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { Door } from "../Models/Door";

export const GroupDoors = () => {
  const context = useContext(DataContext);

  return (
    <>
      {context?.roomData &&
        context.roomData.doors?.map((door, key) => (
          <Door key={key} scale={[door.dimensions[0], door.dimensions[1], 1]} tranform={door.transform} />
        ))}
    </>
  );
};
