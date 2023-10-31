import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "../provider/PrivateRoute";
import MyOrder from "../Pages/CheckOut/MyOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/checkout/:id",
        element:<PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-doctor-server-jet-sigma.vercel.app/services/${params.id}`)
        
      },
      {
        path:"/myorder",
        element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
        loader: () => fetch(`https://car-doctor-server-jet-sigma.vercel.app/checkout`)
      }
    ]
  },



]);

export default router;