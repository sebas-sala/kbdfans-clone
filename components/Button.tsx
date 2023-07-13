import React from "react"

type ButtonProps = {
  handleClick?: () => void
  children: React.ReactNode
  type: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className='w-full rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500 transition'
    >
      {children}
    </button>
  )
}

export default Button
