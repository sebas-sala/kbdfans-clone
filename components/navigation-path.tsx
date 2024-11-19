'use client'

import { BreadcrumbRoot, BreadcrumbLink } from '@/components/ui/breadcrumb'
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
      <BreadcrumbRoot className="flex gap-x-6">
        <BreadcrumbLink>
          <Link href="/">Home</Link>
        </BreadcrumbLink>
        {segments.map((segment, index) => (
          <BreadcrumbLink className="cursor-pointer" key={index}>
            <BreadcrumbLink onClick={() => handleClick(segment)}>
              {segment}
            </BreadcrumbLink>
          </BreadcrumbLink>
        ))}
      </BreadcrumbRoot>
    </nav>
  )
}
