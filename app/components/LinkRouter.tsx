"use client"
import { useRouter } from "next/navigation"

type LinkRouterProps = {
  title: string
  href: string
}

const LinkRouter = ({ title, href }: LinkRouterProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/collections/${href}`)
  }

  return (
    <p
      onClick={handleClick}
      className='cursor-pointer truncate py-1 text-gray-300 text-xs transition hover:text-white sm:text-sm md:text-base'
    >
      {title}
    </p>
  )
}

export default LinkRouter
