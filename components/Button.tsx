import React from "react"
import { Products } from "@/types/db"

type Props = {
  handleClick: () => void
  text: string
  styles: string
  product: Products
}

const Button: React.FC<Props> = ({ handleClick, text, styles }) => {
  return (
    <button onClick={handleClick} className={styles}>
      {text}
    </button>
  )
}

export default Button
