import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Dashboard from "../Pages/Dashboard";
import ReduxComponent from "../Components/ReduxComponent";


const router = createBrowserRouter([

{
path: '/',
Component: Dashboard
},
{
    path: "/counter",
    component: ReduxComponent
}

])


function Router(){
    return(

<RouterProvider router = {router} />

    )
}

export default Router