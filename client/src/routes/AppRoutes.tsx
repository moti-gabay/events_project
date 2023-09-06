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
import AddMeal from '../forms/AddMeal';
// import SignIn from '../forms/SignIn';
import ManageGuests from "../pages/admin/ManageGuests"
import ManageMeals from '../pages/admin/ManageMeals';

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
    {path:"/admin/table",element:<Table/>},
    {path:"/admin/scheduling",element:<Scheduling/>},
    {path:"/admin/signUp",element:<SignUp/>},
    {path:"/admin/manageMeals",element:<ManageMeals/>},
    {path:"/admin",element:<ManageGuests/>},
    {path:"/admin/manageEvents",element:<AddMeal/>},
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