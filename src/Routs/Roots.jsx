import { createBrowserRouter } from "react-router";
import App from "../App";
import Headers from "../Components/Header/Headers";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Page/Home";
import CetagoryNews from "../Page/CetagoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayot from "../Layouts/AuthLayot";
import Newsdetails from "../Page/newsdetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Page/Loading";


const router = createBrowserRouter([
    {
        path:"/",
     element:<HomeLayouts></HomeLayouts>,
     children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"cetagory/:id",
            element:<CetagoryNews/>,
            loader: ()=>
                fetch('/news.json'),
            hydrateFallbackElement: <Loading/>
           
        }
     ]
     

    },

{
    path:"auth",
    element: <AuthLayot/>,
    children:[
        {
         path:"/auth/login"   ,
         element:<Login/>
        },
        {
         path:"/auth/Register"   ,
         element:<Register/>
        }
    ]
},
{
    path:"/newsdetais/:id", 
    element:<PrivateRoute>
        <Newsdetails></Newsdetails>
    </PrivateRoute>,
    loader: ()=> fetch('/news.json'),
    hydrateFallbackElement:<Loading/>
}

    ,{
        path:"/*",
        element:"Error -404"
    }
])

export default router