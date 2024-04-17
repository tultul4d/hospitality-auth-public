import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Estates from "../pages/Home/Estates/Estates";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPages from "../pages/ErrorPages";
import Animation from "../pages/Animation";
import UserProfile from "../pages/UserProfile/UserProfile";

  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
                loader: () => fetch('/cards.json')
            },
            {
                path: '/estates',
                element: <Estates></Estates>
            },
            {
                path: '/cards/:id',
                 element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                 loader: () => fetch('../cards.json') 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/animation',
                element: <PrivateRoute><Animation></Animation></PrivateRoute>
            },
            {
                path: '/user',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }
        ]
    }
  ])
  export default routes;