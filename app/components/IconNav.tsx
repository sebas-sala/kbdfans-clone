"use client"
import { useContext } from "react";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { NavContext } from "@/context/NavProvider";

const IconNav = () => {
  const { setShowLoginModal } = useContext(NavContext);
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className="flex gap-5 text-white text-3xl p-2">
      <BsSearch className="cursor-pointer hover:text-white/90 transition duration-200" />
      <div onMouseLeave={() => setProfile(false)}>
        <CgProfile
          className="cursor-pointer hover:text-white/90 transition duration-200"
          onMouseEnter={() => setProfile(true)}
        />
        {profile && (
          <div className="flex flex-col absolute z-50 text-sm font-semibold py-4 bg-black px-4 px-y border-b-2 border-white shadow-lg">
            <button
              className="cursor-pointer hover:text-gray-400 transition duration-300"
              onClick={() => setShowLoginModal(true)}
            >
              Log in
            </button>
            <Link
              href="signup"
              className="cursor-pointer hover:text-gray-400 transition duration-300"
            >
              Create account
            </Link>
          </div>
        )}
      </div>
      <AiOutlineShoppingCart
        className="cursor-pointer hover:text-white/90 transition duration-200"
        onClick={() => {}}
      />
    </div>
  );
};

export default IconNav;
