"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineInstagram } from "react-icons/ai"
import Image from "next/image"
import { instaPostsImages as images } from "@/data"

interface Feed {
  [key: string]: boolean
}

const generateInitialShowFeed = (numFeeds: number): Feed => {
  const initialShowFeed: Feed = {}
  for (let i = 1; i <= numFeeds; i++) {
    initialShowFeed[`feed${i}`] = false
  }
  return initialShowFeed
}

const InstagramPostsSection = () => {
  const [showFeed, setShowFeed] = useState<Feed>(
    generateInitialShowFeed(images.length)
  )

  const updateShowFeed = (index: number, value: boolean) => {
    setShowFeed((prevShowFeed) => ({
      ...prevShowFeed,
      [`feed${index + 1}`]: value,
    }))
  }

  const handleMouseEnter = (index: number) => {
    updateShowFeed(index, true)
  }

  const handleMouseLeave = (index: number) => {
    updateShowFeed(index, false)
  }

  return (
    <section className='flex w-full min-h-max'>
      {images.map(({ src, description }, index) => {
        const feedKey = `feed${index + 1}`
        return (
          <div
            className='relative w-full cursor-pointer'
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Image
              src={src}
              width={800}
              height={300}
              alt={description}
              className='w-full h-full object-cover'
            />
            {showFeed[feedKey] && (
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
          </div>
        )
      })}
    </section>
  )
}

export default InstagramPostsSection
