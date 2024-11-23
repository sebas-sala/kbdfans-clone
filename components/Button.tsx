interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void
  children: React.ReactNode
  type: "button" | "submit" | "reset"
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  handleClick,
  type,
  disabled,
  className,
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`w-full rounded-md ${
        disabled ? "bg-gray-800" : "bg-blue-400 hover:bg-blue-500"
      } px-4 py-2 text-white  transition ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
