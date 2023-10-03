
import { createBrowserRouter } from "react-router-dom";
import Leyout from "../Leyout/Leyout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Leyout></Leyout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            }
        ]
    },
  

])
export default router;