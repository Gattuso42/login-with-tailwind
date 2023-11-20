import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserData } from "../interfaces/interface";

const Dashboard = () => {
  const { store } = useContext(UserContext);

  // {store.map((user: UserData) => (
  //   <p key={user.id} className=" bg-slate-300 border-t-4 border-slate-600">
  //     {user.id}
  //   </p>
  // ))}
  return (
    <div className="w-72 h-40 md:w-96 bg-gradient-to-b from-slate-500 to-slate-800 rounded-xl flex  items-start justify-center overflow-hidden overflow-y-scroll">
      <table className=" table-fixed w-full">
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        {store.map((user: UserData) => (
          <tr className=" border-2">
            <td className="border-2 overflow-hidden whitespace-nowrap overflow-ellipsis ">
              {user.id}
            </td>
            <td className="border-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {user.email}
            </td>
            <td className="border-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {user.password}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Dashboard;
