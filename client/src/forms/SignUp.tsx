import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_ROUTE } from "../constants/url";
import axios from "axios";

type UserType = {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
};

const SignUp: React.FC = () => {
  const [user, setUser] = useState<UserType>({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send `user` instead of `records` to the API
      const { data } = await axios.post(SIGNUP_ROUTE, user);
      console.log(data);
      nav(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[100%] h-[500px]">
      <div className="rounded-xl border border-orange-400 bg-slate-400 w-[60%] h-[300px] p-9 mx-auto my-9">
        <h1 className="text-center text-3xl">Add Guest</h1>
        <form onSubmit={handleSubmit} className="form text-center" action="">
          <div className="my-3">
            <label className="text-xl" htmlFor="FirstName">
              First Name:{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="FirstName"
              value={user.FirstName}
            />
          </div>
          <div className="my-3">
            <label className="text-xl" htmlFor="LastName">
              Last Name:{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="LastName"
              value={user.LastName}
            />
          </div>
          <div className="my-3">
            <label className="text-xl" htmlFor="Email">
              Email:{" "}
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="text"
              name="Email"
              value={user.Email}
            />
          </div>
          <div className="my-3">
            <label className="text-xl" htmlFor="Password">
              Password:
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="password"
              name="Password"
              value={user.Password}
            />
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
