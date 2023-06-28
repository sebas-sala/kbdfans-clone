"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const Hero = () => {
  return (
    <Splide
      tag="section"
      aria-label="Hero slider"
      options={{
        type: "slide",
        width: "100%",
        height: "100%",
        perPage: 1,
      }}
    >
      <SplideSlide>
        <Image
          src="https://cdn.shopify.com/s/files/1/1473/3902/files/ronin_home.jpg"
          width={13000}
          height={1000}
          className="w-screen h-screen object-cover"
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="https://cdn.shopify.com/s/files/1/1473/3902/files/BOG_banner_1024x1024.jpg?v=1685672495"
          width={13000}
          height={1000}
          className="w-screen h-screen object-cover"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="https://cdn.shopify.com/s/files/1/1473/3902/files/untitled.915_1024x1024.jpg"
          width={13000}
          height={1000}
          className="w-screen h-screen object-cover"
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Hero;
