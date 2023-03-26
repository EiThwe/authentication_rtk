import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/authApi";
import { removeUser } from "../features/service/authSlice";
import Guard from "./Guard";

const Navbar = () => {
  // const {user} = useSelector(state=> state.authSlice)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const user = JSON.parse(Cookies.get("user"));
  const [logout] = useLogoutMutation();
  const logOutHandler = async () => {
    const { data } = await logout(token);
    console.log(data);
    dispatch(removeUser())
    if (data?.success) {
      nav("/login");
    }
  };

  return (
 
      
      <nav className="flex justify-between items-center p-5 shadow-sm border-b-2 rounded border-slate-600 w-11/12 mx-auto">
        <h1 className="text-xl text-slate-700">MMS</h1>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 text-slate-600">
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <button
            className="text-sm text-white bg-red-500 px-3 py-1 border rounded-md"
            onClick={logOutHandler}
          >
            Log Out
          </button>
        </div>
      </nav>
  
  );
};

export default Navbar;
