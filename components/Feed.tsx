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
      fill
      alt={description}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className='h-full w-full object-cover shrink-0'
    />
  )

  return (
    <div
      className='relative h-full w-full cursor-pointer snap-center lg:snap-none shrink-0 lg:shrink'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      {NewImage}
      {hovered && (
        <motion.div
          className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          <AiOutlineInstagram className='text-4xl text-white' />
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
