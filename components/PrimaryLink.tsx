import { navDataType } from "@/types/types"
import Link from "next/link"

const PrimaryLink = ({ title, href }: navDataType) => {
  return (
    <Link
      href={href}
      className='text z-10 rounded-2xl bg-blue-400/95 px-10 py-2 uppercase text-white'
    >
      {title}
    </Link>
  )
}

export default PrimaryLink
