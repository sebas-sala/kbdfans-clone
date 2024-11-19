interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function AuthButton({ onClick, children }: IProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer my-1 transition duration-300 hover:text-gray-400"
    >
      {children}
    </button>
  )
}
