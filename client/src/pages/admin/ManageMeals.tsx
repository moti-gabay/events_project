import  { useState,useEffect } from 'react'
import {BsTrash3} from 'react-icons/bs'
import {FaEdit, FaPlus} from 'react-icons/fa'
import Modal from '../../modal/Modal'
import axios from 'axios';
import { MEAL_INFO_ROUTE, MEAL_LIST_ROUTE } from '../../constants/url';
import { Link } from 'react-router-dom';


interface meals{
    _id: string;
    name: string;
    image:string;
    main: string;
    vegetables: string;
    carbohydrate: string
    price: number
    createdAt:string
    updatedAt: string
}

const ManageMeals = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [productEdit, setProductEdit] = useState(null);
const [loading,setLoading] = useState(true)
const [meals,setMeals] = useState<meals[]>([{
  _id: "",
  name: "",
  image:"",
  main: "",
  vegetables: "",
  carbohydrate: "",
  price:0,
  createdAt:"",
  updatedAt: "",
}])
  const handleAddition = () => {
    // setProductEdit(null)
    // setOpenModal(true);
  }

  const handleDelete = (id:string, name:string) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmed) {
    //   dispatch(deleteProductRequest(id));
    }
  }

  const handleEdit = (item:any) => {
    // setProductEdit(item)
    // setOpenModal(true)
  }

  const handleChangeInStock = (bodyData :any) => {
    //   dispatch(changeInStockRequest(bodyData));
  }

  const MealsListReq = async() => {
    try {
      const response = await axios.get(MEAL_LIST_ROUTE)
      const data:meals[] = response.data;
      setMeals(data)
      setLoading(false)
      console.log(data);
      

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
MealsListReq()
  },[])

  return (
   
    <div className='mx-[3%] pb-[2%]'>
    <h1 className='text-4xl md:text-4xl lg:text-5xl text-amber-900 font-semibold mb-[3%] font-serif text-center'>menu:</h1>
    {loading && <h1 className='text-[3em] text-center'>
    Loading
    <span className="loading loading-ball loading-md"></span>
    <span className="loading loading-ball loading-md"></span>
    <span className="loading loading-ball loading-md"></span>
    </h1>}
    <div 
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {meals?.map((meal, i) => (
      <div
       key={i}
        className="rounded-none h-[360px] w-full bg-slate-50 mx-auto shadow-md hover:shadow-xl hover:duration-300 relative">
      <img
        className='w-full h-[50%]'
        src={meal.image}
        alt="Furniture"
        />
      <div className="p-0 pt-3 relative">
        <div className="mb-2 px-2">
          <h5 className="text-amber-900 font-serif text-lg font-semibold mb-2 pe-5">{"guide".title}</h5>
          {/* <p className='text-sm '>{guide.introduction?.substring(0,110)} [...]</p> */}
        </div>
        {/* {user && user.favoriteGuides.find(item => item == guide._id) && <FcLike className='absolute top-0.5 right-1 text-2xl'/>} */}
      </div>
      <div>
      
          <Link 
          // to={`/singleBuildGuide/${guide._id}`}
          className="absolute bottom-0 right-0 text-white  font-serif text-lg sm:text-base md:text-xs bg-black border-0 p-2 hover:scale-105"
          >Edit</Link>
        </div>
    </div>
        ))}
    </div>
</div>
  )
}

export default ManageMeals