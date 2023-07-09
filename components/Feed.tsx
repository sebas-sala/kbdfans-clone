"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useDisclosure } from "@chakra-ui/react"
import { AiOutlineInstagram } from "react-icons/ai"
import ImageDialog from "./ImageDialog"

type Props = {
  src: string
  description: string
}

const Feed: React.FC<Props> = ({ src, description }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }
  const handleMouseLeave = () => {
    setHovered(false)
  }

  const NewImage = (
    <Image
      src={src}
      width={800}
      height={300}
      alt={description}
      className='w-full h-full object-cover'
    />
  )

  return (
    <div
      className='relative w-full cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      {NewImage}
      {hovered && (
        <motion.div
          className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          <AiOutlineInstagram className='text-white text-4xl' />
        </motion.div>
      )}

      <ImageDialog
        title={description}
        isOpen={isOpen}
        onClose={onClose}
        setHovered={setHovered}
        size='6xl'
        image={NewImage}
      >
        <div className='space-y-4 p-8'>
          <p>{description}</p>
          <p>{src}</p>
        </div>
      </ImageDialog>
    </div>
  )
}

export default Feed
