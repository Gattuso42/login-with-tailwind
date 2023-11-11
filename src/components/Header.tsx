import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex container flex-col">
      <div className="container fixed bg-green-500 flex  top-0 h-10 w-[100%] ">
        <label
          htmlFor="menu"
          className="h-8 w-8 peer z-10 bg-cover flex justify-center items-center active:bg-green-400
                     cursor-pointer ml-auto"
        >
          <AiOutlineMenu />
        </label>
        <input type="checkbox" name="" id="menu" className="peer hidden " />
        <div
          className="container inset-0 fixed  h-screen   bg-gradient-to-b from-blue-400 to-black w-full flex justify-center items-center 
                        translate-x-full -translate-y-full 
                        peer-checked:translate-x-0 peer-checked:translate-y-0  transform  duration-500"
        >
          <div
            className="
bg-blue-500
w-52
h-52
hover:bg-white
 hover:w-60
 hover:h-60
active:bg-orange-400
active:text-white
 inset-0
text-center
hover:rounded-full
"
          >
            Header
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
