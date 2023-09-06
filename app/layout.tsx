import { Inter } from "next/font/google";
import Provider from "./provider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthProvider from "@/contexts/auth-context";
import CartProvider from "@/contexts/cart-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KBDFans",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className} overflow-y-scroll relative`}>
        <AuthProvider>
          <CartProvider>
            <Provider>
              <Toaster />
              <Header />
              {children}
              <Footer />
            </Provider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
