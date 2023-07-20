import Dialog from "./Dialog"
import SignupForm from "./SignupForm"

const Signup = () => {
  return (
    <Dialog
      title='Signup'
      trigger={
        <button className='cursor-pointer transition duration-300 hover:text-gray-400'>
          Signup
        </button>
      }
    >
      <SignupForm />
    </Dialog>
  )
}

export default Signup
