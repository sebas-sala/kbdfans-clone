import { Button } from "../ui/button"

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  onOpen?: () => void
}

export default function AuthButton({ onOpen, children }: IProps) {
  return (
    <Button
      onClick={onOpen}
      className="cursor-pointer transition duration-300 hover:text-gray-400"
    >
      {children}
    </Button>
  )
}
