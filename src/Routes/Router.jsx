import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SignUp/Signup";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products";
import Privetroute from "./Privetroute";
 
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
    ],
},
{ path: '/signup', element: <Signup/> },
{ path: '/login', element: <Login/> },
  ])