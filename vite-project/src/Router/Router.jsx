import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Dashboard from "../Pages/Dashboard";


const router = createBrowserRouter([

{
path: '/',
Component: Dashboard
}

])


function Router(){
    return(

<RouterProvider router = {router} />

    )
}

export default Router