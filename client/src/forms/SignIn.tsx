import { Link } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../constants/Request";
import { LOGIN_ROUTE } from "../constants/url";
import axios from "axios";

interface SignInFormState {
  Email: string;
  Password: string;
}

type UserType = {
  Email: string;
  Password: string;
};

const SignIn: React.FC = () => {
  const [records, setRecords] = useState<UserType[]>([]);
  const [User, setUser] = useState<SignInFormState>({
    Email: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...User, [name]: value });
    console.log(name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setRecords([...records, User]);
    console.log(User);

    try {
      // You should send `User` instead of `records` to the API
      const response = await axios.post(LOGIN_ROUTE,User);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="z-10 w-[100%] h-[500px]">
      <div className="rounded-xl border border-orange-400 bg-slate-400 w-[60%] h-[300px] p-9 mx-auto my-9">
        <h1 className="text-center text-3xl">Sign In </h1>
        <form onSubmit={handleSubmit} className="form text-center" action="">
         
          
          <div className="my-3">
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
          <div className="my-3">
            <label className="text-xl" htmlFor="Password">
              Password:
            </label>
            <input
              onChange={handleChange}
              className="input h-8"
              type="password" // Change this to type "password" for a password input
              name="Password"
            />
          </div>
          <div className="">
            {/* The Link component should wrap around the button text */}
            <button type="submit" className="btn btn-sm btn-warning">
              Sign In {/* Change button text from "Sign In" to "Sign Up" */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
