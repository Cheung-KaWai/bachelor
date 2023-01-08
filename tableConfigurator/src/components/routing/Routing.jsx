import React from "react";
import { Home } from "../../pages/Home";
import { Landing } from "../../pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../pages/Login";
import { ArView } from "../../pages/ArView";

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
  {
    path: "/ar/:id",
    element: <ArView />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
