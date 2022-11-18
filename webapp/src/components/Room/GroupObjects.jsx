import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { DataObject } from "./DataObject";

export const GroupObjects = () => {
  const context = useContext(DataContext);
  return (
    <>
      {context.showOthers &&
        context.roomData &&
        context.roomData.objects?.map((others, key) => (
          <DataObject key={key} scale={others.dimensions} transform={others.transform} />
        ))}
    </>
  );
};
