"use client"

import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { splideImages } from "@/data/landingImages"
import "@splidejs/react-splide/css"

const Hero = () => {
  return (
    <Splide
      tag='section'
      aria-label='Hero slider'
      options={{
        type: "slide",
        width: "100%",
        height: "100%",
        perPage: 1,
      }}
    >
      {splideImages.map((image, index) => (
        <SplideSlide key={index}>
          <Image
            src={image.src}
            width={13000}
            height={1000}
            className='w-screen h-screen object-cover'
            alt={image.alt}
          />
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Hero
