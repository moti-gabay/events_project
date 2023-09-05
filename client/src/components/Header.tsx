import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <div className={` "pb-[9%] lg:pb-[6.5%]" : "pb-[29%] min-[400px]:pb-[21%] sm:pb-[18%] md:pb-[16.5%] lg:pb-[13.5%] xl:pb-[11%]"}`}>
    <div className=' shadow-lg fixed z-20'>
        <nav 
        style={{
            backgroundImage: 'url(https://images.pexels.com/photos/301717/pexels-photo-301717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover'
        }}
        className=" text-[13px] md:text-base lg:text-lg h-16 sm:h-20 md:h-24 flex justify-between items-center font-semibold w-[100vw] px-[3%] sm:px-[1%] md:px-[3%]">
          <div className="bg-blue-600 border text-white rounded-xl h-[35px] w-[150px]">
            <h1 className="text-lg font-black p-1 ">PICASSO TEAM</h1>
          </div>
              <ul className="flex justify-between text-xl">
            <li className='hover:scale-110'>
              <Link to="/" className="nav-link px-2 hover:scale-110">
                Home
              </Link>
            </li>
            <li className='hover:scale-110'>
              <Link to="/meals" className="nav-link px-2  hover:scale-110 ">
                Meals
              </Link>
            </li>
            <li className='hover:scale-110'>
              <Link to="/Scheduling" className=' px-2 hover:scale-110'>
              Scheduling
              </Link>
            </li>
          </ul>
          <div className="text-end">
          
            <Link to="/signIn" type="button"  className='text-xl hover:scale-110'>
              Sign In
            </Link>
          </div>
        
        </nav>
      
    </div>
  </div>
  )
}

export default Header