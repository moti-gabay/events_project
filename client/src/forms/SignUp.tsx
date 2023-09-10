import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../constants/Request";
import {  SIGNUP_ROUTE } from "../constants/url";
import axios from "axios";

interface SignUpFormState {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

type UserType = {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
};

const SignUp: React.FC = () => {
  const [records, setRecords] = useState<UserType[]>([]);
  const [User, setUser] = useState<SignUpFormState[]>([{
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  }]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...User, [name]: value });
    console.log(User);
  };
const nav = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRecord = { ...User, id: `${new Date().getTime()}` };
    setRecords(newRecord);
    console.log(newRecord);
 

    try {
      // You should send `User` instead of `records` to the API
      const {data} = await axios.post(SIGNUP_ROUTE, records);
      console.log(data);
      nav(-1)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-[100%] h-[500px]">
      <div className="rounded-xl border border-orange-400 bg-slate-400 w-[60%] h-[300px] p-9 mx-auto my-9">
        <h1 className="text-center text-3xl ">Add Guest </h1>
        <form onSubmit={handleSubmit} className="form text-center " action="">
          <div className="my-3">
            <label className="text-xl" htmlFor="FirstName">
              First Name :{" "}
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
              Last Name :{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="LastName"
            />
          </div>
          <div className="my-3 ml-11">
            <label className="text-xl" htmlFor="Email">
              Email :{" "}
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
              Password : 
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="password" // Change this to type "password" for a password input
              name="Password"
            />
          </div>
          <div className="">
            <button  type="submit" className="btn btn-sm btn-warning">
              Sign Up 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
