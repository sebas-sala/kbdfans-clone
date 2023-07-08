import { Dialog } from "./Dialog"
import SignupForm from "./SignupForm"

const Signup = () => {
  return (
    <Dialog
      title='Signup'
      Button={
        <button className='cursor-pointer hover:text-gray-400 transition duration-300'>
          Signup
        </button>
      }
    >
      <SignupForm />
    </Dialog>
  )
}

export default Signup
