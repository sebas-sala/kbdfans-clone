import { instaPostsImages as images } from "@/data"
import Image from "next/image"

const InstagramPostsSection = () => {
  return (
    <section className="flex">
        {images.map((image, index) => (
            <Image 
                key={index}
                src={image.src}
                width={300}
                height={300}
                alt={image.alt}
                className="w-1/6"/>
        ))}
    </section>
  )
}

export default InstagramPostsSection