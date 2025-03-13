"use client";

import { User } from "@/interface/user";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const USER_LOCAL_STORAGE = "user";

interface UserContextType {
  user?: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUserState] = useState<User>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const json = localStorage.getItem(USER_LOCAL_STORAGE);
    if (!json) return;

    const user = JSON.parse(json) as User;

    if (!user.logged && !(pathname === "/" || pathname === "/signup")) {
      router.push("/");
      return;
    }

    setUserState(user);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUser = (user: User) => {
    setUserState(user);

    localStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};
