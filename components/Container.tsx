import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  styles?: string
}

const Container: FC<Props> = ({ children, styles }) => {
  return <div className={`container mx-auto ${styles}`}>{children}</div>
}

export default Container
