import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserData } from "../interfaces/interface";

const Dashboard = () => {
  const { store } = useContext(UserContext);

  return (
    <div className="w-72 h-40 md:w-96 bg-gradient-to-b from-slate-500 to-slate-800 rounded-xl text-center overflow-hidden scr">
      {store.map((user: UserData) => (
        <p key={user.id} className=" bg-slate-300 border-t-4 border-slate-600">
          {user.id}
        </p>
      ))}
    </div>
  );
};

export default Dashboard;
