import { useDisclosure } from "@chakra-ui/react"
import { Dialog } from "./Dialog"
import LoginForm from "./LoginForm"

const Login = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <button
        className='cursor-pointer hover:text-gray-400 transition duration-300'
        onClick={onOpen}
      >
        Log in
      </button>
      <Dialog isOpen={isOpen} onClose={onClose} title='Login'>
        <LoginForm />
      </Dialog>
    </>
  )
}

export default Login
