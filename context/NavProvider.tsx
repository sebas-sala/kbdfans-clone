"use client";
import { createContext, useState, ReactNode } from "react";

type NavContextType = {
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  showSignupModal: boolean;
  setSignupModal: (show: boolean) => void;
  showCart: boolean;
  setShowCart: (show: boolean) => void;
};

export const NavContext = createContext<NavContextType>({
  showLoginModal: false,
  setShowLoginModal: () => {},
  showSignupModal: false,
  setSignupModal: () => {},
  showCart: false,
  setShowCart: () => {},
});

const NavProvider = ({ children }: { children: ReactNode }) => {
  const [showSignupModal, setSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showSignupModal,
        setSignupModal,
        showLoginModal,
        setShowLoginModal,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
