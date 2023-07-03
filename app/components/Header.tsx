import Image from "next/image"
import IconNav from "./IconNav"
import FixedNav from "./FixedNav"
import Container from "@/components/Container"

export default function Header() {
  return (
    <header className='bg-black relative'>
      <Container>
        <div className='flex justify-between items-center py-6'>
          <Image
            src='/../public/images/logo.avif'
            width={150}
            height={150}
            className='object-contain w-auto h-auto'
            alt='Logo'
          />
          <IconNav />
        </div>
        <FixedNav />
      </Container>
    </header>
  )
}
