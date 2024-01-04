import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SignUp/Signup";
import Login from "../Pages/Login/Login";
 
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
          element: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui atque vel totam consectetur molestiae reiciendis excepturi amet iste autem laudantium, doloremque quam earum distinctio reprehenderit repellat impedit ducimus. Veniam, fuga rerum atque saepe soluta quam ratione fugiat necessitatibus hic voluptas voluptatibus suscipit magni dolor tenetur, nesciunt exercitationem itaque vitae?</div>,
        },
    ],
},
{ path: '/signup', element: <Signup/> },
{ path: '/login', element: <Login/> },
  ])