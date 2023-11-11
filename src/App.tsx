import { useState } from "react";

import "./index.css";
import Login from "./components/Login";

function App() {
  return (
    <div
      className="
      container
      flex
       items-center
       justify-center
       bg-gradient-to-b from-gray-300 to-black
      h-screen 
      w-auto"
    >
      <Login />
    </div>
  );
}

export default App;
