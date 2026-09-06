import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginLayout from "../Layout/LoginLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },

    {
      path: "/login",
      element: <LoginLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRoutes;





