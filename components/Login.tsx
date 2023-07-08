import { Dialog } from "./Dialog"
import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <Dialog
      title='Login'
      Button={
        <button className='cursor-pointer hover:text-gray-400 transition duration-300'>
          Login
        </button>
      }
    >
      <LoginForm />
    </Dialog>
  )
}

export default Login
