import Link from "next/link"

type Props = {
  href: string
  text: string
}

const UnderlineLink: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className='underline text-gray-500'>
      {text}
    </Link>
  )
}

export default UnderlineLink
