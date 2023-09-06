import  { useEffect, useRef, useState } from 'react'
import { BsTrash3, BsSearch} from 'react-icons/bs';


const ManageGuests = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleDelete = (id:string, name:string) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmed) {

    }
  }

  const handleSearch = () => {
    // setSearch(searchRef.current.value);
  } 

  const handleChangeRole = (_id:string, role:string, name:string) => {
    const newRole = role == 'user' ? "admin" : "user"
    const confirmed = window.confirm(`Are you sure you want to change ${name} to ${newRole}?`);
      if (confirmed) {
      }
  }

  useEffect(() => {
  },[])

 


  return (
    <div className='min-h-screen'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&w=800')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="pb-[10%]">
      {  <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
        {
        <div>
          <h1 className='text-center text-2xl sm:text-5xl lg:text-7xl font-serif pt-[4%] pb-[2%]'>Manage your Guests:</h1>
          <div className="flex items-center gap-1 sm:gap-2 bg-white shadow-lg rounded-3xl w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%] mx-auto mb-[3%] px-2 p-1">
            <BsSearch className='text-sm sm:text-lg'/>
            <input 
                ref={searchRef}
                onChange={handleSearch} 
                className='placeholder:text-xs text-xs sm:placeholder:text-sm sm:text-base w-[90%] focus:outline-none' 
                type="text" 
                placeholder='Search users...'/>
          </div>
          <table className="table-auto text-start border border-collapse w-[99%] sm:w-[90%] md:w-[80%] mx-auto shadow-lg text-[10px] sm:text-base md:text-lg"> 
              <thead className="border bg-slate-200">
                <tr>
                  <th className="w-[4%]">No.</th>
                  <th className="text-start py-3 w-[20%] ps-3">Name</th>
                  <th className="text-start w-[25%]">Email</th>
                  <th className="text-start w-[12%]">Role</th>
                  <th className="text-start w-[13%]">RegistrAt</th>
                  <th className="text-center w-[10%]">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* {filteredUsers.map(({name, email, role, createdAt, _id},i) => ( */}
                    <tr 
                    // key={i}
                    className="bg-slate-50">
                      <td className="text-center py-1.5 border-b border-e">{" "}</td>
                      <td className="border-b ps-3">{"name"}</td>
                      <td className="border-b">{"email"}</td>
                      <td className={`border-b`}>
                        <button 
                        // onClick={() => handleChangeRole(_id, role, name)}
                        // className={`role === 'admin' ? "bg-black text-white" : "bg-slate-200"} px-0.5 rounded-sm hover:shadow-md hover:scale-105`}
                        >
                          
                          {"role"}</button>
                      </td>
                      <td className="border-b">{"createdAt".substring(2,10).split('-').join('/')}</td>
                      <td className="border-b text-center">
                        {/* <BsTrash3 onClick={()=>handleDelete(_id, name)} className="text-center cursor-pointer mx-auto text-lg sm:text-xl md:text-2xl text-red-600 hover:scale-125 hover:duration-100"/> */}
                      </td>
                    </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>}
        </div>
    </div>
  )
}

export default ManageGuests