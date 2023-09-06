import { Link } from 'react-router-dom';

const AdminHeader = () => {

  return (
    <div className="h-42 sm:h-56 pb-5 bg-gradient-to-br from-sky-600 to-indigo-700 text-center relative">
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-serif text-center pt-4'>Admin</h1>
        <p className='text-2xl'>Welcome admin</p> 
        <div className="mt-4 flex justify-center gap-3 items-center">
          <Link to={"/admin"}>
            <p className="bg-green-400 text-xs sm:text-base md:text-lg py-1.5 px-3 rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">Manage guests</p>
          </Link> 
          <Link to={"/admin/ManageMeals"}>
            <p className="bg-green-400 text-xs sm:text-base md:text-lg p-1.5 rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">Manage meals</p>
          </Link>
          <Link to={"/admin/manageEvents"}>
            <p className="bg-green-400 text-xs sm:text-base md:text-lg p-1.5 rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">Manage events</p>
          </Link>  
        </div>
            </div>
  )
}

export default AdminHeader