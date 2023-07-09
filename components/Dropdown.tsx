"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  trigger: React.ReactNode
}

const Dropdown: React.FC<Props> = ({ children, trigger }) => {
  const [show, setShow] = useState(false)

  const handleOnMouseEnter = () => {
    setShow(true)
  }

  const handleOnMouseLeave = () => {
    setShow(false)
  }

  return (
    <div className='relative z-[60]' onMouseLeave={handleOnMouseLeave}>
      <span onMouseEnter={handleOnMouseEnter}>{trigger}</span>
      <div className='z-[60]'>
        {show && (
          <motion.div
            className='pt-4 flex flex-col absolute left-0 z-50 pl-4 pr-10 text-sm font-semibold py-4 bg-black border-b-2 border-white shadow-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
