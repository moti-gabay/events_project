import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from '../pages/Home'
// import NavBar from '../components/NavBar';
import Layout from '../layout/Layout';
import Meals from '../pages/Meals';
import Table from '../pages/Table';
import Scheduling from '../pages/Scheduling';
import LayoutAdmin from '../layout/LayuotAdmin';
import NotFound404 from '../components/NotFound404';
import SignIn from '../forms/SignIn';
import SignUp from '../forms/SignUp';
// import SignIn from '../forms/SignIn';


const AppRoutes: React.FC = () =>   {
    const router = createBrowserRouter([
{
    path:"/",
 element:<Layout/>,
 children:[
 {path:"/",element:<Home/>},
 {path:"/meals", element:<Meals/>},
 {path:"/table",element:<Table/>},
 {path:"/scheduling",element:<Scheduling/>},
 {path:"/signIn",element:<SignIn/> },
 {path:"/signUp",element:<SignUp/>}
 ]
},
{
   path:"/admin",
   element: <LayoutAdmin/>,
   children:[
    {path:"/admin/meals", element:<Meals/>},
    {path:"/admin/table",element:<Table/>},
    {path:"/admin/scheduling",element:<Scheduling/>},
    {path:"/admin/signUp",element:<SignUp/>}
   ]
},{
    path:"*",
    element:<NotFound404/>
}
    ])
    return(
        <RouterProvider router={router}/>
    )

}

export default AppRoutes;