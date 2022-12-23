import React from "react";
import { Home } from "../../pages/Home";
import { Landing } from "../../pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:id",
    element: <Home />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
