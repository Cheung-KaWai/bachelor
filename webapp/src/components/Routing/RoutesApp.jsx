import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfiguratorLamp } from "../../pages/ConfiguratorLamp";
import { QuikView } from "../../pages/QuikView";
import { TableConfig } from "../../pages/TableConfig";
import { Test } from "../../pages/Test";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<TableConfig />} />
        <Route path="/ar" element={<QuikView />} />
        <Route path="/shadows" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
