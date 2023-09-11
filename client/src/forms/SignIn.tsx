import axios from 'axios';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {  LOGIN_ROUTE, TOKEN_KEY } from '../constants/url';
import { useNavigate } from 'react-router-dom';

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
const nav = useNavigate()

  const onSubmit: SubmitHandler<LoginFormValues> =async (bodyData) => {
 const {data} = await axios.post(LOGIN_ROUTE,bodyData)
 localStorage.setItem(TOKEN_KEY,data.token)
 console.log(data);
 if(data.role === "admin"){
  nav("/admin")
 }else if(data.role === "user"){
 nav("/")
 }
  };

  

  return (
    <div className='text-center flex justify-center'>
     
      <form className='form-control w-[50%]' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-3xl p-1'>Sign in</h2>
        <div>
          <label htmlFor="">Email : </label>
          <input
          className='input'
            type="text"
            id="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input
           className='input'
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button className='btn btn-primary' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
