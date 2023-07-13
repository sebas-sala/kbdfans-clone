"use client"

import { useRef, useContext } from "react"
import Image from "next/image"
import { useScrollFixed } from "@/hooks/useScrollFixed"
import Container from "@/components/Container"
import IconNav from "./IconNav"
import { AuthContext } from "@/contexts/AuthContext"
import StickyNav from "./StickyNav"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isSticky = useScrollFixed(headerRef)
  const { userData } = useContext(AuthContext)
  return (
    <>
      <header className='relative bg-black' ref={headerRef}>
        <Container>
          <div className='flex items-center justify-between py-6'>
            <Image
              src='/../public/images/logo.avif'
              width={150}
              height={150}
              className='h-auto w-auto object-contain'
              priority
              alt='Logo'
            />
            {!isSticky && <IconNav userData={userData} />}
          </div>
        </Container>
      </header>
      <StickyNav isSticky={isSticky} userData={userData} />
    </>
  )
}
