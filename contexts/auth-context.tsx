"use client";

import { createContext, useEffect, useState } from "react";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

import useCart from "@/hooks/use-cart";

import { type User } from "@/types/db";
import { fetchUserData } from "@/services/auth-services";

type AuthContextType = {
  userData: User | null;
  session: Session | null;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const { clearCart } = useCart();

  const logout = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
    setUserData(null);
    clearCart();
  };

  useEffect(() => {
    const supabase = createClientComponentClient();
    supabase.auth.getSession().then((res) => {
      const {
        data: { session },
      } = res;

      setSession(session);

      if (!session) return;

      fetchUserData().then((res) => {
        setUserData(res);
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, logout, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
