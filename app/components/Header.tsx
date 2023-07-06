"use client"

import { useRef } from "react"
import Image from "next/image"
import { useScrollFixed } from "@/hooks/useScrollFixed"
import Container from "@/components/Container"
import IconNav from "./IconNav"
import StickyNav from "./StickyNav"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isSticky = useScrollFixed(headerRef)

  return (
    <>
      <header className='bg-black relative' ref={headerRef}>
        <Container>
          <div className='flex justify-between items-center py-6'>
            <Image
              src='/../public/images/logo.avif'
              width={150}
              height={150}
              className='object-contain w-auto h-auto'
              priority
              alt='Logo'
            />
            {!isSticky && <IconNav />}
          </div>
        </Container>
      </header>
      <StickyNav isSticky={isSticky} />
    </>
  )
}
