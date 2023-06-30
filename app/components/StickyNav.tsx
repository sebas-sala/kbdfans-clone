"use client";

import { useRef } from "react";
import { useScrollFixed } from "@/hooks/useScrollFixed";
import NavLink from "@/components/NavLink";
import { rdyToUseData, shopData } from "@/data";
import IconNav from "./IconNav";

const StickyNav = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const isFixed = useScrollFixed(navRef);
  return (
    <div
      className={`w-full bg-black z-50 ${isFixed ? "fixed left-0 top-0" : ""}`}
      ref={navRef}
    >
      <div className="container mx-auto flex justify-between items-center">
        <nav className="text-white w-full flex items-center gap-4 z-50">
          <NavLink text="Home" href="" />
          <NavLink data={shopData} text="Shop" href="all" />
          <NavLink
            data={rdyToUseData}
            text="Ready To Use"
            href="ready-to-use"
          />
        </nav>
        {isFixed && <IconNav />}
      </div>
    </div>
  );
};

export default StickyNav;
