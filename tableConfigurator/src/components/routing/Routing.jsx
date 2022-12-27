import React from "react";
import { Home } from "../../pages/Home";
import { Landing } from "../../pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
