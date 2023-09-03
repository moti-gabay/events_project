import { Link } from "react-router-dom";

const Footer:React.FC = () => {
return (
    <footer>
    <div className='bg-slate-700 text-slate-100 bg-opacity-85 grid grid-cols-1 md:grid-cols-3 gap-x-6 px-[3%] pt-[4%] md:pt-[2%] mt-[5%]'>
      <div className='mb-5'>
        <h3 className='md:text-center text-2xl font-semibold border-b-2 mb-3 pb-1'>Pages:</h3>
        <ul className='leading-6 text-sm sm:text-base'>
          <li>
             <Link to={"/"}
             className='hover:text-amber-700 hover:font-bold pb-4'>
              Home
             </Link>
          </li>
          <li>
             <Link to={"/meals"} 
             className='hover:text-amber-700 hover:font-bold'>
              meals
             </Link>
          </li>
          <li>
             <Link to={"/Scheduling"} 
             className='hover:text-amber-700 hover:font-bold'>
              Scheduling
             </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-gray-900 text-white text-xs sm:text-base text-center py-1">
      <p>© copyright 2023  motiGabay</p>
      <p>Fullstack Developers | React | Typescript| MongoDB | Node.js</p>
    </div>
  </footer>
)


}

export default Footer;