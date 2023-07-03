"use client"

import { useRef } from "react"
import { useScrollFixed } from "@/hooks/useScrollFixed"
import NavLink from "@/components/NavLink"
import { navlinks } from "@/data/links"
import IconNav from "./IconNav"

const FixedNav = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const isFixed = useScrollFixed(navRef)
  return (
    <div
      className={`w-full bg-black z-50 ${isFixed ? "fixed left-0 top-0" : ""}`}
      ref={navRef}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <nav className='text-white w-full flex items-center gap-4 z-50'>
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              text={link.text}
              href={link.href}
              data={link.data}
            />
          ))}
        </nav>
        {isFixed && <IconNav />}
      </div>
    </div>
  )
}

export default FixedNav
