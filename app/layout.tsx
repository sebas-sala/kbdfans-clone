import { Inter } from "next/font/google"
import Providers from "../lib/Providers"
import CartProvider from "@/contexts/CartContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AuthProvider from "@/contexts/AuthContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KBDFans",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={` ${inter.className} overflow-y-scroll relative`}>
        <AuthProvider>
          <Providers>
            <CartProvider>
              <Header />
              {children}
              <Footer />
            </CartProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
