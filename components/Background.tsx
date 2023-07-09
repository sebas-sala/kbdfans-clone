import { FC, ReactNode } from "react"

type Props = {
  styles: string
  children: ReactNode
}

const Background: FC<Props> = ({ children, styles }) => {
  return <div className={styles}>{children}</div>
}

export default Background
