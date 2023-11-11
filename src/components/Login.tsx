import React from "react";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";

const Login = () => {
  return (
    <div
      className="  h-80  w-72 bg-gradient-to-b from-slate-800 to-emerald-500  top-32 absolute flex justify-center items-center
                     rounded-lg translate-y-0 shadow-xl  md:w-96 "
    >
      <form action="" className="grid md:place-items-center  gap-8 md:w-96">
        <div className="md:middle-input">
          <h2 className=" text-white">Email:</h2>
          <input type="email" name="" id="4" className=" input-style " />
        </div>
        <div className="md:middle-input">
          <h2 className=" text-white">Password:</h2>
          <input type="password" name="" id="3" className=" input-style " />
        </div>
        <SubmitButton />
        <ClearButton />
      </form>
    </div>
  );
};

export default Login;
