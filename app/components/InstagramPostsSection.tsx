import Feed from "@/components/Feed"
import { instaPostsImages } from "@/data"

const InstagramPostsSection = () => {
  return (
    <section className='snap-mandatory flex snap-x lg:snap-none h-96 w-full overflow-x-auto lg:overflow-x-visible'>
      {instaPostsImages.map(({ src, description }, index) => (
        <Feed key={index} src={src} description={description} />
      ))}
    </section>
  )
}

export default InstagramPostsSection
