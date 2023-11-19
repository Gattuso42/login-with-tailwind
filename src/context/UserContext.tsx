import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";
import { UserData } from "../interfaces/interface";

export interface UserContextInterface {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
  store: UserData[];
  setStore: Dispatch<SetStateAction<UserData[]>>;
  idGenerator: number;
  setIdGenerator: Dispatch<SetStateAction<number>>;
}

const defaultState = {
  user: {
    id: 0,
    email: "",
    password: "",
  },
  store: [],
  setUser: (user: UserData) => {},
  setStore: (store: UserData[]) => {},
  idGenerator: 0,
  setIdGenerator: (id: number) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserData>({
    id: 0,
    email: "",
    password: "",
  });

  const [store, setStore] = useState<UserData[]>([]);

  const [idGenerator, setIdGenerator] = useState(0);

  return (
    <UserContext.Provider
      value={{ user, setUser, store, setStore, idGenerator, setIdGenerator }}
    >
      {children}
    </UserContext.Provider>
  );
}
