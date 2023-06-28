import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LinkBuilder from "@/components/NavLink";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <Image
            src="/../public/images/logo.avif"
            width={150}
            height={150}
            className="object-contain w-auto h-auto"
            alt="Logo"
          />
          <div className="flex gap-5 text-white text-3xl">
            <BsSearch className="cursor-pointer hover:text-white/90 transition duration-200" />
            <CgProfile className="cursor-pointer hover:text-white/90 transition duration-200" />
            <AiOutlineShoppingCart className="cursor-pointer hover:text-white/90 transition duration-200" />
          </div>
        </div>
      </div>

      <div className="w-full bg-black z-50 sticky">
        <div className="container mx-auto z-50">
          <nav className="text-white w-full flex gap-4 z-50">
            <LinkBuilder href="/" text="Home" />
            <LinkBuilder href="/shop" text="Shop" />
            <LinkBuilder href="/keyboard" text="Keyboard Categories" />
            <LinkBuilder href="/groupbuy" text="Group Buy" />
            <LinkBuilder href="/readytouse" text="Ready To Use" />
            <LinkBuilder href="/pbtfans" text=" PBTfans" />
          </nav>
        </div>
      </div>
    </header>
  );
}
