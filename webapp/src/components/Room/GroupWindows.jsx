import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { Window } from "../Models/Window";

export const GroupWindows = () => {
  const context = useContext(DataContext);

  return (
    <group>
      {context?.showWindows &&
        context?.roomData &&
        context.roomData.windows?.map((win, key) => (
          <Window key={key} scale={[win.dimensions[0], win.dimensions[1], 1]} tranform={win.transform} />
        ))}
    </group>
  );
};
