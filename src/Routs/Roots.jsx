import { createBrowserRouter } from "react-router";
import App from "../App";
import Headers from "../Components/Header/Headers";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Page/Home";
import CetagoryNews from "../Page/CetagoryNews";


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
            element:<CetagoryNews/>
        }
     ]
     

    }
    ,{
        path:"/*",
        element:"Error -404"
    }
])

export default router