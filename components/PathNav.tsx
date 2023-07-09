"use client"

import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"

const PathNav = () => {
  const segments = useSelectedLayoutSegments()

  return (
    <nav className='container mx-auto'>
      <ul className='flex gap-4'>
        <Link href='/'>Home</Link>
        <Link href={segments}>{segments}</Link>
      </ul>
    </nav>
  )
}

export default PathNav
