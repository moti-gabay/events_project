
const Header: React.FC = () => {
  return (
    <div className={` "pb-[9%] lg:pb-[6.5%]" : "pb-[29%] min-[400px]:pb-[21%] sm:pb-[18%] md:pb-[16.5%] lg:pb-[13.5%] xl:pb-[11%]"}`}>
    <div className='shadow-lg fixed z-20'>
        <nav 
        style={{
            backgroundImage: 'url(https://images.pexels.com/photos/301717/pexels-photo-301717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover'
        }}
        className="text-[13px] md:text-base lg:text-lg h-16 sm:h-20 md:h-24 flex justify-between items-center text-gray-800 font-semibold w-[100vw] px-[3%] sm:px-[1%] md:px-[3%]">
         
         <button 
                    className='hover:scale-110'
                    onClick={() => console.log("login")
                    }>Login
                    </button> 
        </nav>
      
    </div>
  </div>
  )
}

export default Header