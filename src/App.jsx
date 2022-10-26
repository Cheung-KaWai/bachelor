import React from "react";
import { RoutesApp } from "./components/Routing/RoutesApp";
import { DataContextProvider } from "./context/DataContextProvider";
import { LightContextProvider } from "./context/LightContextProvider";

export const App = () => {
  return (
    <DataContextProvider>
      <LightContextProvider>
        <RoutesApp />
      </LightContextProvider>
    </DataContextProvider>
  );
};
