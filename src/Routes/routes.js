import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/catetory/Category";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProducts from "../pages/dashboard/addproducts/AddProducts";
import CardDetails from "../pages/catetory/CardDetails";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Users from "../pages/dashboard/Users";
import ManageProducts from "../pages/dashboard/ManageProducts";
import Myorder from "../pages/dashboard/Myorder";
import Allproducts from "../pages/dashboard/Allproducts";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/category/:id",
        element: (
          <ProtectedRoute>
            <CardDetails></CardDetails>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/manageproduct",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/myorder",
        element: <Myorder />,
      },
      {
        path: "/dashboard/allproduct",
        element: <Allproducts />,
      },
    ],
  },
]);

export default router;
