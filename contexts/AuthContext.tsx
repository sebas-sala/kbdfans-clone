"use client"
import { createContext, useState, useEffect } from "react"
import { fetchUserData } from "@/lib/auth"
import { User } from "@/types/db"

type AuthContextType = {
  userData: any
  setUserData: React.Dispatch<React.SetStateAction<any>>
}

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  setUserData: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserData()
        setUserData(user)
      } catch (error) {
        console.log("Error al obtener los datos del usuario:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
