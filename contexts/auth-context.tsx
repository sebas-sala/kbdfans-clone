"use client";

import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

import useCart from "@/hooks/use-cart";
import { createUser, fetchUserData } from "@/services/auth-services";
import { loginWithEmailAndPassword } from "@/lib/auth";

import { type User } from "@/types/db";

type AuthContextType = {
  userData: User | null;
  session: Session | null;
  logout: () => void;
  handleLogin: ({ email, password }: LoginData) => void;
  handleSignup: ({ email, username, password }: SignupData) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

type LoginData = {
  email: string;
  password: string;
};

type SignupData = {
  email: string;
  username: string;
  password: string;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const { clearCart } = useCart();

  const logout = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
    setUserData(null);
    clearCart();
  };

  const handleLogin = ({ email, password }: LoginData) => {
    toast
      .promise(loginWithEmailAndPassword(email, password), {
        loading: "login...",
        success: "login success",
        error: "login failed",
      })
      .then(() => {
        fetchUserData()
          .then((res) => {
            setUserData(res);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleSignup = ({ email, username, password }: SignupData) => {
    toast
      .promise(createUser(email, username, password), {
        loading: "Creating user...",
        success: "Please check your email to verify your account",
        error: "Error creating user",
      })
      .then((res) => {
        if (res) {
          setUserData(res);
        }
      })
      .catch((e) => {
        console.error(e);
      });
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
    <AuthContext.Provider
      value={{ userData, logout, session, handleLogin, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
