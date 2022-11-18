import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfiguratorLamp } from "../../pages/ConfiguratorLamp";
import { QuikView } from "../../pages/QuikView";
import { Test } from "../../pages/Test";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<ConfiguratorLamp />} />
        <Route path="/ar" element={<QuikView />} />
        <Route path="/shadows" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
