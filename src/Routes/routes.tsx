import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/User/Home/Home";
import Service from "@/Pages/User/Service/Service";
import Contact from "@/Pages/User/Contact/Contact";
import About from "@/Pages/User/About/About";
import ServiceDetail from "@/Pages/User/Service/WhatIDo/ServiceDetail/ServiceDetail";
import Login from "@/Pages/AdminInterAction/Login/Login";
import Registration from "@/Pages/AdminInterAction/Registration/Registration";
import AdminDashboard from "@/Layout/AdminDashboard/AdminDashboard";
import AdminHome from "@/Pages/Admin/AdminHome/AdminHome";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
import TextEditor from "@/components/TextEditor/TextEditor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service-detail/:_id",
        element: <ServiceDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/te",
        element: <TextEditor />,
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <AdminProtectedRoute>
            {" "}
            <AdminHome />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "home",
        element: <AdminHome />,
      },
    ],
  },
]);
