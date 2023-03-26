import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/api/authApi';
import { addUser } from '../features/service/authSlice';

const Login = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState("tth@gmail.com");
    const [password,setPassword] = useState("1122334455");

    const [login] = useLoginMutation();
    const dispatch = useDispatch();

    const loginHandler= async (e)=>{
        e.preventDefault();
       try{
        const user = {email,password};
        const {data} = await login(user);
        console.log(data);
        dispatch(addUser({user:data?.user,token:data?.token}))
        if(data?.success){
          nav("/");
      }
      
       }
       catch(error){
        console.log(error);
       }
       
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        action=""
        onSubmit={loginHandler}
        className="flex flex-col gap-10 shadow-lg p-10 bg-gray-100 rounded w-[400px]"
      >
        <h1 className="text-center text-2xl text-gray-600 font-semibold">Log in</h1>
       
        <input
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
          type="email"
          className="outline-none border-b-2 border-b-gray-500"
          placeholder="Enter your email..."
        />
        <input
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
          type="password"
          className="outline-none border-b-2 border-b-gray-500"
          placeholder="Enter your password..."
        />
    
        <button className="px-3 py-2 bg-gray-400" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login