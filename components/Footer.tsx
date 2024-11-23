import Link from "next/link"

import Background from "@/components/Background"
import Container from "@/components/Container"

import { footerLinks } from "@/data"

export default function Footer() {
  return (
    <Background styles="bg-black mt-auto">
      <Container>
        <div className="flex py-8 items-end ">
          <footer className="flex">
            <div className="flex flex-wrap gap-y-6 truncate text-xs text-white">
              {footerLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="border-l-2 border-[#262626] px-2"
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
