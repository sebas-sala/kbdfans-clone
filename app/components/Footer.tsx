import Link from "next/link"
import Background from "@/components/Background"
import Container from "@/components/Container"
import { footerLinks } from "@/data"

const Footer = () => {
  return (
    <Background styles='bg-black'>
      <Container>
        <div className='py-10 h-40 border-b border-[#262626]'>
          <h4>Subscribe</h4>
          <form></form>
        </div>
        <div className='flex h-40 items-end pb-8'>
          <footer className='flex'>
            <div className='flex text-white text-xs truncate flex-wrap gap-y-6'>
              {footerLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className='border-l-2 border-[#262626] px-2'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </Container>
    </Background>
  )
}

export default Footer
