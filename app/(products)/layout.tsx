import PathNav from "@/components/PathNav"

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
