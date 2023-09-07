"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Cookie from "js-cookie";

import useCart from "@/hooks/use-cart";

import { type User } from "@/types/db";

type AuthContextType = {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const { clearCart } = useCart();

  const logout = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
    Cookie.remove("user");
    setUserData(null);
    clearCart();
  };

  useEffect(() => {
    const userCookie = Cookie.get("user");

    if (userCookie && userCookie !== "undefined") {
      try {
        const parseUser = JSON.parse(userCookie) as User;
        setUserData(parseUser);
      } catch (error) {
        console.error("Error al analizar la cookie 'user':", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
