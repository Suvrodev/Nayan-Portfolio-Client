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
import Portfolio from "@/Pages/User/Portfolio/Portfolio";
import PortfolioDetail from "@/Pages/User/Portfolio/PortfolioDetail/PortfolioDetail";
import Blog from "@/Pages/User/Blog/Blog";
import BlogDetail from "@/Pages/User/Blog/BlogDetail/BlogDetail";
import AddService from "@/Pages/Admin/Service/AddService/AddService";
import UpdateService from "@/Pages/Admin/Service/UpdateService/UpdateService";
import AddPortfolio from "@/Pages/Admin/Portfolio/AddPortfolio/AddPortfolio";
import UpdatePortfolio from "@/Pages/Admin/Portfolio/UpdatePortfolio/UpdatePortfolio";
import AddBlog from "@/Pages/Admin/Blog/AddBlog/AddBlog";

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
        element: <Service isAdmin={false} />,
      },
      {
        path: "/service-detail/:_id",
        element: <ServiceDetail />,
      },
      {
        path: "/portfolio",
        element: <Portfolio isAdmin={false} />,
      },
      {
        path: "/portfolio-detail/:id",
        element: <PortfolioDetail />,
      },
      {
        path: "/blog",
        element: <Blog isAdmin={false} />,
      },
      {
        path: "/blog-detail/:id",
        element: <BlogDetail />,
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
      {
        path: "service",
        element: (
          <AdminProtectedRoute>
            <Service isAdmin={true} />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "service/add-service",
        element: (
          <AdminProtectedRoute>
            <AddService />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "service/update-service/:id",
        element: (
          <AdminProtectedRoute>
            <UpdateService />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "portfolio",
        element: (
          <AdminProtectedRoute>
            <Portfolio isAdmin={true} />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "portfolio/add-portfolio",
        element: (
          <AdminProtectedRoute>
            <AddPortfolio />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "portfolio/update-portfolio/:id",
        element: (
          <AdminProtectedRoute>
            <UpdatePortfolio />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "blog",
        element: (
          <AdminProtectedRoute>
            <Blog isAdmin={true} />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "blog/add-blog",
        element: (
          <AdminProtectedRoute>
            <AddBlog />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "blog/update-blog/:id",
        element: (
          <AdminProtectedRoute>
            <UpdatePortfolio />
          </AdminProtectedRoute>
        ),
      },
    ],
  },
]);
