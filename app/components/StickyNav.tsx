import Link from "next/link"
import { navlinks } from "@/data/links"
import IconNav from "./IconNav"
import Container from "@/components/Container"
import Dropdown from "@/components/Dropdown"

type Props = {
  isSticky: boolean
}

const StickyNav = (props: Props) => {
  const { isSticky } = props

  return (
    <div className='sticky top-0 w-full bg-black z-50'>
      <Container styles='container mx-auto flex justify-between items-center'>
        <nav className='text-white w-full flex items-center gap-4 z-50'>
          <Link href='/' className='font-bold tracking-wider p-4'>
            Home
          </Link>
          {navlinks.map((links, index) => {
            const { href, data, text } = links
            const trigger = (
              <Link href={href} className='font-bold tracking-wider p-4'>
                {text}
              </Link>
            )
            return (
              <Dropdown trigger={trigger} key={index}>
                {data?.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className='hover:text-white text-gray-300 transition truncate py-1'
                  >
                    {link.title}
                  </Link>
                ))}
              </Dropdown>
            )
          })}
        </nav>
        {isSticky && <IconNav />}
      </Container>
    </div>
  )
}

export default StickyNav
