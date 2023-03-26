import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/api/authApi";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password_confirmation,setPasswordConfirmation] = useState("");
    const [register] = useRegisterMutation();
    const nav = useNavigate();

    const registerHandler = async(e)=>{
        e.preventDefault();
        const user= {name,email,password,password_confirmation};
        const {data} = await register(user);
        console.log(data);
        if(data?.success){
            nav("/login");
        }
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        action=""
        onSubmit={registerHandler}
        className="flex flex-col gap-10 shadow-lg p-10 bg-gray-100 rounded w-[400px]"
      >
        <h1 className="text-center text-xl text-gray-600 font-bold">Register</h1>
        <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
          type="text"
          className="outline-none border-b-2 border-b-gray-500"
          placeholder="Enter your name..."
        />
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
        <input
           value={password_confirmation}
           onChange={(e)=> setPasswordConfirmation(e.target.value)}
          type="password"
          className="outline-none border-b-2 border-b-gray-500"
          placeholder=" Password confirm..."
        />
        <div className="flex justify-start  gap-10 items-center">
            <p className="text-lg text-gray-700">Already have an account?</p>
            <p className="underline text-gray-500">Login</p>
         </div>
        <button className="px-3 py-2 bg-gray-400" type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Register;
