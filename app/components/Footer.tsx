import Background from "@/components/Background"
import Container from "@/components/Container"
import Link from "next/link"

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
            <div className='flex text-white text-xs'>
              <Link href={""} className='border-l-2 border-[#262626] px-2'>
                AliExpress
              </Link>
            </div>
          </footer>
        </div>
      </Container>
    </Background>
  )
}

export default Footer
