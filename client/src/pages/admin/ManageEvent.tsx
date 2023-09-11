import axios from 'axios';
import  { useState,useEffect } from 'react'
import {BsTrash3} from 'react-icons/bs'
import {FaEdit, FaPlus} from 'react-icons/fa'
import { EVENT_LIST_ROUTE } from '../../constants/url';
import { useNavigate } from 'react-router-dom';
// import Modal from '../../modal/Modal'
interface event{
  date:String,
  time:String,
  manager:String,
  maxGuest:Number,
  maxTable:Number,
  createdAt:string

}

const ManageEvents = () => {
  const nav = useNavigate()
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<event[]>([{
    date:"",
    time:"",
    manager:"",
    maxGuest:0,
    maxTable:0,
    createdAt:""
  }]);

  const handleAddition = () => {
    
  }

  const handleDelete = (id:string, name:string) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmed) {
    }
  }

  const handleEdit = (item:any) => {
   
  }

  const handleChangeInStock = (bodyData:any) => {
  }
  const EventsListReq = async() => {
    try {
      const response = await axios.get(EVENT_LIST_ROUTE)
      const data:event[] = response.data;
      setEvent(data)
      setLoading(false)
      console.log(data);
      

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    EventsListReq()
  },[])

  return (
    <div className='md:min-h-screen'
    style={{

      backgroundImage: `url('https://images.pexels.com/photos/15621210/pexels-photo-15621210/free-photo-of-restaurant-setting-for-party.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="pt-[2%] pb-[10%]">
      {loading && <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
        {
        <div className="">
          <div className="mb-[3%]">
            <h1 className='text-center text-2xl sm:text-5xl lg:text-7xl font-serif my-[1%] sm:mb-[2%] lg:mb-[2.5%]'>Manage your Events:</h1>
            <button 
            onClick={() => nav("/admin/addEvent")}
            className="bg-green-400 text-xs sm:text-base md:text-lg px-2 sm:px-4 py-2 lg:px-5 lg:py-3 rounded-md font-semibold flex items-center justify-center gap-1 mx-auto font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">
              Add New Event <FaPlus />
            </button> 
          </div>
          <table className="table-auto text-start border border-collapse w-[99%] sm:w-[90%] md:w-[80%] mx-auto shadow-lg text-xs sm:text-md md:text-lg"> 
              <thead className="border bg-slate-200">
                <tr>
                  <th className="w-[4%]">No.</th>
                  <th className="text-start py-3 w-[20%] ps-3">date</th>
                  <th className="text-start w-[20%]">time</th>
                  <th className="text-start w-[10%]">manager</th>
                  <th className="text-center w-[15%]">max guests</th>
                  <th className="text-center w-[15%]">max tables</th>
                  <th className="text-center w-[15%]">create </th>
                </tr>
              </thead>
              <tbody>
                {event?.map((item,i) => { 
                   const {date,manager,maxGuest,maxTable,time,createdAt} = item; 
                 return (
                    <tr 
                    key={i}
                    className={`bg-slate-50 `}>
                      <td className="text-center py-1.5 border-b border-e">{i+1}</td>
                      <td className="border-b ps-3">{date}</td>
                      <td className="border-b">{time}</td>
                      <td className="border-b">{manager}</td>
                      <td className="border-b text-center">{+maxTable}</td>
                      <td className="border-b text-center">{+maxGuest}</td>
                      <td className="border-b text-center">{createdAt.substring(0,10)}</td>
                      <td className="border-b text-center">
                        {/* <div className="flex justify-center gap-0.5 sm:gap-3">
                          <BsTrash3 
                        //   onClick={() => handleDelete(_id, name)}
                          className="cursor-pointer text-lg sm:text-xl md:text-2xl text-red-600 hover:scale-125 hover:duration-100"/> 
                          <FaEdit 
                        //   onClick={() => handleEdit(item)}
                          className="cursor-pointer text-lg sm:text-xl md:text-2xl text-green-600 hover:scale-125 hover:duration-100"/>
                        </div> */}
                      </td>
                      <td className="border-b text-center ">
                      {/* <input 
                    //   onClick={() => handleChangeInStock({inStock:!inStock, id:_id})}
                      type="checkbox" className="toggle toggle-success toggle-sm sm:toggle-md flex mx-auto"  /> */}
                      </td>
                    </tr>
               )})} 
              </tbody>
            </table>
          </div>}
          {/* <Modal setOpenModal={setOpenModal} openModal={openModal} productEdit={productEdit} setProductEdit={setProductEdit}> */}
            {/* <AddEditProduct productEdit={productEdit}/> */}
          {/* </Modal> */}
        </div>
    </div>
  )
}

export default ManageEvents