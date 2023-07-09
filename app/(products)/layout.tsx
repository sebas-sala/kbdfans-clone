import PathNav from "@/components/PathNav"
import React from "react"

type Props = {
  children: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PathNav />
      {children}
    </>
  )
}

export default layout
