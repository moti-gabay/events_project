import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LOGIN_ROUTE, TOKEN_KEY } from "../constants/url";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const nav = useNavigate();

  const onSubmit: SubmitHandler<LoginFormValues> = async (bodyData) => {
    const { data } = await axios.post(LOGIN_ROUTE, bodyData);
    localStorage.setItem(TOKEN_KEY, data.token);
    console.log(data);
    if (data.role === "admin") {
      nav("/admin");
    } else if (data.role === "user") {
      nav("/");
    }
  };

  return (
    <div className="text-center flex justify-center h-[530px]">
      <form className="h-[50%] bg-slate-200 text-xl border rounded-md w-[50%]" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl p-1 underline">Sign in</h2>
        <div>
          <label htmlFor="">Email : </label>
          <input
          placeholder="Email..."
            className="input border h-7 my-2"
            type="text"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input
          placeholder="Password..."
            className="input h-7 my-2"
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p  className="text-red-500">{errors.password.message}</p>}
        </div>
        <button className="btn bg-blue-600 text-white w-[50%] mx-auto" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
