import { useDisclosure } from "@chakra-ui/react"
import { Dialog } from "./Dialog"

const Signup = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <button
        className='cursor-pointer hover:text-gray-400 transition duration-300'
        onClick={onOpen}
      >
        Create Account
      </button>
      <Dialog isOpen={isOpen} onClose={onClose} title='Signup'>
        <p>Signup</p>
      </Dialog>
    </>
  )
}

export default Signup
