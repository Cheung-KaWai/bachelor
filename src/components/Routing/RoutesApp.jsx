import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfiguratorLamp } from "../../pages/ConfiguratorLamp";
import { QuikView } from "../../pages/QuikView";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuikView />} />
        <Route path="/configurelamp" index element={<ConfiguratorLamp />} />
      </Routes>
    </BrowserRouter>
  );
};
