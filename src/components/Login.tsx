import React, { useEffect } from "react";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";

const Login = () => {
  interface UserData {
    id: number;
    email: string;
    password: string;
  }
  let idGenerator: number = 0;

  const [store, setStore] = useState<UserData[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user: UserData = {
      id: idGenerator,
      email: email,
      password: password,
    };
    setStore((prevStore) => [...prevStore, user]);
    console.log(email);
    console.log(password);
    setPassword("");
    setEmail("");

    idGenerator++;
  };

  useEffect(() => {
    console.log(store);
    console.log(store.length);
  }, [store]);

  return (
    <div
      className="  h-80  w-72 bg-gradient-to-b from-slate-800 to-emerald-500  top-32 absolute flex justify-center items-center
                     rounded-lg translate-y-0 shadow-xl  md:w-96 "
    >
      <form
        onSubmit={handleSubmit}
        action=""
        className="grid md:place-items-center  gap-8 md:w-96"
      >
        <div className="md:middle-input">
          <h2 className=" text-white">Email:</h2>
          <input
            type="email"
            name="email"
            value={email}
            id="4"
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
        <ClearButton />
      </form>
    </div>
  );
};

export default Login;
