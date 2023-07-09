import Feed from "@/components/Feed"
import { instaPostsImages } from "@/data"

const InstagramPostsSection = () => {
  return (
    <section className='flex min-h-max w-full'>
      {instaPostsImages.map(({ src, description }, index) => (
        <Feed key={index} src={src} description={description} />
      ))}
    </section>
  )
}

export default InstagramPostsSection
