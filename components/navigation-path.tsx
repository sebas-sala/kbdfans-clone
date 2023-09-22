'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'

import { useRouter, useSelectedLayoutSegments } from 'next/navigation'

export default function NavigationPath() {
  const segments = useSelectedLayoutSegments()
  const router = useRouter()

  const handleClick = (segment: string) => {
    if (segment === segments.at(-1)) {
      return
    }
    const path =
      '/' + segments.slice(0, segments.indexOf(segment) + 1).join('/')
    router.push(path)
  }

  return (
    <nav className="container mx-auto my-3">
      <Breadcrumb className="flex gap-x-6">
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <BreadcrumbItem className="cursor-pointer" key={index}>
            <BreadcrumbLink onClick={() => handleClick(segment)}>
              {segment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </nav>
  )
}
