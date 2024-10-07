import React from "react";
import { useRoutes } from "react-router-dom";
import RouteOne from "./pages/RouteOne";
import SubRouteOne from "./pages/SubRouteOne";
import RouteTwo from "./pages/RouteTwo";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";
import UserPage from "./pages/UserPage";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <UsersList />,
      children: [
        {
          path: "/users/:id",
          element: <UserPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
