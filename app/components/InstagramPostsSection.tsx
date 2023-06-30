"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineInstagram } from "react-icons/ai";
import { instaPostsImages as images } from "@/data";

type InstagramPostsSectionProps = {
  feed1: boolean;
  feed2: boolean;
  feed3: boolean;
  feed4: boolean;
  feed5: boolean;
  feed6: boolean;
};

const InstagramPostsSection = () => {
  const [show, setShow] = useState<InstagramPostsSectionProps>({
    feed1: false,
    feed2: false,
    feed3: false,
    feed4: false,
    feed5: false,
    feed6: false,
  });

  const handleMouseEnter = (index: number) => {
    const updatedShow = {
      feed1: false,
      feed2: false,
      feed3: false,
      feed4: false,
      feed5: false,
      feed6: false,
      [`feed${index + 1}`]: true,
    };
    setShow(updatedShow);
  };
  
  return (
    <section className="flex w-full min-h-max">
      {images.map((image, index) => (
        <div
          className="relative w-full cursor-pointer"
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => setShow({ ...show, [`feed${index + 1}`]: false })}
        >
          <Image
            key={index}
            src={image.src}
            width={800}
            height={300}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {show[`feed${index + 1}` as keyof InstagramPostsSectionProps] && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
            >
              <AiOutlineInstagram className="text-white text-4xl" />
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

export default InstagramPostsSection;
