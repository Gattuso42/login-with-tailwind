import React, { useContext, useEffect } from "react";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";
import { UserData } from "../interfaces/interface";
import { UserContext } from "../context/UserContext";

const Login = () => {
  // const [store, setStore] = useState<UserData[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setStore, store, idGenerator, setIdGenerator } =
    useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user: UserData = {
      id: idGenerator,
      email: email,
      password: password,
    };

    setUser(user);
    setStore((prevStore) => [...prevStore, user]);
    setPassword("");
    setEmail("");

    setIdGenerator(idGenerator + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") handleSubmit(e);
    else console.log("Incorrect Key");
  };

  const handleClear = () => {
    setPassword("");
    setEmail("");
  };

  useEffect(() => {
    if (store.length === 0) return;
    console.log(store);
    console.log(store.length);
  }, [store]);

  return (
    <div
      className="  h-80  w-72 bg-gradient-to-b from-slate-800 to-emerald-500  top-32  flex justify-center items-center
                     rounded-lg   md:w-96 "
    >
      <form
        action=""
        className="grid md:place-items-center  gap-8 md:w-96 outline-none"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="md:middle-input">
          <h2 className=" text-white">Email:</h2>
          <input
            type="email"
            name="email"
            value={email}
            id="4"
            autoComplete="off"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className=" input-style "
          />
        </div>
        <div className="md:middle-input">
          <h2 className=" text-white">Password:</h2>
          <input
            type="password"
            name="password"
            id="3"
            className=" input-style "
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <SubmitButton
          email={email}
          password={password}
          handleSubmit={handleSubmit}
        />
        <ClearButton handleClear={handleClear} />
      </form>
    </div>
  );
};

export default Login;
