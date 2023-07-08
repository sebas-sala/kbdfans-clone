"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineInstagram } from "react-icons/ai"
import Image from "next/image"
import { instaPostsImages } from "@/data"

type Feed = {
  id: number
  showFeed: boolean
}

const generateInitialShowFeed = (numFeeds: number): Feed[] => {
  const initialShowFeed: Feed[] = []
  for (let i = 0; i < numFeeds; i++) {
    initialShowFeed.push({
      id: i,
      showFeed: false,
    })
  }
  return initialShowFeed
}

const InstagramPostsSection = () => {
  const [feeds, setFeeds] = useState<Feed[]>(
    generateInitialShowFeed(instaPostsImages.length)
  )

  const updateShowFeed = (id: number, value: boolean) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === id ? { ...feed, showFeed: value } : feed
      )
    )
  }

  const handleClick = (id: number) => {
    for (const feed of feeds) {
      if (feed.id !== id) {
        feed.showFeed = false
      }
    }
    updateShowFeed(id, true)
  }

  const handleMouseEnter = (id: number) => {
    updateShowFeed(id, true)
  }

  const handleMouseLeave = (id: number) => {
    updateShowFeed(id, false)
  }

  return (
    <section className='flex w-full min-h-max'>
      {instaPostsImages.map(({ src, description }, index) => {
        const feed = feeds.find((feed) => feed.id === index)
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
              onClick={() => handleClick(index)}
            />
            {feed?.showFeed && (
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
