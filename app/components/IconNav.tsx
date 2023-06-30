import Link from "next/link";
import { useEffect, useState, FormEvent } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const IconNav = () => {
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
            <Link href="login" className="cursor-pointer hover:text-gray-400 transition duration-300">Log in</Link>
            <Link href="signup" className="cursor-pointer hover:text-gray-400 transition duration-300">Create account</Link>
          </div>
        )}
      </div>
      <AiOutlineShoppingCart className="cursor-pointer hover:text-white/90 transition duration-200" />
    </div>
  );
};

export default IconNav;
