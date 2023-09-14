"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createContext, useEffect, useState } from "react";

import { fetchUserData } from "@/services/user-services";

import { type User } from "@/types/db";

type AuthContextType = {
  userData: User | null;
  handleLogout: () => Promise<void>;
  handleLogin: ({ email, password }: LoginData) => Promise<void>;
  handleSignup: ({ email, password }: SignupData) => Promise<void>;
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
  password: string;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState<User | null>(null);

  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUserData(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async ({ email, password }: LoginData) => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      const {
        data: { user },
      } = res;

      if (!user) return;

      const userData = await fetchUserData(user.id);
      setUserData(userData);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignup = async ({ email, password }: SignupData) => {
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      const {
        data: { user },
      } = res;

      if (!user) return;

      const userData = await fetchUserData(user.id);
      setUserData(userData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const initSession = async () => {
      const res = await supabase.auth.getSession();

      const {
        data: { session },
      } = res;

      if (!session) return;

      const userData = await fetchUserData(session.user.id);

      setUserData(userData);
    };

    initSession();
  }, [supabase.auth]);

  return (
    <AuthContext.Provider
      value={{ userData, handleLogout, handleLogin, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
