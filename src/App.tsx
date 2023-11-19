import "./index.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState, useContext } from "react";
import UserProvider, { UserContext } from "./context/UserContext";
import DeleteButton from "./components/DeleteButton";

function App() {
  return (
    <div className="app-base-style bg-gradient-to-b from-gray-300 to-black flex-col space-y-4   ">
      <UserProvider>
        <Login />
        <Dashboard />
        <DeleteButton />
      </UserProvider>
    </div>
  );
}

export default App;
