import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/basket",
      element: <Basket />,
    },
  ]);
  return routes;
};

export default Routes;
