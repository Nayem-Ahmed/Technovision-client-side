import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SignUp/Signup";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products";
import Privetroute from "./Privetroute";
import ProductsDetails from "../Components/Products/ProductsDetails";
import Dashboard from "../LayOuts/Dashboard/Dashboard";
import AddProducts from "../LayOuts/Dashboard/AddProducts";
import MyCart from "../LayOuts/Dashboard/MyCart";
import ManageProducts from "../LayOuts/Dashboard/ManageProducts";
import Profile from "../LayOuts/Dashboard/Profile";
import Adminroute from "./Adminroute";
import UserManage from "../LayOuts/Dashboard/UserManage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Privetroute><Products></Products></Privetroute>,
      },
      {
        path: "/products/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductsDetails></ProductsDetails>,
      },
    ],
  },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard',
    element: <Privetroute><Dashboard></Dashboard></Privetroute>,
    children: [
      {
        path:'/dashboard/addproducts',
        element:<Adminroute><AddProducts></AddProducts></Adminroute>,

      },
      {
        path:'/dashboard/manage',
        element:<Adminroute><ManageProducts></ManageProducts></Adminroute>,

      },
      {
        path:'/dashboard/mycarts',
        element: <MyCart></MyCart>,

      },
      {
        path:'/dashboard/usermanage',
        element:<Adminroute> <UserManage></UserManage></Adminroute>,

      },
      {
        path:'/dashboard/profile',
        element:<Profile></Profile>,

      }
    ],
  }

])