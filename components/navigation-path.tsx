"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from "next/link"

import { useSelectedLayoutSegments } from "next/navigation"

export default function NavigationPath() {
  const segments = useSelectedLayoutSegments()

  const handleClick = (segment: string) => {
    if (segment === segments.at(-1)) {
      return "/"
    }

    const path =
      "/" + segments.slice(0, segments.indexOf(segment) + 1).join("/")

    return path
  }

  return (
    <nav className="container mx-auto my-3">
      <Breadcrumb className="flex gap-x-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => (
            <div key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="cursor-pointer">
                <BreadcrumbLink asChild>
                  <Link href={handleClick(segment)}>{segment}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  )
}
