"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScrollFixed } from "@/hooks/useScrollFixed";
import LinkBuilder from "@/components/NavLink";
import IconNav from "./IconNav";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const isFixed = useScrollFixed(navRef);

  return (
    <header className="bg-black relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <Image
            src="/../public/images/logo.avif"
            width={150}
            height={150}
            className="object-contain w-auto h-auto"
            alt="Logo"
          />
          <IconNav />
        </div>
      </div>

      <div
        className={`w-full bg-black z-50 ${isFixed ? "fixed top-0 transition-all duration-200" : ""}`}
        ref={navRef}
      >
        <div className="container mx-auto z-50">
          <div className="flex justify-between items-center">
            <nav className="text-white w-full flex items-center gap-4 z-50">
              <LinkBuilder href="/" text="Home" />
              <LinkBuilder href="/shop" text="Shop" />
              <LinkBuilder href="/keyboard" text="Keyboard Categories" />
              <LinkBuilder href="/groupbuy" text="Group Buy" />
              <LinkBuilder href="/readytouse" text="Ready To Use" />
              <LinkBuilder href="/pbtfans" text=" PBTfans" />
            </nav>
            {isFixed && <IconNav />}
          </div>
        </div>
      </div>
    </header>
  );
}
