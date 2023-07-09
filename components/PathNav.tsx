"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"

const PathNav = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(useSearchParams)
  }, [searchParams])

  return <div>{searchParams}</div>
}

export default PathNav
