import Link from "next/link"
import { navlinks } from "@/data/links"
import IconNav from "./IconNav"
import Container from "@/components/Container"
import Dropdown from "@/components/Dropdown"

type StickyNavProps = {
  isSticky: boolean
}

const StickyNav = ({ isSticky }: StickyNavProps) => {
  return (
    <div className='sticky top-0 z-50 w-full bg-black'>
      <Container styles='container mx-auto flex justify-between items-center'>
        <nav className='z-50 flex w-full items-center gap-4 text-white'>
          <Link href='/' className='p-4 font-bold tracking-wider'>
            Home
          </Link>
          {navlinks.map((links, index) => {
            const { href, data, text } = links
            const trigger = (
              <Link href={href} className='p-4 font-bold tracking-wider'>
                {text}
              </Link>
            )
            return (
              <Dropdown trigger={trigger} key={index}>
                {data?.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className='truncate py-1 text-gray-300 transition hover:text-white'
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
