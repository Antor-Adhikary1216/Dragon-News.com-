import { createBrowserRouter } from "react-router";
import App from "../App";
import Headers from "../Components/Header/Headers";


const router = createBrowserRouter([
    {
        path:"/",
     Component:Headers
    }
    ,{
        path:"/*",
        element:"Error -404"
    }
])

export default router