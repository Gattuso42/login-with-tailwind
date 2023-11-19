import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const DeleteButton = () => {
  const { store, setStore, idGenerator, setIdGenerator } =
    useContext(UserContext);
  const handleDeleteButton = () => {
    if (store.length != 0) {
      setStore(store.slice(0, -1));
      setIdGenerator(idGenerator - 1);
    }
  };

  return (
    <div
      className="button-style md:md-button-style w-[180px]"
      onClick={handleDeleteButton}
    >
      Delete
    </div>
  );
};

export default DeleteButton;
