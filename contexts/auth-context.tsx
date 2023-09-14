"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

import { fetchUserData } from "@/services/user-services";

import { type User } from "@/types/db";

type AuthContextType = {
  userData: User | null;
  handleLogout: () => void;
  handleLogin: ({ email, password }: LoginData) => void;
  handleSignup: ({ email, password }: SignupData) => void;
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

  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const handleLogin = async ({ email, password }: LoginData) => {
    const supabase = createClientComponentClient();
    const user = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!user) return;
  };

  const handleSignup = async ({ email, password }: SignupData) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  useEffect(() => {
    const supabase = createClientComponentClient();
    supabase.auth.getSession().then((res) => {
      const {
        data: { session },
      } = res;

      if (!session) return;

      fetchUserData(session.user.id).then((res) => {
        setUserData(res);
      });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ userData, handleLogout, handleLogin, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
