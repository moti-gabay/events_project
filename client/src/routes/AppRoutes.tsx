import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from '../components/pages/Home'
import SignIn from '../forms/SignIn';


const AppRoutes: React.FC = () =>   {
    const router: any = createBrowserRouter([
{
    path:"/",
 element:<SignIn/>
},
{
   path:"/home",
   element:<Home/> 
}
    ])
    return(
        <RouterProvider router={router}/>
    )

}

export default AppRoutes;