"use client"

import { useRef } from "react"
import { useScrollFixed } from "@/hooks/useScrollFixed"
import NavLink from "@/components/NavLink"
import { navlinks } from "@/data/links"
import IconNav from "./IconNav"
import Container from "@/components/Container"

type Props = {
  isSticky: boolean
}

const StickyNav = (props: Props) => {
  const { isSticky } = props
  return (
    <div className='sticky top-0 w-full bg-black z-50'>
      <Container styles='container mx-auto flex justify-between items-center'>
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
        {isSticky && <IconNav />}
      </Container>
    </div>
  )
}

export default StickyNav
