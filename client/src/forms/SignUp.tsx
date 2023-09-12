import React from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_ROUTE } from "../constants/url";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type UserType = {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit: SubmitHandler<UserType> = async (bodyData) => {
    const { data } = await axios.post(SIGNUP_ROUTE, bodyData);
    console.log(data);
    console.log("singUp");
    
  };

  return (
    <div className="w-[100%] h-[500px]">
      <div className="rounded-xl border border-orange-400 bg-slate-400 w-[60%] h-[300px] p-9 mx-auto my-9">
        <h1 className="text-center text-3xl">Add Guest</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form text-center"
          action=""
        >
          <div className="my-1">
            <label className="text-xl" htmlFor="FirstName">
              First Name:{" "}
            </label>
            <input
              className="input h-7 "
              type="text"
              {...register("FirstName", { required: "First Name is required" })}
            />
            {errors.FirstName && <p>{errors.FirstName.message}</p>}
          </div>
          <div className="my-2">
            <label className="text-xl" htmlFor="LastName">
              Last Name:{" "}
            </label>
            <input
              className="input h-7"
              type="text"
              {...register("LastName", { required: "Last Name is required" })}
            />
            {errors.LastName && <p>{errors.LastName.message}</p>}
          </div>
          <div className="my-2  ml-10">
            <label className="text-xl" htmlFor="Email">
              Email:{" "}
            </label>
            <input
              className="input h-7 "
              type="text"
              {...register("Email", { required: "email is required" })}
            />
            {errors.Email && <p>{errors.Email.message}</p>}
          </div>
          <div className="my-2 ml-3">
            <label className="text-xl" htmlFor="Password">
              Password :
            </label>
            <input
              className="input h-7"
              type="password"
              {...register("Password", { required: "password is required" })}
            />
            {errors.Password && <p>{errors.Password.message}</p>}
          </div>
          <div>
            <button type="submit" className="btn btn-sm btn-warning">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
