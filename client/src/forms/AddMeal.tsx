import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { ADD_MEAL_ROUTE } from "../constants/url";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type MealType = {
  name: string;
  image: string;
  price: number;
  main: string;
  vegetables: string;
};

const AddMeal: React.FC = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MealType>();
  
  const [records, setRecords] = useState<MealType[]>([
    {
      name: "",
      image: "",
      price: 0,
      main: "",
      vegetables: "",
    }
  ]);
  const [meal, setMeal] = useState<MealType[]>([
    {
      name: "",
      image: "",
      price: 0,
      main: "",
      vegetables: "",
    }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setMeal({ ...meal, [name]: value });
  };
  const onSubmit: SubmitHandler<MealType> =async (bodyData) => {
 const {data} = await axios.post(ADD_MEAL_ROUTE,bodyData)
 console.log(data);
 
  };
  

  return (
    <div className=" w-[100%] h-[600px]">
      <div className="rounded-xl border border-orange-400 bg-slate-400 w-[60%] h-auto p-9 mx-auto my-9">
        <h1 className="text-center text-3xl ">Add Meal </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form text-center " action="">
          <div className="my-3">
            <label className="text-xl" htmlFor="FirstName">
               Name :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="FirstName"
            />
          </div>
          <div className="my-3">
            <label className="text-xl" htmlFor="LastName">
            image :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="LastName"
            />
          </div>
          <div className="my-3 ml-3">
            <label className="text-xl" htmlFor="Email">
            price :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="Email"
            />
          </div>
          <div className="my-3 ml-3">
            <label className="text-xl mx-1" htmlFor="Password">
            main :
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text" // Change this to type "password" for a password input
              name="main"
            />
          </div>
          <div className="my-3 mr-8">
            <label className="text-xl mx-1" htmlFor="Password">
            vegetables :
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text" // Change this to type "password" for a password input
              
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-sm btn-warning">
          Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeal;
