import { useState } from "react";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div
      className="
      container
      flex
       items-center
       justify-center
       bg-gradient-to-b from-red-500 to-black
      h-screen 
      w-auto"
    >
      <Header />
    </div>
  );
}

export default App;
