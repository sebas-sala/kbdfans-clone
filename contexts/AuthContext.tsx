"use client"
import { createContext, useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Cookie from "js-cookie"
import useCart from "@/hooks/useCart"
import { type User } from "@/types/db"

type AuthContextType = {
  userData: User | null
  setUserData: React.Dispatch<React.SetStateAction<User | null>>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  setUserData: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null)
  const { clearCart } = useCart()

  const logout = async () => {
    const supabase = createClientComponentClient()
    await supabase.auth.signOut()
    Cookie.remove("user")
    setUserData(null)
    clearCart()
  }

  useEffect(() => {
    const userCookie = Cookie.get("user")
    if (userCookie) {
      const parseUser = JSON.parse(userCookie) as User
      setUserData(parseUser)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
