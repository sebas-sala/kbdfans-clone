"use client"

import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import Login from "@/components/Login"
import Signup from "@/components/Signup"
import Cart from "@/components/Cart"

const IconNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [profile, setProfile] = useState(false)

  const handleProfileMouseEnter = () => {
    setProfile(true)
  }

  const handleProfileMouseLeave = () => {
    setProfile(false)
  }

  return (
    <div className='flex gap-5 text-white text-3xl p-2'>
      <BsSearch className='cursor-pointer hover:text-white/90 transition duration-200' />
      <div onMouseLeave={handleProfileMouseLeave}>
        <CgProfile
          className='cursor-pointer hover:text-white/90 transition duration-200'
          onMouseEnter={handleProfileMouseEnter}
        />
        {profile && (
          <div className='flex flex-col absolute z-50 text-sm font-semibold py-4 bg-black px-4 px-y border-b-2 border-white shadow-lg'>
            <Login />
            <Signup />
          </div>
        )}
      </div>
      <Cart />
    </div>
  )
}

export default IconNav
