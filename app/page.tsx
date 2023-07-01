"use client";

import { useContext } from "react";
import Category from "@/components/Category";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import InstagramPostsSection from "./components/InstagramPostsSection";
import { NavContext } from "@/context/NavProvider";
import CartModal from "@/components/CartModal";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

export default function Home() {
  const { showCart, showLoginModal, showSignupModal } = useContext(NavContext);

  return (
    <div className="pb-48 overflow-y-auto">
      <Hero />
      <section className="container mx-auto grid grid-cols-2 gap-6 mt-10 h-96">
        <Category
          text="Keycaps"
          img="https://cdn.shopify.com/s/files/1/1473/3902/files/purprite_ba_720x.jpg?v=1680582821"
        />
        <Category
          text="Keyboard DIY kit"
          img="https://cdn.shopify.com/s/files/1/1473/3902/files/odin_75_720x.jpg?v=1680585767"
        />
      </section>
      <Categories />
      <InstagramPostsSection />
      {showCart && <CartModal />}
      {showLoginModal && <LoginModal />}
      {showSignupModal && <SignupModal />}
    </div>
  );
}
